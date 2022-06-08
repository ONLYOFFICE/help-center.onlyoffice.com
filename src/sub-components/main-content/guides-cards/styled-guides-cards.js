import styled from "styled-components";
import { device } from "../../../../components/utils/devices";

const StyledGuidesCards = styled.div`
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
`;

export default StyledGuidesCards;
