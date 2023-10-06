import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledVideo = styled.div`
    height: inherit;
    text-align: left;
    width: 224px;

    @media ${device.laptop} {
        height: unset;
        width: 100%
    }
`

export default StyledVideo;