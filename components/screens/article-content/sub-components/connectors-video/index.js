import { useState, useEffect } from "react";
import StyledConnectorsVideo from "./styled-connectors-video";
import Heading from "@components/common/heading";
import VideoItem from "@components/screens/common/video-item";
import Carousel from "./carousel";

const ConnectorsVideo = ({ t, videos, setVideoOffsetTrigger }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
        setVideoOffsetTrigger(1);
      } else {
        setIsMobile(false);
        setVideoOffsetTrigger(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledConnectorsVideo id="watchvideo_block">
      <Heading className="video-title" level={4} label={t("WatchVideo")} />

      <div className={`video-wrapper ${videos.length === 1 ? "single" : ""}`}>
        {videos.length === 1 ? (
          <VideoItem data={videos[0]} isMain={true} />
        ) : (
          <>
            {isMobile ? (
              <Carousel
                data={videos}
                carouselParams={{
                  slidesPerView: 1,
                  spaceBetween: 12,
                  onSwiper: (swiper) => {
                    swiper.on("resize", () => {
                      const slideHeights = Array.from(swiper.slides).map(slide => slide.children[0].offsetHeight);
                      swiper.el.style.height = `${Math.max(...slideHeights)}px`;
                      setVideoOffsetTrigger(3);
                    });
                  },
                }}
              />
            ) : (
              <>
                {videos.length === 2 ? (
                  videos.map((item, index) => (
                    <VideoItem data={item} key={index} />
                  ))
                ) : (
                  <>
                    <VideoItem data={videos[0]} isMain={true} />
                    <Carousel
                      className="video-slider-3"
                      data={videos.slice(1)}
                      carouselParams={{
                        spaceBetween: 12,
                        slidesPerView: 2,
                        onSwiper: (swiper) => {
                          swiper.on("resize", () => {
                            const slideHeights = Array.from(swiper.slides).map(slide => slide.children[0].offsetHeight);
                            swiper.el.style.height = `${Math.max(...slideHeights) * 2 + 12}px`;
                            setVideoOffsetTrigger(4);
                          });
                        }
                      }}
                    />
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </StyledConnectorsVideo>
  );
};

export default ConnectorsVideo;
