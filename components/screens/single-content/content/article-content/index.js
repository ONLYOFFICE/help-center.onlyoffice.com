import React, { useState, useEffect } from "react";
import StyledContent from "../styled-content";
import ReactHtmlParser from "react-html-parser";
import Tag from "@components/common/tag";
import ArticlePopup from "../../article-popup";
import Heading from "@components/common/heading";
import Breadcrumbs from "@components/common/breadcrumbs";
import Video from "../../video";

const ArticleContent = ({ t, articles, tags, videos, children, onActiveItemChange }) => {
  const isMain = articles?.attributes.is_main;
  const articleTags = articles?.attributes.tags?.data;
  const curVideos = articles?.attributes.videos?.data.length;
  const [modalActive, setModalActive] = useState(false);
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
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const divs = document.querySelectorAll(".gs_content");
  //     const visibleDivs = Array.from(divs).filter(div => {
  //       const rect = div.getBoundingClientRect();
  //       return rect.top >= 0 && rect.bottom <= window.innerHeight;
  //     });
  //     if (visibleDivs.length > 0) {
  //       const activeDiv = visibleDivs[0];
  //       const activeMenuItemId = activeDiv.getAttribute("id");
  //       setActiveMenuItem(activeMenuItemId);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [setActiveMenuItem]);
  return (
    <>
      <div className={!isMain ? "wrapper" : "wrapper main"}>
        <Breadcrumbs t={t} article={articles} />
        <Heading level={3}>{articles?.attributes.title}</Heading>
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
        {curVideos > 0 && <Video t={t} items={articles} videos={videos} />}
        {ReactHtmlParser(articles?.attributes.content)}
      </div>
      {children}
      <ArticlePopup
        t={t}
        active={modalActive}
        tag={tag}
        allTags={tags}
        setActive={setModalActive}
      />
    </>
  );
};

export default ArticleContent;
