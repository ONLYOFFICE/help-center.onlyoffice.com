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
  right: 24px;
  position: fixed;
  opacity: 0.8;
  z-index: 15000;
  height: 32px;
  transition: 1s;
  transform: rotate(270deg);
  width: 32px;

  @media ${device.laptopM} {
    bottom: 100px;
    height: 50px;
    left: auto;
    margin: 0;
    padding: 0;
    right: 20px;
    width: 50px;
  }
`

export default StyledUpArrow;