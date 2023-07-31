import React, { useState, useEffect, useRef } from "react";
import StyledContent from "../styled-content";
import ReactHtmlParser from "react-html-parser";
import Tag from "@components/common/tag";
import ArticlePopup from "../../article-popup";
import Heading from "@components/common/heading";
import Breadcrumbs from "@components/common/breadcrumbs";
import Video from "../../video";
import ImagePopup from "../../image-popup";
import RawHtmlStyle from "@components/utils/rawHtmlStyles";

const CenterArticleContent = ({ t, articles, tags, videos, children, onActiveItemChange }) => {
  const articleTags = articles?.attributes.tags?.data;
  const curVideos = articles?.attributes.videos?.data.length;
  const [modalActive, setModalActive] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [tag, setTag] = useState();
  const handlerSetModal = (active) => {
    setModalActive(!!active);
    setTag(active);
  };
  {
    articleTags?.sort(function (a, b) {
      return a.attributes.title.toLowerCase() <
        b.attributes.title.toLowerCase()
        ? -1
        : 1;
    });
  }

  const [bigPhotoSrc, setBigPhotoSrc] = useState(null);
  const handleImageClick = (event) => {
    const clickedImage = event.target;
    if (clickedImage.tagName === 'IMG') {
      const targetImageId = clickedImage.getAttribute('target');
      if (targetImageId) {
        const closestBigPhotoScreen = document.querySelector(`.bigphoto_screen[id="${targetImageId}"]`);
        if (closestBigPhotoScreen) {
          setBigPhotoSrc(closestBigPhotoScreen.getAttribute('src'));
          setImageModalActive(true);
        }
      }
    }
  };
  return (
    <StyledContent className="wrapper">
      <Breadcrumbs t={t} article={articles} />
      <Heading level={3}>{articles?.attributes.title}</Heading>
      <div className="tags">
        {articleTags?.map((item, index) => (
          <Tag
            key={index}
            t={t}
            type={"page"}
            label={item.attributes.title}
            className="tag"
            onClick={() => handlerSetModal(item.attributes.title)}
          />
        ))}
      </div>
      {curVideos > 0 && <Video t={t} items={articles} videos={videos} />}
      <RawHtmlStyle onClick={handleImageClick}>{ReactHtmlParser(articles?.attributes.content)}</RawHtmlStyle>
      {children}
      <ArticlePopup
        t={t}
        active={modalActive}
        tag={tag}
        allTags={tags}
        setActive={setModalActive}
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
