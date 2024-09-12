import styled from "styled-components";
import { device } from "@components/utils/devices";
import globalColors from "@components/utils/global-colors";

const StyledTreeView = styled.li`
  .treeview-heading {
    display: flex;
    align-items: center;
    border: none;
    padding: 6px 0;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
    background-color: transparent;
    transition: color 0.3s;
    cursor: pointer;

    &:before {
      content: url("https://static-helpcenter.onlyoffice.com/images/icons/arrow-right.react.svg");
      display: inline-flex;
      align-items: center;
      margin-right: 8px;
      width: 11px;
      height: 11px;
      transform: ${(props) => (props.active && "rotate(90deg)")};
    }

    &:hover {
      color: ${globalColors.orangeMain};
    }

    @media ${device.laptop} {
      padding: 10px 0;
      font-weight: 400;
    }
  }

  .treeview-items {
    list-style-type: none;
    overflow: hidden;
  }

  .treeview-link {
    display: block;
    padding: 6px 0 6px 19px;
    font-size: 14px;
    line-height: 22px;
    color: ${globalColors.grayMain};
    transition: color 0.3s;

    &:hover {
      color: ${globalColors.orangeMain};
    }

    @media ${device.laptop} {
      padding: 10px 0 10px 34px;
    }
  }
`

export default StyledTreeView;