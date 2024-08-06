import StyledSubCategoryContent from "./styled-subcategory-content";
import { useRef, useState, useEffect } from "react";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
// import Video from "../../sub-components/subcat-video";

const SubCategoryContent = ({
    t,
    pageName,
    pageIcon,
    pageItems,
    categorySlug,
    categoryName,
    categoryUrl,
    level2CategoryName,
    level2CategoryUrl,
    level3CategoryName,
    level3CategoryUrl,
    leftMenuMobile,
    setLeftMenuMobile,
    backBtnName,
    backBtnUrl
  }) => {
  const contentRef = useRef();
  const [activeSection, setActiveSection] = useState(null);
  const [level4CategoryHeadings, setLevel4CategoryHeadings] = useState([]);

  useEffect(() => {
    if (contentRef.current) {
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
  
      setLevel4CategoryHeadings(extractHeadings(contentRef.current.outerHTML));
    }
  }, [contentRef]);

  useEffect(() => {
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
    <StyledSubCategoryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={pageName}
          isLevel4CategoryPage={true}
          headings={level4CategoryHeadings}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
          backBtnName={backBtnName}
          backBtnUrl={backBtnUrl}
        />
        <div className="wrapper">
          <Breadcrumbs
            t={t}
            categoryName={categoryName}
            categoryUrl={categoryUrl}
            level2CategoryName={level2CategoryName}
            level2CategoryUrl={level2CategoryUrl}
            level3CategoryName={level3CategoryName}
            level3CategoryUrl={level3CategoryUrl}
            pageName={pageName}
          />

          <Heading level={3} className="subcat-heading">
            {pageIcon?.data &&
              <img src={pageIcon.data?.attributes.url} alt={pageName} />
            }
            {pageName}
          </Heading>
          <div ref={contentRef}>
            {pageItems.sort((a, b) => {
                const aValue = a.attributes.name || a.attributes.title;
                const bValue = b.attributes.name || b.attributes.title;
                return aValue.localeCompare(bValue);
              }).map((item, index) => (
                <div id={`${item.attributes.name.replace(' ', '_').toLowerCase()}_block`} className="subcat-div" key={index}>
                  <Heading level={5}>{item.attributes.name}</Heading>
                  <ul className="classic-ul">
                    {item.attributes[`article_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data.sort((a, b) => {
                        const aValue = a.attributes.name || a.attributes.title;
                        const bValue = b.attributes.name || b.attributes.title;
                        return aValue.localeCompare(bValue);
                      }).map((item, index) => (
                        <li key={index}>
                          <InternalLink href={item.attributes.url} label={item.attributes.title} />
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )
            )}
          </div>
          {/* <Video t={t} items={articles && articles[0].level_5} /> */}
        </div>
      </StyledWrapperContent>
    </StyledSubCategoryContent>
  );
};

export default SubCategoryContent;