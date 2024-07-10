import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;
  padding: 0 132px 0 0px;

  .nav-item {
    text-decoration: none;
  }

  .close-cross {
    display: none;
    height: 24px;
    width: 24px;
  }

  .heading-nav-item {
    border-bottom: 1px solid transparent;
    color: #fff;
    display: block;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.33em;
    letter-spacing: 0.04em;
    padding: 27px 16px 28px;
    cursor: pointer;
    margin: 0px;
    text-transform: uppercase;
    white-space: nowrap;
    &:hover {
      color: #ff6f3d;
      border-bottom: 1px solid #ff6f3d;
    }
  }

  @media ${device.laptopM} {
    padding: 0;
  }

  @media ${device.laptopS} {
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: ${(props) => (props.stateMobile ? "280px" : "-120vw")};
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-right: 1px solid rgb(229, 229, 229);
    padding: 24px 32px 0 40px;
    margin: 0px;
    font-size: 16px;
    width: 280px;
    height: 100%;
    min-height: 100px;
    background-color: rgb(255, 255, 255);
    z-index: 1002;
    overflow: hidden auto;
    transform: translate3d(-100%, 0px, 0px);
    transition: transform 0.2s cubic-bezier(0.16, 0.68, 0.43, 0.99) 0s;

    .heading-nav-item {
      align-items: center;
      border-bottom: 1px solid #cccccc;
      color: #333;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 16px 0;
      margin: 0px;

       &:after {
        display: block;
        background-image: url('/images/icons/arrow-gray.react.svg');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        width: 6px;
        height: 10px;
        content: "";
      }

      &:hover {
        color: #ff6f3d;
        border-bottom: 1px solid #cccccc;
      }
    }

    .close-cross {
      display: block;
    }

    .mobile-heading-nav-item {
      border-bottom: 1px solid #f2f2f2;
      color: #ff6f3d;
      cursor: pointer;
      display: block;
      font-size: 16px;
      letter-spacing: 0.03em;
      line-height: 1.33em;
      margin: 0 auto;
      padding: 6px 22px 12px 22px;
      position: relative;
      text-transform: uppercase;
      text-align: center;

      &:before {
        background-image: url('https://static-helpcenter.onlyoffice.com/images/icons/arrow_red.react.svg');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        left: 14px;
        position: absolute;
        top: 12px;
        transform: rotate(180deg);
        transition: 0.1s linear;
      }
    }
  }

  @media ${device.tabletS} {
    align-items: end;
    border-top: 1px solid #666666;
    border-right: none;
    position: absolute;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    gap: 24px;
    flex-direction: column;
    height: max-content;
    background-color: #333;
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
    z-index: 100;
    padding: 16px 90px 18px 0;
    top: 55px;
    left: 100vw;
    justify-content: space-between;
    width: 100%;

    .heading-nav-item {
      border-bottom: none;
      color: rgb(255, 255, 255);
      display: block;
      font-size: 13px;
      font-weight: 600;
      padding: 0;
      text-align: right;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: normal;
        &:after {
          display: none;
        }

        &.active {
          color: #ff6f3d;
        }
      }
    .close-cross {
      display: none;
    }
    .mobile-heading-nav-item {
      font-size: 16px;
    }
  }
`;

export default StyledNav;