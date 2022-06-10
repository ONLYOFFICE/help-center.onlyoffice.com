import styled from "styled-components";
import { device } from "../../../../components/utils/devices";
import Section from "../../section";

const StyledGuidesCards = styled(Section)`
  margin-top: 100px;
  .section-page {
    display: flex;
    gap: 0px 20px;

    .cell_container {
      display: flex;
      flex-direction: column;
      gap: 32px 0px;
    }

    @media ${device.tabletM} {
      flex-direction: column;
      .cell_container {
      }
    }
  }
`;

export default StyledGuidesCards;
