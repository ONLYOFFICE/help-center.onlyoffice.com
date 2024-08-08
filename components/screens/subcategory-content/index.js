import StyledSubCategoryContent from "./styled-subcategory-content";
import { useRef, useState, useEffect } from "react";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import VideoBlock from "@components/screens/common/video-block";

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
    backBtnUrl,
    video
  }) => {
  const contentRef = useRef();
  const lastActiveSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (contentRef.current) {
      const extractHeadings = (description) => {
        const div = document.createElement("div");
        div.innerHTML = description;
        const headings = [];

        div.querySelectorAll("[id$='_block']").forEach(block => {
          const firstHeading = block.querySelector("h5");
          if (firstHeading) {
            headings.push({
              id: block.id,
              text: firstHeading.innerText
            });
          }
        });
        return headings;
      };
  
      setHeadings(extractHeadings(contentRef.current.outerHTML));
    }
  }, [contentRef]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("[id$='_block']");
      const menuSections = Array.from(sections).filter(section => section.querySelector("h5"));

      let currentSection = null;
      menuSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if ((scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) || (scrollPosition > sectionTop + sectionHeight)) {
          currentSection = section.id;
        }
      });

      if (currentSection !== lastActiveSectionRef.current) {
        lastActiveSectionRef.current = currentSection;
        setActiveSection(currentSection);
      } else {
        setActiveSection(currentSection || menuSections[0].id);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledSubCategoryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={pageName}
          isLevel4CategoryPage={true}
          headings={headings}
          activeSection={activeSection}
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
            {pageItems?.sort((a, b) => {
                const aValue = a.attributes.name || a.attributes.title;
                const bValue = b.attributes.name || b.attributes.title;
                return aValue.localeCompare(bValue);
              }).map((item, index) => (
                <div id={`${item.attributes.name.replace(" ", "_").toLowerCase()}_block`} className="subcat-div" key={index}>
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
          {video?.data && 
            <VideoBlock t={t} video={video} />
          }
        </div>
      </StyledWrapperContent>
    </StyledSubCategoryContent>
  );
};

export default SubCategoryContent;