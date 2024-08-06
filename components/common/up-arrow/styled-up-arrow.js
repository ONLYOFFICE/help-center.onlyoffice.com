import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledUpArrow = styled.div`
  background-color: #f9f9f9;
  background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/arrow-gray.react.svg");
  background-position: center center;
  background-repeat: no-repeat;
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  bottom: 80px;
  cursor: pointer;
  right: calc(50% - 636px);
  position: fixed;
  z-index: 15000;
  height: 30px;
  transform: rotate(270deg);
  width: 30px;

  @media ${device.laptopL} {
    right: calc(50% - 600px);
  }

  @media ${device.laptopM} {
    height: 22px;
    right: 12px;
    width: 22px;
  }

  @media ${device.tabletS} {
    display: none;
  }
`

export default StyledUpArrow;