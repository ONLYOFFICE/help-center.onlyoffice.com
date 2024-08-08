import styled from "styled-components";
import { device } from "@components/utils/devices";
import chevronRightIcon from "@public/images/icons/chevron-right.svg";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 40px;
  min-height: 72px;
  background-color: #333333;

  .header-container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1120px;

    @media ${device.laptopS} {
      justify-content: space-between;
    }

    @media ${device.tabletS} {
      justify-content: initial;
    }
  }

  .header-mobile-toggle-btn {
    display: none;
    border: none;
    padding: 0;
    width: 24px;
    height: 24px;
    background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/mob_menu_white.react.svg");
    background-color: transparent;
    cursor: pointer;

    &.is-main {
      @media ${device.tabletS} {
        display: none;
      }
    }

    @media ${device.laptopS} {
      display: inline-flex;
    }

    @media ${device.tabletS} {
      margin-right: 32px;
    }
  }

  .logo {
    width: 186px;
    min-width: 186px;
    height: 32px;
    background-image: url("https://static-helpcenter.onlyoffice.com/images/logo/logowhite.react.svg");
    background-repeat: no-repeat;
    overflow: hidden;

    @media ${device.laptopM} {
      width: 35px;
      min-width: 35px;
    }

    @media ${device.laptopS} {
      position: absolute;
      left: 50%;
      width: 186px;
      min-width: 186px;
      transform: translateX(-50%);
    }

    @media ${device.tabletS} {
      position: initial;
      left: initial;
      margin-right: auto;
      width: 31px;
      min-width: 31px;
      height: 28px;
      background-image: url("https://static-helpcenter.onlyoffice.com/images/logo/logo-mobile.react.svg");
      transform: initial;
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.27);
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  .header-mobile-menu-btn {
    display: none;
    align-items: center;
    border: none;
    padding: 0;
    margin-right: 24px;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    background-color: transparent;
    text-transform: uppercase;
    word-break: break-word;
    cursor: pointer;

    &:after {
      content: "";
      display: inline-flex;
      width: 24px;
      height: 24px;
      background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/arrow-drop-down.react.svg");
      background-repeat: no-repeat;
      transform: rotate(-90deg);
    }

    &.open {
      &:after {
        transform: rotate(0);
      }
    }

    &.active {
      color: #FF6F3D;
    }

    @media ${device.tabletS} {
      display: inline-flex;
    }
  }

  .nav {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    padding-right: 22px;
    margin: 0 auto;
    z-index: 11;

    &.open {
      opacity: 1;
      visibility: visible;
    }

    @media ${device.laptopM} {
      padding-left: 45px;
      padding-right: 8px;
    }

    @media ${device.laptopS} {
      position: absolute;
      top: 100%;
      left: 0;
      padding: 16px 0 18px;
      width: 100%;
      opacity: 0;
      visibility: hidden;
      background-color: #333333;
    }
  }

  .nav-list {
    display: flex;
    align-items: center;
    list-style-type: none;

    @media ${device.laptopS} {
      flex-direction: column;
      align-items: end;
    }
  }

  .nav-item {
    &:not(:last-child) {
      margin-right: 8px;

      @media ${device.laptopS} {
        margin-right: 0;
        margin-bottom: 24px;
      }
    }

    @media ${device.laptopS} {
      width: 100%;
    }
  }

  .nav-link {
    display: flex;
    border-bottom: 1px solid transparent;
    padding: 27px 16px 26px;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    text-transform: uppercase;
    transition: border-color 0.3s, color 0.3s;

    &:after {
      @media ${device.laptopS} {
        content: "";
        display: inline-flex;
        margin-left: 8px;
        width: 11px;
        height: 11px;
        background-image: url(${chevronRightIcon.src});
        background-repeat: no-repeat;
      }

      @media ${device.tabletS} {
        content: none;
      }
    }

    &.active {
      color: #FF6F3D;
      border-color: #FF6F3D;

      @media ${device.laptopS} {
        border-color: #FF6F3D;
      }
    }

    &:hover {
      border-color: #FF6F3D;
      color: #FF6F3D;
    }

    @media ${device.laptopS} {
      justify-content: end;
      border-bottom: initial;
      padding: 0 85px 0 16px;
      color: #ffffff;
    }
  }

  @media ${device.tablet} {
    padding: 0 40px;
  }

  @media ${device.tabletS} {
    padding: 0 16px;
    min-height: 56px;
  }
`;

export default StyledHeader;
