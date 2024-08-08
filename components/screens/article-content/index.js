import { StyledArticleContent, RawHtmlStyle } from "./styled-article-content";
import { useState, useEffect, useRef } from "react";
import getTagsArticle from "@lib/strapi/getTagsArticle";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import { BuildTable } from "@utils/helpers/TableBuilder/language_table_builder.js";
import Tooltip from "@components/common/tooltip";
import ImagePopup from "./sub-components/image-popup";
import DownloadArea from "./sub-components/download-area";
import ConnectorsVideo from "./sub-components/connectors-video";
import ArticlePopup from "../common/article-popup";
import Cookies from "universal-cookie";
import ScrollToTopButton from "@components/screens/common/scroll-to-top-button";
import { handleFaqAccordionClick, handleImagePopupClick, handleTogglerClick } from "./utils/handle-click-functions";

const ArticleContent = ({
    t,
    locale,
    categoryName,
    categoryUrl,
    level2CategoryName,
    level2CategoryUrl,
    level3CategoryName,
    level3CategoryUrl,
    level4CategoryName,
    level4CategoryUrl,
    pageName,
    pageDescription,
    tags,
    videos,
    backBtnName,
    backBtnUrl,
    leftMenuMobile,
    setLeftMenuMobile
  }) => {
  const containerRef = useRef(null);
  const lastActiveSectionRef = useRef(null);
  const [modalActive, setModalActive] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [bigPhotoSrc, setBigPhotoSrc] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [tagName, setTagName] = useState();
  const [tagItems, setTagItems] = useState();
  const [hasMoreTags, setHasMoreTags] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const page = 1;
  const cookies = new Cookies(null, { path: "/" });

  const handleTagModal = async (tagName) => {
    const data = await getTagsArticle(locale, tagName, 2, page);

    const { articles, article_desktops, article_docs, article_docspaces, article_mobiles, article_workspaces } = data;
    const hasMoreTags = [articles, article_desktops, article_docs, article_docspaces, article_mobiles, article_workspaces].some(({ meta: { pagination } }) => pagination.total > pagination.page + 1);

    setHasMoreTags(hasMoreTags);
    setTagItems([
      ...articles?.data || [],
      ...article_desktops?.data || [],
      ...article_docs?.data || [],
      ...article_docspaces?.data || [],
      ...article_mobiles?.data || [],
      ...article_workspaces?.data || [],
    ]);
    setTagName(tagName);
    setModalActive(true);
  };

  useEffect(() => {
    if (containerRef.current) {
      const mainBuscallContainer = containerRef.current.querySelector(".main_buscall_container");

      if (mainBuscallContainer) {
        const languagesListTables = mainBuscallContainer.querySelectorAll(".languages_list_table");
        const foundTable = Array.from(languagesListTables).find(table => table.id.startsWith("languages"));

        if (foundTable) {
          const tableId = foundTable.id;
          BuildTable(tableId, cookies);
        }
      }
    }

    const extractHeadings = (description) => {
      const div = document.createElement("div");
      div.innerHTML = description;
      const headings = [];

      div.querySelectorAll("[id$='_block']").forEach(block => {
        const firstHeading = block.querySelector("h4");
        if (firstHeading) {
          headings.push({
            id: block.id,
            text: firstHeading.innerText
          });
        }
      });
      if (videos && videos.data.length > 0) {
        headings.unshift({
          id: "watchvideo_block",
          text: t("WatchVideo")
        });
      }
      return headings;
    };

    setHeadings(extractHeadings(pageDescription));

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("[id$='_block']");
      const menuSections = Array.from(sections).filter(section => section.querySelector("h4"));

      let currentSection = lastActiveSectionRef.current;
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
        setActiveSection(currentSection || menuSections[0]?.id);
      }

      const scrollHeight = window.innerHeight * 2;
      setShowButton(window.scrollY > scrollHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    handleFaqAccordionClick(event, containerRef.current);
    handleImagePopupClick(event, setBigPhotoSrc, setImageModalActive);
    handleTogglerClick(event);
  };

  return (
    <StyledArticleContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={pageName}
          headings={headings}
          isArticle={true}
          activeSection={activeSection}
          backBtnName={backBtnName}
          backBtnUrl={backBtnUrl}
          leftMenuMobile={leftMenuMobile}
          setLeftMenuMobile={setLeftMenuMobile}
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
            level4CategoryName={level4CategoryName}
            level4CategoryUrl={level4CategoryUrl}
            pageName={pageName}
          />
          <Heading level={3}>{pageName}</Heading>
          {tags?.data &&
            <div className="tags">
              {tags?.data.map((item, index) => (
                <div
                  onClick={() => handleTagModal(item.attributes.title)}
                  className="tag"
                  key={index}
                >
                  {item.attributes.title}
                </div>
              ))}
            </div>
          }
          <div>
            {videos && videos.data.length > 0 &&
              <ConnectorsVideo t={t} videos={videos.data} />
            }
            <RawHtmlStyle onClick={handleClick} ref={containerRef}>{ReactHtmlParser(pageDescription)}</RawHtmlStyle>
          </div>
          <DownloadArea className="download-area" t={t} />
          <ArticlePopup
            t={t}
            locale={locale}
            tagName={tagName}
            tagItems={tagItems}
            modalActive={modalActive}
            setModalActive={setModalActive}
            hasMoreTags={hasMoreTags}
            page={page}
            setHasMoreTags={setHasMoreTags}
            setTagItems={setTagItems}
          />
          <ImagePopup
            t={t}
            image={bigPhotoSrc}
            active={imageModalActive}
            setActive={setImageModalActive}
          />
          <Tooltip />
        </div>
      </StyledWrapperContent>
      <ScrollToTopButton showButton={showButton} />
    </StyledArticleContent>
  );
};

export default ArticleContent;