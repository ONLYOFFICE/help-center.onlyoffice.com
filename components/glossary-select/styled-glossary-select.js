import styled, { css } from "styled-components";
import StyledText from "../text/styled-text";
import globalColors from "../utils/global-colors";

const StyledGlossary = styled(StyledText)`
background-color: ${(props) => props.active ? globalColors.orangeLetters : "#ffffff"};
color: ${(props) =>
    props.active
      ? globalColors.white
      : props.isDisabled
      ? globalColors.gray
      : globalColors.orangeLetters };
cursor: ${(props) => !props.isDisabled ? "pointer" : "unset"};
font-size: 16px;
font-weight: ${(props) => props.active ? "700" : "600"};
padding: 1px 5px;
text-align: center;
text-decoration: none !important;
text-transform: uppercase;
width: fit-content;

:hover {
    background-color: ${(props) => !props.isDisabled ? globalColors.hoverBlue : "unset"};
}
`

StyledGlossary.defaultProps = { };

export default StyledGlossary;