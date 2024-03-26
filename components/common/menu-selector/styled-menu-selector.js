import styled from "styled-components";
import { device } from "@components/utils/devices";

export default styled.div`
  outline: none;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: end;

  .menu-selector {
    display: flex;
    align-items: center;
  }

  span {
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;
    &.orange {
      color: #ff6f3d;
    }
  }

  .arrow-image {
    outline: none;
    -webkit-tap-highlight-color: transparent;
    height: 24px;
    transform: rotate(270deg);
    width: 24px;
    &.open {
      transform: rotate(0deg);
    }
  }
`;

const StyledPanelView = styled.div`
  align-items: end;
  border-top: 1px solid #666666;
  position: absolute;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  gap: 24px;
  flex-direction: column;
  background-color: #333;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
  z-index: 100;
  padding: 16px 90px 18px 0;
  top: 55px;
  right: 0;
  justify-content: space-between;
  width: calc(100vw - 90px);
`;

const StyledItem = styled.div`
  outline: none;
  -webkit-tap-highlight-color: transparent;

  .menu-item-link {
    color: #fff;
    display: block;
    font-size: 13px;
    font-weight: 600;
    text-align: right;
    text-decoration: none;
    text-transform: uppercase;
    &.orange {
      color: #ff6f3d;
    }
  }
`;

export { StyledItem, StyledPanelView };
