import styled, { css } from "styled-components";
import StyledText from "@components/common/text/styled-text";
import globalColors from "@components/utils/global-colors";

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

@media (max-width: 608px) {
    display: inline-block;
}
`

StyledGlossary.defaultProps = { };

export default StyledGlossary;