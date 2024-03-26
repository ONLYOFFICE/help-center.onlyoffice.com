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
        padding: 0 20px;
        width: 80px;
    }

    .internal-link {
        text-transform: uppercase;
        text-decoration: none;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0.04em;
        padding: 24px 0 0;
        color: #444444;

        &:hover {
            text-decoration: underline;
        }
    }

    &:hover .internal-link {
        text-decoration: underline;
    }


    @media ${device.laptopM} {
        .icon {
            display: block;
            margin: 0 auto;
        }
    }

    @media ${device.tabletS} {
        .internal-link {
            font-size: 12px;
            padding: 16px 0 0;
        }
            
        .icon {
            padding: 0 20px;
            width: 64px;
            > img {
                width: 64px;
            }
        }
    }
`;

export default StyledCategoryBox;
