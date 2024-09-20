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

  .video-item-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    margin-top: 8px;
    font-size: 14px;
    line-height: 19px;

    &.main {
      margin-top: 16px;
    }

    @media ${device.laptopM} {
      margin-top: 16px;
    }
  }

  .video-item-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
    margin-top: 16px;
    font-size: 14px;
    line-height: 24px;

    @media ${device.laptopM} {
      display: block;
      -webkit-box-orient: initial;
      overflow: initial;
      -webkit-line-clamp: initial;
    }
  }
`;

export default StyledVideoItem;
