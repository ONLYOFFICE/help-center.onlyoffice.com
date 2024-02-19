import styled from "styled-components";
import { device } from "@components/utils/devices";

export default styled.div`
  display: flex;
  align-items: center;
  width: 36px;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  gap: 8px;

  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  .arrow-image {
    outline: none;
    -webkit-tap-highlight-color: transparent;
    height: 12px;
    width: 12px;

    > img {
      transform: rotate(90deg);
    }
  }

  .lang-name {
    font-size: 13px;
    cursor: pointer;
    overflow: unset;
  }

  @media ${device.laptopM} {
    .lang-name, .language-item-title {
      display: none;
    }
  }

  @media (max-width: 1190px) {
    width: 50px;
  }

  /* @media ${device.mobileL} {
    width: 44px;
    grid-template-columns: 18px 24px;
  } */
`;

const StyledPanelView = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: max-content;
  background-color: white;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
  z-index: 100;
  padding: 6px 12px;
  top: 40px;
  left: 0;

  @media ${device.laptopM} {
    //left: 30%;
    width: 21px;
  }

  /* @media ${device.mobileL} {
    left: 0;
  } */
`;

const StyledItem = styled.div`
  display: flex;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  .language-item-image {
    margin-top: -1px;
  }
  .language-item-link {
    align-items: center;
    display: flex;
    height: 30px;
    width: 18px;
    text-decoration: none;
    gap: 12px;
  }

  @media ${device.laptopM} {
    .language-item-link {
      width: 20px;
      justify-content: space-evenly;
    }
  }
`;

export { StyledItem, StyledPanelView };
