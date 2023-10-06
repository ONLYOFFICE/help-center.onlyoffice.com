import React, { useState, useEffect, useMemo } from "react";
import StyledContent from "../styled-content";
import ReactHtmlParser from "react-html-parser";
import Tag from "@components/common/tag";
import ArticlePopup from "../../article-popup";
import Heading from "@components/common/heading";
import Breadcrumbs from "@components/common/breadcrumbs";
import Video from "../../video";
import ImagePopup from "../../image-popup";
import RawHtmlStyle from "@components/utils/rawHtmlStyles";
import DownloadArea from "../../download-area";
import useWindowWidth from '@utils/helpers/useWindowProvider';

const CenterArticleContent = ({ t, article, tags, videos, onActiveItemChange, currentLanguage }) => {
  const windowWidth = useWindowWidth();
  const { articleTags, curVideos } = useMemo(() => {
    const tags = article?.attributes.tags?.data;
    const videos = article?.attributes.videos?.data.length;
    return {
      articleTags: tags,
      curVideos: videos,
    };
  }, [article]);
  const sortedTags = useMemo(() => {
    const sorted = [...articleTags];
    sorted.sort((a, b) =>
      a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase() ? -1 : 1
    );
    return sorted;
  }, [articleTags]);
  const [modalActive, setModalActive] = useState(false);
  const [imageModalActive, setImageModalActive] = useState(false);
  const [tag, setTag] = useState();
  const handlerSetModal = (active) => {
    setModalActive(!!active);
    setTag(active);
  };
  // photo popup
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
          <Breadcrumbs t={t} article={article} />
          <Heading level={3}>{article?.attributes.title}</Heading>
          <div className="tags">
            {sortedTags?.map((item, index) => (
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
          {curVideos > 0 && <Video t={t} items={article} videos={videos} />}
          <RawHtmlStyle onClick={handleImageClick}>{ReactHtmlParser(article?.attributes.content)}</RawHtmlStyle>
          {windowWidth > 968 && <DownloadArea className="download-area" t={t} />}
          <ArticlePopup
            t={t}
            active={modalActive}
            tag={tag}
            allTags={tags}
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
