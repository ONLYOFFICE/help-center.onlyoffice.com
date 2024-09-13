import styled from "styled-components";
import globalColors from "@components/utils/global-colors";

const StyledBreadcrumbs = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  margin: 0 0 24px;
  list-style-type: none;

  li {
    &:not(:last-child) {
      margin-right: 31px;
    }
  }

  .breadcrumb-link {
    align-items: center;
    display: inline-flex;
    position: relative;
    color: ${globalColors.grayTextInput};
    text-decoration: none;
    line-height: 18px;

    &:after {
      content: "";
      position: absolute;
      right: -21px;
      top: 50%;
      width: 11px;
      height: 12px;
      background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/crumb.react.svg");
      background-repeat: no-repeat;
      background-size: contain;
      transform: translateY(-50%);
    }

    &.last {
      color: ${globalColors.orangeMain};
      line-height: 133%;
      display: inline-flex;

      &:after {
        display: none;
      }
    }

    &:not(.last) {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledBreadcrumbs;