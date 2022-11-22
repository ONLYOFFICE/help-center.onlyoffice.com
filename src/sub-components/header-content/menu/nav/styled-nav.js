import styled from "styled-components";
import arrow_red from "../../../../../static/images/icons/arrow-red.svg";
import { device } from "../../../../../components/utils/devices";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  justify-content: center;

  .navitem_features_menu {
    color: #fff;
  }

  .external-link {
    color: #333;
    text-decoration: none;
    :hover {
      color: rgb(255, 111, 61);
    }
  }

  .menu_wrapper {
    flex-direction: unset;
    justify-content: unset;
    align-content: unset;
    flex-wrap: unset;
    align-items: unset;
    &:before {
      display: block;
      position: absolute;
      width: 50%;
      content: "";
      height: 1px;
      background-color: #ff642e;
      transition: width 0.2s ease-in-out;
      left: 0;
      top: 0;
    }

    &:after {
      display: block;
      position: absolute;
      width: 50%;
      content: "";
      height: 1px;
      background-color: #ff642e;
      transition: width 0.2s ease-in-out;
      left: 50%;
      top: 0;
    }
  }

  #navitem_contribution, #navitem_development, #navitem_user, #navitem_integrations, #navitem_installation, #navitem_administration {
      border-bottom: 1px solid transparent;
  }

  #navitem_contribution, #navitem_development {
      &:hover {
        border-bottom: 1px solid #ff6f3d;
    }
  }

  @media (min-width: 1190px) {
    #navitem_user .menu-items-wrapper {
      left: calc(50% - 395px);
    }
  }

  @media (max-width: 1190px) {
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

    #navitem_contribution, #navitem_development, #navitem_user, #navitem_integrations, #navitem_installation, #navitem_administration {
      .heading-nav-item {
        border-bottom: 1px solid #f2f2f2;
      }
    }
    #navitem_contribution, #navitem_development {
      .heading-nav-item {
        &:hover {
          border-bottom: 1px solid #f2f2f2;
        }
      }
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
