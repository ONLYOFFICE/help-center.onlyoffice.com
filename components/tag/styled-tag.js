import styled, { css } from "styled-components";
import { Base } from "../themes";
import StyledText from "../text/styled-text";
import globalColors from "../utils/global-colors";

const StyledTag = styled.li`
background-color: ${(props) =>
    props.type === "popup"
      ? props.theme.tag.backgroundColorPopup
      : "unset"};
border: ${(props) =>
    props.type === "page"
      ? "1px solid"
      : "none"};
border-color: ${(props) =>
    (props.type === "page" && props.theme.tag.borderColorPage)};
color: ${(props) =>
    props.type === "page"
      ? props.theme.tag.colorPage
      : props.type === "list"
      ? props.theme.tag.colorList
      : props.type === "popup"
      ? props.theme.tag.colorWhite
      : "#333333"};
cursor: ${(props) => props.type !== "popup" ? "pointer" : "default"};
display: flex;
font-size: ${(props) =>
    props.type === "list"
      ? props.theme.tag.fontSizeList
      : props.type === "popup"
      ? props.theme.tag.fontSizePopup
      : "13px"};
font-weight: ${(props) => props.type === "popup" ? props.theme.tag.fontWeightBold : "400"};
margin: ${(props) => props.type === "list" ? "2px 0" : "unset"};
padding: ${(props) =>
    props.type === "page"
      ? props.theme.tag.paddingPage
      : props.type === "popup"
      ? props.theme.tag.paddingPopup
      : "0px"};
text-align: ${(props) => props.type != "list" ? "center" : "left"};
text-decoration: none;
white-space: ${(props) => props.type != "list" ? "nowrap" : "unset"};
width: ${(props) => props.type != "list" ? "fit-content" : "unset"};

:hover {
    border-color: ${(props) =>
        (props.type === "page" && globalColors.orangeMain)};
    color: ${(props) =>
        (props.type === "page" && globalColors.orangeMain)};
    text-decoration: ${(props) =>
        (props.type === "list" && "underline")};
}
`

StyledTag.defaultProps = { theme: Base };

export default StyledTag;