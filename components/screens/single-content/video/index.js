import React, { useState } from "react";
import StyledVideo from "./styled-video";
import Heading from "@components/common/heading";
import Box from "@components/common/box";
import VideoItem from "./sub-components/video-item";
import VideoCarousel from "../video-carousel";

const Video = ({ t, items, videos, isMain }) => {
  const curVideos = items.attributes.videos.data;
  const videosLength = curVideos?.length;
  const maxShown = 1;
  const allItems = videosLength - maxShown;
  const allvideos = curVideos.slice(1, allItems);
  return (
    <StyledVideo>
      <Heading level={4}>{t("Watch video")}</Heading>
      <Box className="vids">
        <div>
        {curVideos.slice(0, 1)?.map((it, index) => {
          return <VideoItem t={t} key={index} data={it} isMain={true} />;
        })}
        </div>
        <VideoCarousel t={t} items={allvideos} />
      </Box>
    </StyledVideo>
  );
};

export default Video;
