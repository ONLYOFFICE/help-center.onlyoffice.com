import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledNavMenu = styled.div`
  .heading-nav-item {
    color: #fff;
    display: block;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.33em;
    letter-spacing: 0.04em;
    padding: 28px 0px;
    cursor: pointer;
    margin: 0px;
    text-transform: uppercase;
    &:hover {
      color: #ff6f3d;
    }
  }

  @media screen and (max-width: 768px) {
    .heading-nav-item {
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      height: fit-content;
      line-height: 16px;
      padding: 15px 25px 15px 40px;
      margin: 0px;
      position: relative;

      &:before {
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        position: absolute;
        left: 17px;
        top: 17px;
        transition: 0.1s linear;
      }
    }
  }
  @media ${device.tabletS} {
    .heading-nav-item {
      font-size: 16px;
    }
  }
`;

const StyledMenuItemsWrapper = styled.div`
  width: auto;
  height: auto;
  margin: auto;
  background-color: white;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  z-index: 5000;
  position: absolute;
  display: flex;
  box-shadow: 0 20px 50px rgba(85, 85, 85, 0.15);

  @media ${device.laptopM} {
    padding: 0;
    background-color: #fff;
    max-height: calc(100% - 54px);
    height: 100vh;
    margin: 0;
    position: absolute;
    left: ${(props) => (props.isOpen ? "0" : "-120vw")};
    top: 0;
    overflow: auto;
    text-align: center;
    font-size: 16px;
    transition: right 0.5s;
    width: 100%;
    z-index: 5;
    display: block;
    padding-top: 8px;
    box-sizing: border-box;
    box-shadow: unset;
    overflow-x: hidden;
  }
`;

export { StyledNavMenu, StyledMenuItemsWrapper };