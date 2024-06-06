import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledArticlePopup = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, 0.4);
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
pointer-events: none;
transition: all ease 0.5s;
z-index: 1001;

  .PopupPanelCaption {
    color: #333;
    display: flex;
    font-size: 16px;
    padding: 16px 0px;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .popupPanelText {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;

    }
    li {
      margin: 0 5px;
    }
  }

  .tagsLink {
    color: #ff6f3d;
    display: block;
    font-size: 14px;
    text-decoration: underline;
  }

  .textContent {
    display: block;
    max-height: 402px;
    margin-bottom: 32px;
    overflow-y: auto;
    text-align: center;
    width: auto;
    .markLink {
      align-items: baseline;
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      line-height: 1.33em;
      gap: 8px;
      padding: 0 0 8px;
      text-decoration: none;
      .title {
        text-decoration: underline;
      }
    }

    .postlinkText {
      font-size: 14px;
      line-height: 1.33em;
      display: initial;
    }

    .loadButton {
      margin: 24px 0 0;
      font-size: 13px;
      letter-spacing: 0.52px;
    }
  }

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  .popup-content {
    background-color: #fff;
    box-shadow: 0 7px 25px rgb(0, 0, 0, 0.1);
    width: 624px;
    padding: 32px;
    height: 469px;

    @media ${device.tablet} {
      width: 85vw;
      background-size: 85vw auto;
    }

    @media ${device.tabletS} {
      width: calc(100vw - 128px);
      background-size: 120vw auto;
      background-position: 50% 10%;

      .PopupPanelCaption {
        flex-direction: column;
        align-items: start;
      }
      .textContent {
        max-height: 76%;
      }
    }
    @media ${device.mobileL} {
      width: calc(100vw - 64px);
      padding: 32px 16px;

    }
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  display: block;
  float: right;
  width: 16px;
  height: 16px;
  margin: 0px 0 0;
  position: relative;

  &:before,
  &:after {
    content: "";
    background-color: #333333;
    position: absolute;
    transform: rotate(45deg);
    border-radius: 1px;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 2px;
    border-radius: 50%;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export { CloseButton, StyledArticlePopup };
