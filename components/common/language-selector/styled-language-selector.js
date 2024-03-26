import styled from "styled-components";
import { device } from "@components/utils/devices";

export default styled.div`
  width: 36px;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  .selector {
    align-items: center;
    display: flex;
    gap: 4px;
    justify-content: space-between;
    width: 36px;
  }

  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .arrow-image {
    outline: none;
    -webkit-tap-highlight-color: transparent;
    height: 8px;
    transform: rotate(90deg);
    width: 10px;
  }
`;

const StyledPanelView = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  gap: 12px;
  flex-direction: column;
  width: max-content;
  background-color: white;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
  z-index: 100;
  padding: 6px;
  top: 40px;
  left: 0;
`;

const StyledItem = styled.div`
  outline: none;
  -webkit-tap-highlight-color: transparent;

  .language-item-link {
    display: block;
    height: 24px;
    width: 24px;
    text-decoration: none;
  }
`;

export { StyledItem, StyledPanelView };
