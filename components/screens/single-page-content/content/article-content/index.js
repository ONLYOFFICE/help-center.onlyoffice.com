import React, { useState, useEffect, useRef } from "react";
import StyledContent from "../styled-content";
import ReactHtmlParser from "react-html-parser";
import Tag from "@components/common/tag";
import ArticlePopup from "../../pop-ups/article-popup";
import Heading from "@components/common/heading";
import Breadcrumbs from "@components/common/breadcrumbs";
import Video from "../../sub-components/connectors-video";
import ImagePopup from "../../pop-ups/image-popup";
import RawHtmlStyle from "@components/utils/rawHtmlStyles";
import DownloadArea from "../../sub-components/download-area";
import { BuildTable } from "@utils/helpers/TableBuilder/language_table_builder.js";
import Tooltip from "@components/common/tooltip";

const CenterArticleContent = ({
    t,
    currentLanguage,
    categoryName,
    categoryUrl,
    level2CategoryName,
    level2CategoryUrl,
    pageName,
    pageDescription,
    tags,
    videos
  }) => {
  const [modalActive, setModalActive] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [tag, setTag] = useState();
  const containerRef = useRef(null);
  const handlerSetModal = (active) => {
    setModalActive(!!active);
    setTag(active);
  };

  useEffect(() => {
    if (containerRef.current) {
      const mainBuscallContainer = containerRef.current.querySelector('.main_buscall_container');
      if (mainBuscallContainer) {
        const languagesListTables = mainBuscallContainer.querySelectorAll('.languages_list_table');
        const foundTable = Array.from(languagesListTables).find(table => table.id.startsWith('languages'));
       
        if (foundTable) {
          const tableId = foundTable.id;
          BuildTable(tableId);
        }
      }
    }
  }, []);

  // photo popup
  const [bigPhotoSrc, setBigPhotoSrc] = useState(null);
  const handleClick = (event) => {
    const clickedTarget = event.target;
    if (clickedTarget.tagName === 'IMG') {
      const targetImageId = clickedTarget.getAttribute('target');
      if (targetImageId) {
        const closestBigPhotoScreen = document.querySelector(`.bigphoto_screen[id="${targetImageId}"]`);
        if (closestBigPhotoScreen) {
          setBigPhotoSrc(closestBigPhotoScreen.getAttribute('src'));
          setImageModalActive(true);
        }
      }
    } else if (clickedTarget.tagName === 'SPAN' && clickedTarget.classList.contains('toggler')) {
      const ipHideCont = document.querySelector('.iphidecont') || document.querySelector('.hidecont');
      const ipShowCont = document.querySelector('.ipshowcont') || document.querySelector('.showcont');
      const ipContents = document.querySelector('.ipcontents') || document.querySelector('.contents');
  
      if (clickedTarget.classList.contains('iphidecont') || clickedTarget.classList.contains('hidecont')) {
        ipHideCont.style.display = 'none';
        ipContents.style.display = 'none';
        ipShowCont.style.display = 'block'; 
      } else if (clickedTarget.classList.contains('ipshowcont') || clickedTarget.classList.contains('showcont')) {
        ipHideCont.style.display = 'block';
        ipContents.style.display = 'block';
        ipShowCont.style.display = 'none';
      }
    }
  };

  return (
    <StyledContent className="wrapper">
      <Breadcrumbs
        t={t}
        categoryName={categoryName}
        categoryUrl={categoryUrl}
        level2CategoryName={level2CategoryName}
        level2CategoryUrl={level2CategoryUrl}
        pageName={pageName}
      />
      <Heading level={3}>{pageName}</Heading>
      {tags?.data && 
        <div className="tags">
          {tags?.data.map((item, index) => (
            <Tag
              key={index}
              t={t}
              type={"page"}
              label={item.attributes.title}
              className="tag"
              onClick={() => handlerSetModal(item.attributes.title)}
            />
          ))}
      </div>}
      {videos && videos.data.length > 0 && 
        <Video t={t} videos={videos.data} />
      }
      <RawHtmlStyle onClick={handleClick} ref={containerRef}>{ReactHtmlParser(pageDescription)}</RawHtmlStyle>
      <DownloadArea className="download-area" t={t} />
      <ArticlePopup
        t={t}
        active={modalActive}
        tag={tag}
        setActive={setModalActive}
        language={currentLanguage}
      />
      <ImagePopup
        t={t}
        image={bigPhotoSrc}
        active={imageModalActive}
        setActive={setImageModalActive}
      />
      <Tooltip />
    </StyledContent>
  );
};

export default CenterArticleContent;
