import styled from "styled-components";
import Box from "@components/common/box";
import { device } from "@components/utils/devices";

const StyledCategory = styled(Box)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 32px;
    padding-bottom: 103px;
    margin: 0 auto;
    max-width: 880px;

    @media ${device.laptopM} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 71px 0;
        margin: auto;
    }

    @media (max-width: 650px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px 0;
        padding-bottom: 0;
    }

    @media (max-width: 429px){
        grid-template-columns: 1fr;
    }
  
`;

export default StyledCategory;
