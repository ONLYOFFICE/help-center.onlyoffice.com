import StyledVideoBlock from "./styled-video-block";
import { useEffect } from "react";
import YouTube from "react-youtube";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import InternalLink from "@components/common/internal-link";

const VideoBlock = ({ t, video }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <StyledVideoBlock className="video-block">
      <Heading className="video-block-title" level={3} dangerouslySetInnerHTML={{ __html: t("VideosWithASimilarTopic") }} />

      <div className="video-block-wrapper">
        <YouTube className="video-block-youtube" videoId={video.data.attributes.url} />
        <div className="video-block-content">
          <Heading className="video-block-name" level={4} label={video.data.attributes.title} />
          <Text className="video-block-description" label={video.data.attributes.description} />
        </div>
      </div>

      <InternalLink className="video-block-link" label={t("MoreVideos")} href="/video.aspx" />
    </StyledVideoBlock>
  );
};

export default VideoBlock;
