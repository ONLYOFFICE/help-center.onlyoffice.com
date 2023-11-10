import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledCarousel = styled.div`
  margin: 0 auto;
  //padding: 0px;
  .slick-vertical .slick-slide {
      padding-bottom: 10px;
      &:last-child {
        padding-bottom: 0;
      }
    }
  .slick-slider {
    margin: 0 auto;
   // padding: 0px;
    .slide {
      .carousel-image {
        width: 100%;
      }
    }
    .slick-list{
      height: 380px;
      //margin: 12px 0;
    }

    ${(props) =>
      props.arrows
        ? css`
            .cust-arr {
              position: relative;
              cursor: pointer;
              font-size: 0;
              height: 36px;
              outline: none;
              display: block;
              width: 24px;
              margin: 0 auto;
              padding: 12px 0 0;
              border: 0;
              background: transparent;
              transition: opacity 0.3s ease;
              &.disabled {
                opacity: 0.5;
              }
            }
            .cust-arr.prev {
              transform: rotate(180deg);
            }
            .cust-arr.next {
              transform: rotate(0deg);
            }
          `
        : css`
            .cust-arr {
              display: none !important;
            }
          `}
  }
  @media ${device.laptopM} {
    /* .slick-slider {
      .slide-carousel {
        width: 100vw;
        height: 65vw;
      }
      .slick-arrow {
        display: none !important;
      }
    } */
  }
  @media ${device.laptop} {
    .slick-slider {
      .slick-list {
        max-height: 100%;
      }
      /* .slide-carousel {
        width: 100vw;
        height: 60vw;
      } */
    }
  }
  @media ${device.tabletS} {
    .slick-slider {
      .slide-carousel {
        margin: 0;
      }
    }
  }
`;

export default StyledCarousel;
