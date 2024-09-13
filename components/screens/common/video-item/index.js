import StyledVideoItem from "./styled-video-item";
import YouTube from "react-youtube";
import Heading from "@components/common/heading";
import Text from "@components/common/text";

const VideoItem = ({ data, isMain }) => {
  return (
    <StyledVideoItem className="video-item">
      <div className="video-item-frame">
        <YouTube
          videoId={data.attributes.url}
          opts={{
            width: isMain ? "512" : "224",
            height: "auto"
          }}
        />
      </div>
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
