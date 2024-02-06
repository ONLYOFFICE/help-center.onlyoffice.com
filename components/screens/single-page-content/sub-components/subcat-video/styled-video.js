import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledVideo = styled.div`
background: #f5f5f5;
padding: 48px;
margin: 64px 0 0;
text-align: center;

> h3.vid-heading {
      padding: 0 0 40px;
      text-align: center;
    }

  .vids {
    align-items: start;
    gap: 32px;
    padding: 0 0 40px;

    .description {
    flex-direction: column;
      > h4 {
        padding: 0 0 16px;
      }
    }

  }

  > a {
      display: block;
      width: fit-content;
      text-align: center;
      margin: 0 auto;
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

export default StyledVideo;
