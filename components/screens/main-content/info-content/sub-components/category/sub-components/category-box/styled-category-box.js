import styled from "styled-components";
import Box from "@components/common/box";
import { device } from "@components/utils/devices";

const StyledCategoryBox = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: center;

    a {
        display: inline-flex;
    }
    
    .icon {
        display: inline-block;
        width: 80px;
    }

    .link {
        text-transform: uppercase;
        text-decoration: none;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0.04em;
        margin-top: 24px;
        color: #444444;

        &:hover {
            text-decoration: underline;
        }
    }

    &:hover .link {
        text-decoration: underline;
    }


    @media ${device.laptopM} {
        .icon{
            display: block;
            margin: 0 auto;
        }
    }

    @media ${device.tabletS} {
        .link {
            font-size:12px;
            padding-top: 33px;
        }
    }
`;

export default StyledCategoryBox;
