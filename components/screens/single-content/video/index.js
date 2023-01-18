import React, { useState } from "react";
import StyledVideo from "./styled-video";
import Heading from "@components/common/heading";
import Box from "@components/common/box";
import VideoItem from "./sub-components/video-item";
import InternalLink from "@components/common/internal-link";

const Video = ({ t, items, videos, isMain }) => {
  const maxShown = 2;
  const curVideos = !isMain ? items.attributes.videos.data : videos;
  const videosLength = curVideos?.length;
  const allItems = videosLength - maxShown;
  const [next, setNext] = useState(maxShown);
  const handleMoreVideos = () => {
    setNext(next + allItems);
  };
  return (
    <StyledVideo>
      <Heading level={4}>{t("Watch video")}</Heading>
      <Box>
        {curVideos.slice(0, next)?.map((it, index) => {
          return <VideoItem t={t} key={index} data={it} videos={videos} />;
        })}
        {next < videosLength && (
          <span className="more" onClick={handleMoreVideos}>More videos</span>
        )}
      </Box>
    </StyledVideo>
  );
};


export default Video;
