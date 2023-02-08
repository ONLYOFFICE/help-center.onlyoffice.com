import React from "react";
import StyledVideoItem from "./styled-video-item";
import Heading from "@components/common/heading";
import ExternalLink from "@components/common/link";
import Text from "@components/common/text";

const VideoItem = ({ t, data, videos }) => {
  const videoData = videos.find((it) => it.id === data.id).attributes.cover.data?.attributes;

  return (
    <StyledVideoItem>
      <ExternalLink href={data.attributes.url}>
        <img className="video-cover" src={videoData?.url} alt="video_cover" />
        <Heading level={5}>{data.attributes.title}</Heading>
        <Text>{data.attributes.description}</Text>
      </ExternalLink>
    </StyledVideoItem>
  );
};

export default VideoItem;
