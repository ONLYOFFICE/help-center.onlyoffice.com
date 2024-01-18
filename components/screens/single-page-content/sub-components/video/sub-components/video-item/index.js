import React from "react";
import StyledVideoItem from "./styled-video-item";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import YouTubePlayer from "@components/common/youtube";

const VideoItem = ({ t, data, isMain, className }) => {
  return (
    <StyledVideoItem className={className}>
        <YouTubePlayer videoId={data.attributes.url} isMain={isMain} />
        <Heading level={5} className={`${isMain && 'main'}`} style={{ paddingTop: isMain ? "16px" : "0px" }}>{data.attributes.title}</Heading>
        {isMain && <Text>{data.attributes.description}</Text> }
    </StyledVideoItem>
  );
};

export default VideoItem;
