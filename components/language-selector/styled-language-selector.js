import styled from "styled-components";
import { device } from "../utils/devices";

export default styled.div`
  align-items: center;
  width: 104px;
  display: grid;
  grid-template-columns: 18px auto 24px auto;
  justify-content: end;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
    margin: 3px auto;
    -webkit-tap-highlight-color: transparent;
  }
  .arrow-image {
    margin-top: 8px;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .lang-name {
    font-size: 13px;
    padding-left: 10px;
    cursor: pointer;
  }

  @media ${device.laptopM} {
    .lang-name, .language-item-title {
      display: none;
    }
  }

  @media ${device.mobileL} {
    width: 44px;
    grid-template-columns: 18px 24px;
  }
`;

const StyledPanelView = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: max-content;
  max-width: 106px;
  background-color: white;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
  z-index: 100;
  padding: 6px 12px;
  top: 40px;
  left: -13%;

  @media ${device.laptopM} {
    left: 30%;
  }

  @media ${device.mobileL} {
    left: 0;
  }
`;

const StyledItem = styled.div`
  outline: none;
  -webkit-tap-highlight-color: transparent;
  .language-item-image {
    height: 18px;
    margin-top: -1px;
  }
  .language-item-link {
    align-items: center;
    display: flex;
    height: 30px;
    gap: 0 10px;
    padding: 10px 0 0;
    width: 106px;
    text-decoration: none;
  }

  .language-item-title {
    font-size: 13px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media ${device.laptopM} {
    .language-item-link {
      width: 20px;
    }
  }
`;

export { StyledItem, StyledPanelView };
