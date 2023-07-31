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

.PopupPanelCaptionItems > a {
    float: right;
  }

  .PopupPanelCaption {
    color: #333;
    display: flex;
    font-size: 18px;
    font-weight: 300;
    padding: 30px 20px 15px;
    text-align: left;
    align-items: center;
    justify-content: space-between;

    .popupPanelText {
      display: flex;
      align-items: center;

    }

    li {
      margin: 0 5px;
    }
  }

  .tagsLink {
    border-bottom: 1px dotted #ff642e;
    color: #ff642e;display: block;
    font-size: 13px;
    margin-right: 20px;
    position: relative;
    text-decoration: none;
  }

  .textContent {
    display: block;
    max-height: 500px;
    overflow-y: auto;
    margin: 30px 0px 30px;
    padding: 0 20px 15px;
    text-align: center;
    width: auto;
    .markLink {
      display: block;
      font-size: 13px;
      line-height: 2em;
    }

    .postlinkText {
      font-size: 13px;
    }

    .loadButton {
      margin: 24px 0 0;
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
    width: 780px;

    @media ${device.tablet} {
      width: 85vw;
      background-size: 85vw auto;

      .PopupPanelCaption {
        padding: 110px 130px 0;
        display: block;
      }
    }

    @media ${device.mobileL} {
      width: 100vw;
      background-size: 120vw auto;
      background-position: 50% 10%;

      .PopupPanelCaption {
        padding: 110px 80px 0;
      }
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
    height: 1px;
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
