import React, { useState } from "react";
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

const CenterArticleContent = ({ t, article, tags, videos, onActiveItemChange, currentLanguage, category, categories, pagePath }) => {
  const [modalActive, setModalActive] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [tag, setTag] = useState();
  const handlerSetModal = (active) => {
    setModalActive(!!active);
    setTag(active);
  };

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
    } else if (clickedTarget.tagName === 'SPAN' && clickedTarget.classList.contains('iptoggler')) {
      const ipHideCont = document.querySelector('.iphidecont');
      const ipShowCont = document.querySelector('.ipshowcont');
      const ipContents = document.querySelector('.ipcontents');
  
      if (clickedTarget.classList.contains('iphidecont')) {
        ipHideCont.style.display = 'none';
        ipContents.style.display = 'none';
        ipShowCont.style.display = 'block'; 
      } else if (clickedTarget.classList.contains('ipshowcont')) {
        ipHideCont.style.display = 'block';
        ipContents.style.display = 'block';
        ipShowCont.style.display = 'none';
      }
    }
  };
  return (
    <StyledContent className="wrapper">
      <Breadcrumbs t={t} article={article} categories={categories} mainCategory={category} pagePath={pagePath} />
      <Heading level={3}>{article?.attributes.title}</Heading>
      {tags && <div className="tags">
        {tags.map((item, index) => (
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
      {videos && videos.length > 0 && <Video t={t} videos={videos} />}
      <RawHtmlStyle onClick={handleClick}>{ReactHtmlParser(article?.attributes.content)}</RawHtmlStyle>
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
    </StyledContent>
  );
};

export default CenterArticleContent;
