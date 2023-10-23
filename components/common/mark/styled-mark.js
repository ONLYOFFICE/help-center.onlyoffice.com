import styled, { css } from "styled-components";
import { Base } from "@components/themes";

const StyledMark = styled.li`
border-radius: 2px;
color: #ffffff;
display: inline-block;
font-size: 12px;
font-weight: 600;
line-height: 1.33em;
letter-spacing: 0.48px;
margin: 0;
padding: 4px 8px;
text-align: center;
text-decoration: none !important;
text-transform: uppercase;
`;

StyledMark.defaultProps = { theme: Base };

export default StyledMark;
