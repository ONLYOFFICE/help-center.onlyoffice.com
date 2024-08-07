import styled from "styled-components";
import Section from "@components/common/section";
import { device } from "@components/utils/devices";

const StyledCategoryContent = styled(Section)`
    .section-page {
        padding: 0 4px 0 40px;
    }
    @media ${device.tabletS} {
        .section-page {
        padding: 0 16px;
        }
    }
`;

export default StyledCategoryContent;
