import React, { useEffect, useRef, useState } from "react";
import StyledVideoContent from "./styled-video-content";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import VideoItem from "@components/screens/common/video-item";
import Heading from "@components/common/heading";
import { extractHeadings, handleArticleScroll } from "../article-content/utils/scroll-highlight-functions";

const VideoContent = ({ t, videoData, leftMenuMobile, setLeftMenuMobile }) => {
  const [headings, setHeadings] = useState([]);
  const contentRef = useRef(null);
  const lastActiveSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const groupedVideos = {};
  const order = ['Docs', 'Docspace', 'Workspace', 'Connectors', 'Desktop', 'Mobile'];

  videoData.data.forEach(video => {
    Object.keys(video.attributes).forEach(key => {
      if (key.startsWith('article') && video.attributes[key]?.data) {
        const groupName = key === 'article'
          ? 'Connectors'
          : key.replace('article_', '').charAt(0).toUpperCase() + key.slice(9);

        if (!groupedVideos[key]) {
          groupedVideos[key] = { name: groupName, videos: [] };
        }
        groupedVideos[key].videos.push(video);
      }
    });
  });

  const sortedGroupedVideos = Object.keys(groupedVideos)
    .sort((a, b) => {
      const nameA = groupedVideos[a].name;
      const nameB = groupedVideos[b].name;
      return order.indexOf(nameA) - order.indexOf(nameB);
    })
    .map(key => groupedVideos[key]);

  useEffect(() => {
    if (contentRef.current) {
      setHeadings(extractHeadings(contentRef.current.outerHTML, "h4"));
    }
  }, [contentRef]);

  useEffect(() => {
    const scrollHandler = (event) => handleArticleScroll(setActiveSection, false, lastActiveSectionRef, "h4");
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <StyledVideoContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          backBtnName={t("Home")}
          backBtnUrl="/"
          leftMenuMobile={leftMenuMobile}
          headings={headings}
          isLevel4CategoryPage={true}
          activeSection={activeSection}
          setLeftMenuMobile={setLeftMenuMobile}
        />
        <div className="wrapper" ref={contentRef}>
          {Object.entries(sortedGroupedVideos).map(([key, group]) => (
            <div id={`${key}_block`} key={key}>
              <Heading level={4}>{group.name}</Heading>
              <div className="video-items">
                {group.videos.map(video => (
                  <VideoItem key={video.id} data={video} isMain={false} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </StyledWrapperContent>
    </StyledVideoContent>
  );
};

export default VideoContent;
