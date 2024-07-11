import { useRef, useState, useEffect } from "react";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import StyledContent from "../styled-content";
import StyledSingleContent from "../../styled-single-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import LeftMenu from "../../sub-components/left-menu";
import Video from "../../sub-components/subcat-video";

const CenterSubCategoryContent = ({
    t,
    pageName,
    pageIcon,
    pageItems,
    categoryName,
    categoryUrl,
    level2CategoryName,
    level2CategoryUrl,
    level3CategoryName,
    level3CategoryUrl,
    isLevel4CategoryPage
  }) => {
  const contentRef = useRef();
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

  return (
    <StyledSingleContent>
      <LeftMenu
        t={t}
        pageName={pageName}
        isLevel4CategoryPage={isLevel4CategoryPage}
        level4CategoryHeadings={level4CategoryHeadings}
      />

      <StyledContent className="wrapper">
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
          {pageIcon.data &&
            <img src={pageIcon.data?.attributes.url} alt={pageName} />
          }
          {pageName}
        </Heading>
        <div ref={contentRef}>
          {pageItems.map((item, index) => (
            <div id={`${item.attributes.name.toLowerCase()}_block`} className="subcat-div" key={index}>
              <Heading level={5}>{item.attributes.name}</Heading>
              <ul className="classic-ul">
                {item.attributes.article_docs.data.map((item, index) => (
                  <li key={index}>
                    <InternalLink href={item.attributes.url} label={item.attributes.title} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* <Video t={t} items={articles && articles[0].level_5} /> */}
      </StyledContent>
    </StyledSingleContent>
  );
};

export default CenterSubCategoryContent;