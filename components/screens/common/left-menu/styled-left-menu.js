import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledLeftMenu = styled.div`
  box-sizing: border-box;
  position: relative;
  border-right: 1px solid #EFEFEF;
  padding: 32px 28px 32px 0;
  width: 256px;
  min-width: 256px;
  background-color: #F5F5F5;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 100%;
    background-color: #F5F5F5;
    transform: translateX(-100%);
  }

  .left-menu-wrapper {
    position: sticky;
    top: 104px;

    @media ${device.laptopS} {
      position: initial;
      top: initial;
    }
  }

  .left-menu-search {
    margin-bottom: 32px;

    @media ${device.laptopS} {
      margin-bottom: 24px;
    }
  }

  .left-menu-link {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 21px;
    transition: color 0.3s;

    &:before {
      content: url("https://static-helpcenter.onlyoffice.com/images/icons/16px_back_arrow.react.svg");
      display: inline-flex;
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }

    &:hover {
      color: #FF6F3D;
    }
  }

  .left-menu-title {
    padding: 8px 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    color: #333333;
    text-transform: uppercase;

    @media ${device.laptopS} {
      padding: 10px 0;
    }
  }

  .left-menu-items {
    list-style-type: none;

    &.left-menu-articles {
      position: relative;
      margin-top: 8px;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 2px;
        width: 4px;
        height: 100%;
        background-color: #E2E2E2;
      }

      li {
        &.active {
          position: relative;

          a {
            font-weight: 700;
            color: #FF6F3D;
          }

          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 2px;
            width: 4px;
            height: 100%;
            background-color: #FF6F3D;
          }
        }
      }

      a {
        display: block;
        padding: 6px 0 6px 32px;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }

  .left-menu-info {
    margin-top: 32px;
    list-style-type: none;

    li {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    a {
      display: flex;
      align-items: center;
      transition: color 0.3s;

      &:before {
        margin-right: 8px;
        width: 24px;
        height: 24px;
      }

      &.glossary {
        &::before {
          content: url("https://static-helpcenter.onlyoffice.com/images/icons/glossary-icon.react.svg");
        }
      }

      &.video {
        &::before {
          content: url("https://static-helpcenter.onlyoffice.com/images/icons/video-icon.react.svg");
        }
      }

      &.faq {
        &::before {
          content: url("https://static-helpcenter.onlyoffice.com/images/icons/faq-icon.react.svg");
        }
      }

      &:hover {
        color: #FF6F3D;
      }

      @media ${device.laptopS} {
        padding: 4px 0;
      }
    }

    @media ${device.laptopS} {
      margin-top: 24px;
    }
  }

  @media ${device.laptopS} {
    position: fixed;
    top: 0;
    left: 0;
    border-right: none;
    padding: 24px 24px 24px 16px;
    width: 272px;
    min-width: 272px;
    height: 100%;
    z-index: 1000;
    transform: translateX(-100%);
    visibility: hidden;
    transition: transform 0.3s, visibility 0.3s;

    &.active {
      transform: translateX(0);
      visibility: visible;
    }
  }

  .ScrollbarsCustom {
    height: calc(100vh - 253px) !important;

    @media ${device.laptopS} {
      height: calc(100vh - 147px) !important;
    }
  }

  .ScrollbarsCustom-Track.ScrollbarsCustom-TrackY {
    border-radius: 2px !important;
    width: 4px !important;
    background-color: #E2E2E2 !important;
  }

  .ScrollbarsCustom-Thumb.ScrollbarsCustom-ThumbY {
    border-radius: 2px !important;
    width: 4px !important;
    background-color: #FF6F3D !important;
  }
`;

export default StyledLeftMenu;
