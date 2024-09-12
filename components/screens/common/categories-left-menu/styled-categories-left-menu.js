import styled from "styled-components";
import closeIcon from "@public/images/icons/close-icon.react.svg";
import chevronRightIcon from "@public/images/icons/chevron-right.svg";
import chevronDownOrangeIcon from "@public/images/icons/chevron-down-orange.svg";
import globalColors from "@components/utils/global-colors";

const StyledLeftMenu = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  border-right: none;
  padding: 24px 4px 24px 40px;
  width: 280px;
  min-width: 280px;
  height: 100%;
  background-color: ${globalColors.white};
  z-index: 1000;
  transform: translateX(-100%);
  visibility: hidden;
  transition: transform 0.3s, visibility 0.3s;

  &.active {
    transform: translateX(0);
    visibility: visible;
  }

  .left-menu-close-btn {
    display: flex;
    border: none;
    padding: 0;
    margin-bottom: 28px;
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url(${closeIcon.src});
    cursor: pointer;
  }

  .left-menu-wrapper {
    list-style-type: none;
    color: ${globalColors.gray};
    min-width: 236px;
  }

  .left-menu-item {
    display: flex;
    flex-direction: column;
    margin-right: 28px;

    &:not(:last-child) {
      border-bottom: 1px solid ${globalColors.grayLight};
    }
  }

  .left-menu-btn {
    position: relative;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    color: ${globalColors.gray};
    text-align: left;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;

    &:after {
      content: url(${chevronRightIcon.src});
      display: inline-flex;
      align-items: center;
      margin-left: 8px;
      width: 11px;
      height: 11px;
    }

    &.active {
      color: ${globalColors.orangeMain};
      font-weight: 700;

      &:after {
        content: url(${chevronDownOrangeIcon.src});
      }
    }
  }

  .left-menu-level1 {
    list-style-type: none;
    padding-bottom: 16px;
  }

  .left-menu-level1-btn {
    display: flex;
    align-items: center;
    border: none;
    padding: 10px 0 10px 19px;
    font-size: 14px;
    line-height: 21px;
    color: ${globalColors.gray};
    width: 100%;
    text-align: left;
    background-color: transparent;
    cursor: pointer;

    &.level-1 {
      position: relative;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        display: inline-flex;
        margin-right: 8px;
        width: 11px;
        height: 11px;
        background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/arrow-right.react.svg");
        background-repeat: no-repeat;
        transform: translateY(-50%);
      }
    }

    &.active {
      color: ${globalColors.orangeMain};
      font-weight: 700;

      &:before {
        transform: translateY(-50%) rotate(90deg);
      }
    }
  }

  .left-menu-level1-link {
    display: flex;
    align-items: center;
    padding: 10px 0 10px 19px;
    font-size: 14px;
    line-height: 21px;
  }

  .left-menu-level2 {
    list-style-type: none;
  }

  .left-menu-level2-link {
    display: block;
    padding: 10px 0 10px 34px;
    font-size: 14px;
    line-height: 21px;
  }

  .ScrollbarsCustom {
    height: calc(100vh - 100px) !important;
  }

  .ScrollbarsCustom-Track.ScrollbarsCustom-TrackY {
    border-radius: 2px !important;
    width: 4px !important;
    background-color: #E2E2E2 !important;
  }

  .ScrollbarsCustom-Thumb.ScrollbarsCustom-ThumbY {
    border-radius: 2px !important;
    width: 4px !important;
    background-color: ${globalColors.orangeMain} !important;
  }
`;

export default StyledLeftMenu;
