import styled from "styled-components";
import { device } from "@components/utils/devices";
import arrowGrayDown from "@public/images/icons/arrow-gray-down.svg";

const StyledTreeView = styled.div`
  box-sizing: border-box;

  ul {
    list-style-type: none;
  }

  .left-menu-category-item {
    padding: 12px 0;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #CCCCCC;
    }
  }

  .left-menu-category-btn {
    border: none;
    padding: 8px 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    width: 100%;
    color: #333333;
    background-color: transparent;
    text-align: initial;
    text-transform: uppercase;
    transition: color 0.3s;
    cursor: pointer;

    &.active {
      color: #FF6F3D;
    }
  }

  .left-menu-arrow-btn {
    border: none;
    padding: 0;
    margin-top: 13px;
    margin-right: 4px;
    width: 11px;
    min-width: 11px;
    height: 11px;
    background-image: url(${arrowGrayDown.src});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    transform: rotate(-90deg);
    cursor: pointer;

    &.active {
      transform: rotate(0);
    }
  }

  .left-menu-level-item {
    display: flex;

    &.left-menu-level-2-item {
      padding-left: 14px;
    }

    &.left-menu-level-3-item {
      padding-left: 28px;
    }

    &.left-menu-level-4-item {
      padding-left: 42px;
    }
  }

  .left-menu-level-link {
    box-sizing: border-box;
    display: block;
    padding: 8px 0;
    font-size: 14px;
    line-height: 21px;
    width: 100%;
    color: #333333;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      color: #FF6F3D;
    }

    &.left-menu-category-link {
      line-height: 19px;
    }

    &.left-menu-level-1-link {
      font-weight: 700;
    }

    &.left-menu-level-2-link {
      padding-left: 14px;
    }

    &.left-menu-level-3-link {
      padding-left: 29px;
    }

    &.left-menu-level-4-link {
      padding-left: 43px;
    }

    &.left-menu-level-4-article-link {
      padding-left: 57px;
    }
  }
`

export default StyledTreeView;