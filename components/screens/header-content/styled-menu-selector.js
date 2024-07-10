import styled from "styled-components";
import { device } from "@components/utils/devices";

export default styled.div`
  outline: none;
  -webkit-tap-highlight-color: transparent;
  justify-content: end;
  display: none;
  align-items: center;

  span {
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;
    &.orange {
      color: #ff6f3d;
    }
  }

  .arrow-image {
    outline: none;
    -webkit-tap-highlight-color: transparent;
    height: 24px;
    transform: rotate(270deg);
    width: 24px;
    &.open {
      transform: rotate(0deg);
    }
  }

  @media ${device.tabletS} {
    display: flex;
  }
`;