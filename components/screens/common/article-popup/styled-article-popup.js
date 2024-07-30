import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledArticlePopup = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  padding: 16px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  &.show {
    opacity: 1;
    visibility: initial;
  }

  .article-popup-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    min-height: 100%;
  }

  .article-popup-wrapper {
    box-sizing: border-box;
    position: relative;
    padding: 32px;
    width: 624px;
    height: 100%;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 25px;

    @media ${device.tablet} {
      width: 95vw;
    }

    @media ${device.tabletS} {
      padding: 24px 16px;
      width: calc(100vw - 32px);

      .article-popup-header {
        flex-direction: column;
        align-items: start;
      }
    }
  }

  .article-popup-btn {
    position: relative;
    display: block;
    border: none;
    margin-left: auto;
    padding: 0;
    width: 16px;
    height: 16px;
    background-color: transparent;
    cursor: pointer;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 1px;
      width: 16px;
      height: 2px;
      background-color: #333333;
      transform: rotate(45deg);
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .article-popup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
  }

  .article-popup-title {
    font-size: 16px;
    color: #333333;
  }

  .article-popup-link {
    font-size: 14px;
    color: #ff6f3d;
    text-decoration: underline;
    &:visited {
      color: #ff6f3d;
    }
  }

  .article-popup-list {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .article-popup-list-link {
    display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
    flex-wrap: wrap;
    padding: 0px 0px 8px;
    text-decoration: none;
    gap: 8px;
  }

  .article-popup-list-title {
    color: #ff6f3d;
    text-decoration: underline;
  }

  .mark {
    border-radius: 2px;
    padding: 4px 8px;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.33em;
    letter-spacing: 0.48px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  .article-popup-more-btn {
    display: block;
    margin: 0 auto;
  }
`;

export default StyledArticlePopup;