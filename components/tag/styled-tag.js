import styled, { css } from "styled-components";
import { Base } from "../themes";
import StyledText from "../text/styled-text";
import globalColors from "../utils/global-colors";

const listColor = (props) => props.listType;

const StyledTag = styled(StyledText)`
background-color: ${(props) =>
    props.type === "list"
      ? globalColors.videoGuide
      : props.type === "heading"
      ? props.theme.tag.backgroundColorHeading
      : "#ffffff"};
border: ${(props) =>
    props.type == "page"
      ? "1px solid"
      : "none"};
border-color: ${(props) =>
    (props.type === "page" && props.theme.tag.borderColorPage)};
color: ${(props) =>
    props.type === "page"
      ? props.theme.tag.colorPage
      : props.type === "letter"
      ? props.theme.tag.colorLetter
      : props.type === "heading" || props.type === "list"
      ? props.theme.tag.colorWhite
      : "#333333"};
cursor: ${(props) => props.type != "heading" ? "pointer" : "unset"};
font-size: ${(props) =>
    props.type === "list"
      ? props.theme.tag.fontSizeList
      : props.type === "heading"
      ? props.theme.tag.fontSizeHeading
      : "16px"};
font-weight: ${(props) => props.type === "heading" || props.type === "letter" ? props.theme.tag.fontWeightBold : "400"};
padding: ${(props) =>
    props.type === "page"
      ? props.theme.tag.paddingPage
      : props.type === "letter"
      ? props.theme.tag.paddingLetter
      : props.type === "heading"
      ? props.theme.tag.paddingHeading
      : props.type === "list"
      ? props.theme.tag.paddingList
      : "0px"};
text-align: center;
text-decoration: none !important;
text-transform: ${(props) => props.type === "letter" ? props.theme.tag.textTransformLetter : "none"};
width: ${(props) => props.type === "list" ? props.theme.tag.widthList : "fit-content"};

:hover {
    background-color: ${(props) =>
        (props.type === "letter" && globalColors.hoverBlue)};
    border-color: ${(props) =>
        (props.type === "page" && globalColors.orangeMain)};
    color: ${(props) =>
        (props.type === "page" && globalColors.orangeMain)};
}
`

StyledTag.defaultProps = { theme: Base };

export default StyledTag;