import styled from "styled-components";
import { device } from "@components/utils/devices";
import globalColors from "@components/utils/global-colors";

const StyledConnectorsVideo = styled.div`
  margin: 64px 0;
  scroll-margin-top: 24px;
  
  .video-title {
    margin-bottom: 24px;
  }

  .video-wrapper {
    display: flex;
    align-items: start;
    background: ${globalColors.white};
    box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
    border-radius: 3px;
    gap: 32px;
    padding: 32px;

    .video-item {
      width: 100%;
    }

    &.single {
      @media ${device.laptop} {
        padding: 32px;
      }
    }

    @media ${device.laptop} {
      flex-direction: column;
      align-items: center;
      gap: initial;
      padding: 16px 32px;
    }
  }

  .video-slider-3 {
    width: 224px;
    min-width: 224px;

    @media ${device.laptop} {
      width: 100%;
      min-width: 100%;
    }
  }
`;

export default StyledConnectorsVideo;
