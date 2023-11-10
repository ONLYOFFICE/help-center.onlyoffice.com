import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledVideoItem = styled.div`
  cursor: pointer;
  //display: flex;
  //flex-direction: column;
  //gap: 16px;
  
  iframe {
    aspect-ratio: 1.79;
    border: none;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
  }

  h5 {
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

  &.single {
    iframe {
      aspect-ratio: 2.87;
    }
  }
  @media ${device.laptop} {
    &.main.single {
      display: block;
      iframe {
        width: 100%;
      }
    }
    &.main {
      display: none;
    }
  }
  @media ${device.tablet} {
    &.single {
      iframe {
        aspect-ratio: 1.79;
      }
    }
  }
  @media ${device.tabletS} {
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
