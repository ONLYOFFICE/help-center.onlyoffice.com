import styled from "styled-components";
import Section from "@components/screens/common/section";
import { device } from "@components/utils/devices";

const StyledInfoContent = styled(Section)`
background-color: #f5f5f5;
margin: 72px 0 0;
padding: 0;

@media ${device.tabletS} {
    margin: 56px 0 0;
}
`;

export default StyledInfoContent;