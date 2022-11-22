import styled from "styled-components";
import arrow_gray from "../../../../../static/images/icons/arrow-gray.svg";
import arrow_red from "../../../../../static/images/icons/arrow-red.svg";
import { device } from "../../../../../components/utils/devices";

const StyledNavMenu = styled.div`
  .dropdown-item {
    display: block;
    border: 0;
    color: #333;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    line-height: 1.4em;
    padding: 8px 25px;
    text-decoration: none;
    white-space: nowrap;
    position: relative;
    text-transform: uppercase;
  }

  .heading-nav-item {
    display: block;
    font-size: 12px;
    font-weight: 600;
    height: 32px;
    line-height: 29px;
    letter-spacing: 0.04em;
    padding: 13px 13px 16px;
    cursor: pointer;
    margin: 0px;
    text-transform: uppercase;
  }

  @media (max-width: 1155px) {
    .heading-nav-item {
      padding: 20px 10px;
    }
  }

  .nav_2nd_menu_link {
    display: block;
    text-transform: none;
    background: none;
    border: 0;
    color: #444;
    font-size: 14px;
    cursor: pointer;
    line-height: 1.4em;
    margin: 0;
    padding: 8px 40px;
    text-decoration: none;
  }

  .outer-box {
    margin: 30px 0;
    &:first-child {
      border-bottom-left-radius: 9px;
    }
    &.with_border {
      border-right: 1px solid #f5f5f5;
    }
  }

  .menu-acc {
    border: none;
    padding: 0;
    .accordion {
      display: none;
    }
    .accordion__content {
      display: block;
      overflow: unset;
    }
    .accordion__text {
      padding: 0;
    }
  }

  .inner-box {
    align-items: initial;
  }

  @media screen and (max-width: 1190px) {
    .dropdown-item {
      border-bottom: 1px solid #f2f2f2;
      line-height: 1.5em;
      padding: 8px 25px;
      text-transform: none;
      &:hover {
        background-color: #f7f7f7;
      }
    }

    .outer-box {
      border: none !important;
      border-radius: unset !important;
      margin: 0;
      padding: 0;
      .inner-box {
        display: none;
      }
    }

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
        background-image: url(${arrow_gray});
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        position: absolute;
        left: 17px;
        top: 17px;
        transition: 0.1s linear;
      }
    }

    .menu-acc {
      border: none;
      padding: 0;
      width: -webkit-fill-available;
      .accordion {
        display: flex;
        
        &:hover {
          background-color: #f7f7f7;
        }
      }
      .accordion__content {
        overflow: hidden;
        max-height: 0;
      }
      .accordion__heading {
        border-bottom: 1px solid #f2f2f2;
        color: #ff6f3d;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 36px;
        padding: 0 25px 0 40px;
        position: relative;
        text-transform: uppercase;
        width: -webkit-fill-available;
      }
      .accordion__icon {
        background-image: url(${arrow_red});
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        width: 10px;
        height: 10px;
        transform: rotate(90deg);
        transition: 0.1s linear;
        left: 17px;
        top: 14px;
      }
      .accordion__text {
        padding: 0;
      }
    }
  }
  @media ${device.tabletS} {
    .dropdown-item {
      white-space: unset;
    }
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

  @media (max-width: 1190px) {
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
