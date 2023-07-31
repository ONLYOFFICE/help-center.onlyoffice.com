import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledVideoItem = styled.div`
  cursor: pointer;

  iframe {
    aspect-ratio: 1.79;
  }

  h5 {
    cursor: unset;
  }

   span {
    cursor: unset;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  @media ${device.laptop} {
    iframe {
      width: 46vw;
    }
  }
`;

export default StyledVideoItem;
