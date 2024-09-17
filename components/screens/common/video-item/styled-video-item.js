import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledVideoItem = styled.div`
  .video-item-frame {
    position: relative;
    padding-bottom: 56.25%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      border: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &.main {
    max-width: 512px;
    width: 100%;
  }

  h5 {
    margin-top: 16px;
    font-size: 12px;
    cursor: unset;
    line-height: 1.33em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2; 
    max-height: 3em;

    &.main {
      font-size: 14px;
    }
  }

  span {
    cursor: unset;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    padding-top: 16px;
  }

  @media ${device.laptopM} {
    &.main {
      max-width: 100%;
    }
  }

  @media ${device.laptop} {
    &.main {
      display: none;
    }
  }

  @media ${device.mobile} {
    h5 {
      font-size: 14px;

      &.main {
        font-size: 13px;
      }
    }

    span {
      font-size: 13px;
    }
  }
`;

export default StyledVideoItem;
