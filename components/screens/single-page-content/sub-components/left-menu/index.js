import StyledLeftMenu from "./styled-left-menu";
import { useState, useEffect } from "react";
import InternalLink from "@components/common/internal-link";
import items from "./data/items";
import MiniSearch from "./sub-components/search";
import Heading from "@components/common/heading";
import TreeView from "@components/common/treeview";

const LeftMenu = ({ t, isArticle, pageName, pageDescription, pageItems, pageItemsLevel, categorySlug, isLevel4CategoryPage, level4CategoryHeadings }) => {
  const [headings, setHeadings] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (isArticle) {
      const extractHeadings = (description) => {
        const div = document.createElement("div");
        div.innerHTML = description;
        const headings = [];

        div.querySelectorAll("[id$='_block']").forEach(block => {
          const firstHeading = block.querySelector("h1, h2, h3, h4, h5, h6");
          if (firstHeading) {
            headings.push({
              id: block.id,
              text: firstHeading.innerText
            });
          }
        });
        return headings;
      };
  
      setHeadings(extractHeadings(pageDescription));
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("[id$='_block']");

      let currentSection = null;
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection || activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledLeftMenu>
      <div className="lm-wrap">
        <MiniSearch />
        <Heading level={6} label={pageName} />
        {isArticle ? (
          <ul className="page">
            {headings.map((item, index) => (
              <li className={activeSection === item.id ? "active" : ""} key={index}>
                <InternalLink href={`#${item.id}`}>{item.text}</InternalLink>
              </li>
            ))}
          </ul>
        ) : isLevel4CategoryPage ? (
          <ul className="page">
            {level4CategoryHeadings.map((item, index) => (
              <li className={activeSection === item.id ? "active" : ""} key={index}>
                <InternalLink href={`#${item.id}`}>{item.text}</InternalLink>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            {pageItems?.map((article, index) => (
              <TreeView key={index} children={article} pageItemsLevel={pageItemsLevel} categorySlug={categorySlug} t={t} />
            ))}
          </div>
        )}
        <ul className="stat">
          {items.map((link, index) => (
            <li key={index}>
              <InternalLink href={link.href} className={link.className}>
                {t(link.label)}
              </InternalLink>
            </li>
          ))}
        </ul>
      </div>
    </StyledLeftMenu>
  )
}

export default LeftMenu;