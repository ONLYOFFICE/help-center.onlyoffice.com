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
    const foundItem = items?.find(item => item.videos);
    return foundItem?.videos || null;
  }, [items]);
  
   const staticVideo = {
    url: "S4lBPslNUzw",
    title: "How to deploy ONLYOFFICE Docs on your server using Docker",
    description: "Learn how to get powerful online editors ONLYOFFICE Docs ready on your server using Docker. It is super easy and won't take more than a couple of minutes!",
   }

  return (
    <StyledVideo>
      {(!curVideos || curVideos == null || curVideos.length == 0) && <Heading className="vid-heading" level={3}>{t("VideosWithASimilarTopic")}</Heading>}
      <Box className="vids">
        <YouTubePlayer videoId={curVideos && curVideos.length != 0 ? curVideos[0]?.url : staticVideo.url} customWidth={322} customHeight={180} />
        <Box className="description">
          <Heading level={4}>{curVideos && curVideos.length != 0 ? curVideos[0]?.title : staticVideo.title}</Heading>
          <Text>{curVideos && curVideos.length != 0 ? curVideos[0]?.description : staticVideo.description}</Text>
        </Box>
      </Box>
      <Link href="/videos.aspx"><Button typeButton="transparent" label={t("MoreVideos")} /></Link>
    </StyledVideo>
  );
};

export default Video;
