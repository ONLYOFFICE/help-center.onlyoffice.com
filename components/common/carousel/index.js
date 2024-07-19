import { useState } from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StyledCarousel from "./carousel-styled";
import VideoItem from "@components/screens/common/video-item";

const Carousel = ({
  t,
  settingsCarousel,
  isArrows,
  items,
  refCarousel,
  asNavForCarousel,
  locale,
  description,
  ...rest
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className={`cust-arr prev ${currentSlide === 0 ? "disabled" : ""}`}>
      <img src="https://static-helpcenter.onlyoffice.com/images/icons/slideshow_next-prev.react.svg" alt="Previous" />
    </button>
  );
  const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick} className={`cust-arr next ${currentSlide === settings.slidesToShow - 1 ? "disabled" : ""
      }`}>
      <img src="https://static-helpcenter.onlyoffice.com/images/icons/slideshow_next-prev.react.svg" alt="Next" />
    </button>
  );
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: false,
    speed: 1000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliders = items.map((item, idx) => (
    <VideoItem
      key={`item-${idx}`}
      t={t}
      data={item}
    />
  ));

  return (
    <StyledCarousel arrows={isArrows} {...rest}>
      <Slider {...settings}>{sliders}</Slider>
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  /** Carousel settings*/
  settingsCarousel: PropTypes.object,
  /** Carousel array item*/
  items: PropTypes.arrayOf(PropTypes.object),
  /** Carousel arrows*/
  isArrows: PropTypes.bool,
  /** Carousel tab index */
  tabIndex: PropTypes.number,
  /** Accepts class */
  className: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
};

Carousel.defaultProps = {
  settingsCarousel: {},
  items: [{}],
  isArrows: true,
  tabIndex: -1,
};

export default Carousel;
