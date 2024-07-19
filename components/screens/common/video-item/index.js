import StyledVideoItem from "./styled-video-item";
import { useEffect } from "react";
import YouTube from "react-youtube";
import Heading from "@components/common/heading";
import Text from "@components/common/text";

const VideoItem = ({ data, isMain }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <StyledVideoItem className="video-item">
      <YouTube
        videoId={data.attributes.url}
        opts={{
          width: isMain ? "512" : "224",
          height: "auto"
        }}
      />
      <Heading
        className={`${isMain && "main"}`}
        label={data.attributes.title}
        level={5}
        style={{ paddingTop: isMain ? "16px" : "0px" }}
      />
      {isMain &&
        <Text label={data.attributes.description} />
      }
    </StyledVideoItem>
  );
};

export default VideoItem;
