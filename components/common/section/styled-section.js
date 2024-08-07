import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSection = styled.section`
  .section-page {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 40px;
  }

  @media ${device.tabletS} {
    .section-page {
      padding: 0 16px;
    }
  }
`;

export default StyledSection;
