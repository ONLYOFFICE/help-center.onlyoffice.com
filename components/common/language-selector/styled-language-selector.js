import styled from "styled-components";
import arrownDown from "@public/images/icons/arrow-down.svg";

const StyledLanguageSelector = styled.div`
  position: relative;

  .language-button {
    position: relative;
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;

    &:after {
      content: "";
      display: inline-flex;
      margin-left: 4px;
      width: 8px;
      height: 6px;
      background-image: url(${arrownDown.src});
      background-repeat: no-repeat;
      transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "")};
    }
  }

  .language-list {
    position: absolute;
    top: 40px;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 6px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
    z-index: 100;
    list-style-type: none;
  }

  .language-item {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .language-link {
    display: flex;
  }
`;

export default StyledLanguageSelector;
