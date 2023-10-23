import React from "react";
import StyledVideoItem from "./styled-video-item";
import Heading from "@components/common/heading";
import Text from "@components/common/text";

const VideoItem = ({ t, data, isMain, className }) => {
  return (
    <StyledVideoItem className={className}>
       <iframe
          width={isMain ? "512px" : "224px"}
          src={`https://www.youtube.com/embed/${data.attributes.url}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <Heading level={5} className={`${isMain && 'main'}`} style={{ paddingTop: isMain ? "16px" : "0px" }}>{data.attributes.title}</Heading>
        {isMain && <Text>{data.attributes.description}</Text> }
    </StyledVideoItem>
  );
};

export default VideoItem;
