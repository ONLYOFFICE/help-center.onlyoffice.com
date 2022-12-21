import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/screens/common/section";

const StyledGuidesCards = styled(Section)`
  padding: 80px 0 56px;

  .section-page {
    display: flex;
    gap: 0px 32px;

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

  @media ${device.tabletM} {
    margin-top: 50px;
  }
`;

export default StyledGuidesCards;
