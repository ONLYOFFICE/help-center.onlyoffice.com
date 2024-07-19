import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledImagePopup = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all ease 0.5s;
  z-index: 1001;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  .popup-content {
    position: relative;

    > img { 
      background-color: #fff;
      box-shadow: 0 7px 25px rgb(0, 0, 0, 0.1);
      width: 1240px;
    }

    .circle::before,
    .circle::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      background-color: black;
      border-radius: 50%;
    }
    
    .circle::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    
    .circle::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    @media ${device.laptopM} {
      width: 90vw;
      background-size: 90vw auto;

      > img {
        width: 90vw;
      }
    }

    @media ${device.tabletS} {
      display: none;
    }
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  display: block;
  float: right;
  width: 16px;
  height: 16px;
  margin: 0px 0 0;
  background-color: #fff;
  border-radius: 50%;
  color: transparent;
  right: 8px;
  top: 8px;

  &:before,
  &:after {
    content: "";
    background-color: #333333;
    position: absolute;
    transform: rotate(45deg);
    border-radius: 1px;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 1px;
    border-radius: 50%;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export { CloseButton, StyledImagePopup };
