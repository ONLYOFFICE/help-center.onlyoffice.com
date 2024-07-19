import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledConnectorsVideo = styled.div`
  padding: 64px 0 0;

  .vids {
    align-items: start;
    background: #ffffff;
    box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
    border-radius: 2px;
    max-height: 414px;
    height: 100%;
    aspect-ratio: 1.9;
    gap: 32px;
    padding: 32px;

    &.single {
      aspect-ratio: unset;
      display: block;
    }
  }

  .vids-car {
    width: 224px;
  }

  h4 {
    padding: 0 0 16px;
  }

  @media ${device.laptop} {
    .vids {
      aspect-ratio: 1.6;
      padding: 16px 32px;

      &.single {
        aspect-ratio: 1.9;
        max-height: fit-content;
        padding: 32px;
      }
    }

    .vids-car {
      width: 100%;
    }
  }
`;

export default StyledConnectorsVideo;
