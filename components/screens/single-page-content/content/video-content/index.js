import React from "react";
import StyledContent from "../styled-content";
import VideoItem from "../../sub-components/connectors-video/sub-components/video-item";

const VideoContent = ({ t, content, ...rest }) => {

  return (
    <StyledContent className="wrapper video">
      {content.map((item, index) => (
        <VideoItem key={index} data={item} isMain={false} className="vid-page-item" />
      ))}
    </StyledContent>
  );
};


export default VideoContent;