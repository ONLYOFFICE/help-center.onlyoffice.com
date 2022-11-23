import React from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./sub-components/slide";
import StyledCarousel from "./carousel-styled";

const Carousel = ({
  t,
  settingsCarousel,
  isArrows,
  items,
  refCarousel,
  asNavForCarousel,
  currentLanguage,
  description,
  ...rest
}) => {
  const settings =  {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  const sliders = items.map((item, idx) => (
    <Slide
      key={`item-${idx}`}
      arrayItems={item}
      className="carousel-cards"
      currentLanguage={currentLanguage}
      t={t}
      description={description}
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
