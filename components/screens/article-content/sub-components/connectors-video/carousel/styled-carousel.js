import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    width: 100%;
  }

  .swiper {
    margin: 0;
    width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    border: none;
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
    background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/slideshow_next-prev.react.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    cursor: pointer;

    &.swiper-button-disabled {
      opacity: 0.3;
    }

    &.hidden {
      display: none;

      @media ${device.laptop} {
        display: block;
      }
    }
  }

  .swiper-button-prev {
    margin-bottom: 12px;
    transform: rotate(180deg);

    @media ${device.laptop} {
      margin-bottom: 16px;
    }
  }

  .swiper-button-next {
    margin-top: 12px;

    @media ${device.laptop} {
      margin-top: 16px;
    }
  }
`;

export default StyledCarousel;
