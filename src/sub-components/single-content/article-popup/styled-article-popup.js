import styled, { css } from "styled-components";
import { device } from "../../../../components/utils/devices";

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

  .popupPanelText {
    background-color: transparent;
    color: #333;
    display: inline-flex;
    font-size: 18px;
    font-weight: 300;
    margin: 0 0 0 20px;
    text-align: left;

    li {
      margin: 0 5px;
    }
  }

  .tagsLink {
    border-bottom: 1px dotted #ff642e;
    color: #ff642e;display: block;
    float: right;
    font-size: 13px;
    margin-right: 20px;
    position: relative;
    text-decoration: none;
  }

  .textContent {
    display: block;
    max-height: 500px;
    overflow-y: auto;
    margin: 30px 40px 30px;
    padding: 0 15px 15px;
    width: auto;
    .markLink {
      display: block;
      font-size: 13px;
      line-height: 2em;
    }

    .postlinkText {
      font-size: 13px;
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

    .PopupPanelCaption {
      padding: 30px 20px 15px;
      display: block;
    }

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
  position: relative;
  display: block;
  float: right;
  width: 13px;
  height: 13px;
  cursor: pointer;
  margin: 6px 0 0;

  &:before,
  &:after {
    content: "";
    background-color: #333333;
    position: absolute;
    width: 100%;
    height: 1.5px;
    transform: rotate(45deg);
    border-radius: 1px;
    top: 0;
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export { CloseButton, StyledArticlePopup };
