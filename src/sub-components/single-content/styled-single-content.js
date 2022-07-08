import styled from "styled-components";
import { device } from "../../../components/utils/devices";

const StyledSingleContent = styled.div`
  margin: 100px 0 20px 304px;
  max-width: 1300px;
  padding: 0 10% 0 24px;
  position: relative;
  width: auto;

  .section-page {
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

export default StyledSingleContent;
