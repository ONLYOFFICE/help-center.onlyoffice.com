import styled, { css } from "styled-components";
import { device } from "../../../../components/utils/devices";

const StyledAlsoPopup = styled.div`
background-color: #e0e1e6;
    box-shadow: 0 7px 25px rgb(85, 85, 85, 0.15);
    bottom: 0;
    padding: 10px 15px 15px 15px;
    position: fixed;
    right: 0px;
    width: 340px;
    z-index: 1000;

  .PopupPanelCaptionItems {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .read_also {
      color: #333;
      display: inline-block;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 8px;
    }
  }
  @media ${device.mobileM} {
    width: 100%;
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
  float: right;
  width: 15px;
  height: 15px;
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

export { CloseButton, StyledAlsoPopup };
