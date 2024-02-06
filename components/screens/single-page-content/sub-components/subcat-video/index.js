import React, { useMemo, useState, useEffect } from "react";
import StyledVideo from "./styled-video";
import Heading from "@components/common/heading";
import Box from "@components/common/box";
import YouTubePlayer from "@components/common/youtube";
import Text from "@components/common/text";
import Button from "@components/common/button";
import Link from "@components/common/internal-link";

const Video = ({ t, items }) => {
  const curVideos = useMemo(() => {
    return items?.find(item => item.videos);
  }, [items]);

  return (
    <StyledVideo>
      {!curVideos && <Heading className="vid-heading" level={3}>{t("VideosWithASimilarTopic")}</Heading>}
      <Box className="vids">
        <YouTubePlayer videoId={curVideos?.videos[0].url} customWidth={322} customHeight={180} />
        <Box className="description">
          <Heading level={4}>{curVideos?.videos[0].title}</Heading>
          <Text>{curVideos?.videos[0].description}</Text>
        </Box>
      </Box>
      <Link href="/videos.aspx"><Button typeButton="transparent" label={t("MoreVideos")} /></Link>
    </StyledVideo>
  );
};

export default Video;
