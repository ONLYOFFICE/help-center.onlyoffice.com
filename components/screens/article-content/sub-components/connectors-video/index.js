import { useState, useEffect, forwardRef } from "react";
import StyledConnectorsVideo from "./styled-connectors-video";
import Heading from "@components/common/heading";
import VideoItem from "@components/screens/common/video-item";
import Carousel from "@components/common/carousel";

const ConnectorsVideo = forwardRef(({ t, videos }, ref) => {
  const [firstVideo, setFirstVideo] = useState(null);
  const [filteredArray, setFilteredArray] = useState(videos);
  const [mobile, setMobile] = useState(false);
  const [videosForCarLenght, setVideosForCarLenght] = useState(2);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (videos.length >= 2) {
      if (windowWidth > 1024) {
        setFirstVideo(videos.slice(0, 1));
        setFilteredArray(videos.slice(1));
        setMobile(false);
        setVideosForCarLenght(2);
      } else {
        setFilteredArray(videos);
        setMobile(true);
        setVideosForCarLenght(1);
      }
    } else {
      setFirstVideo(videos);
    }
  }, [videos, windowWidth]);

  return (
    <StyledConnectorsVideo ref={ref} id="watchvideo_block">
      <Heading level={4}>{t("WatchVideo")}</Heading>
      <div className={`vids ${videos.length == 1 ? "single" : ""}`}>
        {!mobile && firstVideo && firstVideo.map((it, index) => {
          return <VideoItem t={t} key={index} data={it} isMain={true} className={`main ${videos.length == 1 ? 'single' : ''}`} />;
        })}
        {filteredArray.length > 1 &&
          <Carousel
            className="vids-car"
            t={t}
            isArrows={filteredArray.length > videosForCarLenght ? true : false}
            items={filteredArray}
          />
        }
        {videos.length == 2 && !mobile &&
          <VideoItem
            className="second"
            t={t}
            data={filteredArray[0]}
            isMain={false}
          />
        }
      </div>
    </StyledConnectorsVideo>
  );
});

export default ConnectorsVideo;
