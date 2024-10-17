import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";
import globalColors from "@components/utils/global-colors";

const StyledSearchArea = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 624px;

  .search-input {
    box-sizing: border-box;
    border: 1px solid ${globalColors.grayLight};
    border-radius: ${(props) => (props.isLeftMenu ? "24px" : "32px")};
    padding: ${(props) => (props.isLeftMenu ? "14px 16px 14px 48px" : "20px 64px 20px 28px")};
    font-size: ${(props) => (props.isLeftMenu ? "14px" : "16px")};
    line-height: ${(props) => (props.isLeftMenu ? "20px" : "24px")};
    width: 100%;
    height: ${(props) => (props.isLeftMenu ? "48px" : "64px")};
    outline: none;

    &::placeholder {
      color: ${(props) => (props.isLeftMenu ? globalColors.grayLight : globalColors.textGray)};
    }

    @media ${device.laptop} {
      ${(props) => props.isLeftMenu && css`
        padding: 14px 16px 14px 48px;
        line-height: 20px;
        height: 48px;
        background-color: ${globalColors.grayTextInputHover};
      `}
    }

    @media ${device.mobile} {
      ${(props) => !props.isLeftMenu && css`
        border-radius: 24px;
        padding: 13px 48px 13px 16px;
        font-size: 14px;
        line-height: 20px;
        height: 48px;
      `}
    }
  }

  .search-icon {
    position: absolute;
    top: 50%;
    ${(props) => (props.isLeftMenu ? "left: 16px;" : "right: 24px;")};
    border: none;
    padding: 0;
    width: ${(props) => (props.isLeftMenu ? "24px" : "16px")};
    height: ${(props) => (props.isLeftMenu ? "24px" : "16px")};
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    transform: translateY(-50%);
    outline: none;

    &.cross {
      background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/close-icon.react.svg");
      cursor: pointer;
    }

    &.search {
      background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/search.react.svg");
    }

    @media ${device.laptop} {
      ${(props) => props.isLeftMenu && css`
        width: 24px;
        height: 24px;
      `}
    }

    @media ${device.mobile} {
      ${(props) => !props.isLeftMenu && css`
        right: 16px;
      `}
    }
  }
`;
export default StyledSearchArea;
