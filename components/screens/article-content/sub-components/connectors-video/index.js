import { useState, useEffect } from "react";
import StyledConnectorsVideo from "./styled-connectors-video";
import Heading from "@components/common/heading";
import VideoItem from "@components/screens/common/video-item";
import Carousel from "@components/common/carousel";
import useWindowWidth from "@utils/helpers/System/useWindowProvider";

const ConnectorsVideo = ({ t, videos }) => {
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
    <StyledConnectorsVideo id="watchvideo">
      <Heading level={4}>{t("WatchVideo")}</Heading>
      <div className={`vids ${videos.length == 1 ? "single" : ""}`}>
        {videos?.map((item, index) =>
          <VideoItem
            className={`main ${videos.length == 1 ? "single" : ""}`}
            t={t}
            data={item}
            isMain={true}
            key={index}
          />
        )}
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
};

export default ConnectorsVideo;
