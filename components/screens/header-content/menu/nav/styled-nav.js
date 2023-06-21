import styled from "styled-components";
import arrow_red from "@public/images/icons/arrow-red.svg";
import { device } from "@components/utils/devices";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 0 auto;
  padding: 0 132px 0 88px;

  .external-link {
    color: #fff;
    text-decoration: none;
    :hover {
      color: rgb(255, 111, 61);
    }
  }
  @media ${device.laptop} {
    gap: 3vw;
    padding: 0 3vw 0 2vw;
  }

  @media ${device.tablet} {
    padding: 0;
    background-color: #fff;
    min-height: 100px;
    height: 100vh;
    margin: 0;
    position: absolute;
    left: ${(props) => (props.stateMobile ? "0" : "-120vw")};
    top: 0;
    overflow: auto;
    text-align: center;
    font-size: 16px;
    transition: right 0.5s;
    width: 300px;
    z-index: 5;
    display: block;
    padding-top: 16px;
    box-sizing: border-box;
    overflow-x: hidden;

    .menu_wrapper {
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
        background-image: url(${arrow_red});
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

    .phone_wrapper {
      bottom: 0;
      top: auto;
      width: 100%;
      height: 54px;
      position: absolute;
      right: 0;
      left: auto;
      margin: 0;
      padding: 0;
    }

    .no-box-inside {
      width: 100%;
    }
  }

  @media ${device.tabletS} {
    width: 267px;

    .mobile-heading-nav-item {
      font-size: 16px;
    }
  }
`;

export default StyledNav;
