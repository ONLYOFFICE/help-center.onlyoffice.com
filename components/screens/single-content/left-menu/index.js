import React, { useEffect, useRef, useState } from "react";
import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import items from "./data/items";
import MiniSearch from "./sub-components/search";
import Heading from "@components/common/heading";

const LeftMenu = ({ t, isCategory, articles, category, categories, ...rest }) => {
  const leftMenu = useRef();
  const catData = isCategory && categories.find(
    (it) => it.attributes.slug_id === category
  )?.attributes;
  const artData = isCategory && articles?.filter(
    (it) =>
      it.attributes.category.data.attributes.slug_id === category
  )
    .sort(function (a, b) {
      return a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase()
        ? -1
        : 1;
    });

  const [menuItems, setMenuItems] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  useEffect(() => {
    const content = !isCategory && articles.attributes.content;
    const headings = document.createElement('div');
    headings.innerHTML = content;
    const h2 = headings.querySelectorAll('h2');
    const h3 = headings.querySelectorAll('h3');
    const items = [];

    [...h2, ...h3].forEach((heading) => {
      const text = heading.textContent;
      const id = text.replace(/\W/g, '').toLowerCase() + '_block';
      const item = {
        id,
        text,
      };
      items.push(item);
      heading.parentElement.id = id;
    });
    setMenuItems(items);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [articles]);

  const handleScroll = () => {
    if (menuItems.length === 0) {
      return;
    }
    const sections = menuItems.map((item) => ({
      id: item.id,
      position: document.getElementById(item.id).offsetTop,
    }));

    const currentSection = sections.find((section) => {
      const { position } = section;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      return scrollY >= position - windowHeight * 0.5;
    });

    setActiveMenuItem(currentSection ? currentSection.id : null);
  };

  return (
    <StyledLeftMenu ref={leftMenu}>
      <div className="lm-wrap">
        <MiniSearch />
        {isCategory ? <>
          <Heading level={6}>{catData.name}</Heading>
          <ul>
            {artData.map((article, index) => (
              <li key={index}>
                <InternalLink href={article.attributes.url}>
                  {article.attributes.title}
                </InternalLink>
              </li>
            ))}
          </ul>
        </> : <>
          <Heading level={6}>{articles.attributes.title}</Heading>
          <ul className="page" onScroll={handleScroll}>
            {menuItems.map((item, index) => (
              <li key={index} className={activeMenuItem === item.id ? 'active' : ''}>
                <InternalLink href={`#${item.id}`}>
                  {item.text}
                </InternalLink>
              </li>
            ))}
          </ul>
        </>}
        <ul className="stat">
          {items.map((link, index) => (
            <li key={index}>
              <InternalLink href={link.href} className={link.className}>
                {link.label}
              </InternalLink>
            </li>
          ))}
        </ul>

      </div>
    </StyledLeftMenu>
  )
}

export default LeftMenu;