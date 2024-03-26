import styled from "styled-components";
import Box from "@components/common/box";
import { device } from "@components/utils/devices";

const StyledCategory = styled(Box)`
    display: flex;
    gap: 32px;
    padding: 0 0 112px;
    margin: 0 auto;
    max-width: 880px;

    @media ${device.laptopM} {
        max-width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 0 72px;
    }

    @media ${device.tabletS} {
        padding: 0 0 48px;
    }
  
`;

export default StyledCategory;
