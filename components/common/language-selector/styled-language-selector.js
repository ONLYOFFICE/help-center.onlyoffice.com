import styled from "styled-components";
import globalColors from "@components/utils/global-colors";

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
      background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/arrow-down.react.svg");
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
    background-color: ${globalColors.white};
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
    width: 24px;
    height: 24px;
    background-image: url("/images/flags/flags_site.react.svg");

    &.en {
      background-position-x: -32px;
    }

    &.de {
      background-position-x: 0px;
    }

    &.fr {
      background-position-x: -96px;
    }

    &.es {
      background-position-x: -64px;
    }

    &.it {
      background-position-x: -128px;
    }

    &.zh {
      background-position-x: 24px;
    }

    &.ru {
      background-position-x: -160px;
    }
  }
`;

export default StyledLanguageSelector;
