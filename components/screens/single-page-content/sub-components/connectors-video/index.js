import React, { useState, useEffect } from "react";
import StyledVideo from "./styled-video";
import Heading from "@components/common/heading";
import Box from "@components/common/box";
import VideoItem from "./sub-components/video-item";
import Carousel from "@components/common/carousel";
import useWindowWidth from '@utils/helpers/System/useWindowProvider';

const Video = ({ t, videos }) => {
  const [filteredArray, setFilteredArray] = useState(videos);
  const [mobile, setMobile] = useState(false);
  const [videosForCarLenght, setVideosForCarLenght] = useState(2);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (videos.length >= 2) {
      if (windowWidth > 1024) {
        setFilteredArray(videos.slice(1));
        setMobile(false);
        setVideosForCarLenght(2);
      } else {
        setFilteredArray(videos);
        setMobile(true);
        setVideosForCarLenght(1);
      }
    }
  }, [videos.length]);
  
  return (
    <StyledVideo id="watchvideo">
      <Heading level={4}>{t("WatchVideo")}</Heading>
      <Box className={`vids ${videos.length == 1 ? 'single' : ''}`}>
        {videos.slice(0, 1)?.map((it, index) => {
          return <VideoItem t={t} key={index} data={it} isMain={true} className={`main ${videos.length == 1 ? 'single' : ''}`} />;
        })}
        {filteredArray.length > 1 && <Carousel className="vids-car" isArrows={filteredArray.length > videosForCarLenght ? true : false} t={t} items={filteredArray}/>}
        {(videos.length == 2 && !mobile) && <VideoItem t={t} data={filteredArray[0]} isMain={false} className="second" />}
      </Box>
    </StyledVideo>
  );
};

export default Video;
