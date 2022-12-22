import styled from "styled-components";
import { device } from "@components/utils/devices";

export default styled.div`
  display: flex;
  align-items: center;
  width: 36px;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
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
  max-width: 36px;
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
    width: 18px;
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
