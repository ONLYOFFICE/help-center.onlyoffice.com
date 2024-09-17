import StyledCarousel from "./styled-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import VideoItem from "@components/screens/common/video-item";

const Carousel = ({ data, carouselParams, className }) => {
  return (
    <StyledCarousel className={className}>
      <button className={`swiper-button-prev ${data.length >= 2 ? "hidden" : ""}`}></button>
      <Swiper
        direction={"vertical"}
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        {...carouselParams}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <VideoItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={`swiper-button-next ${data.length >= 2 ? "hidden" : ""}`}></button>
    </StyledCarousel>
  );
};

export default Carousel;