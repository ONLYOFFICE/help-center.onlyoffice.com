import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSingleLayout = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 72px auto 0;

  .section-page {
    .cell_container {
      display: flex;
      flex-direction: column;
      gap: 32px 0px;
    }

    @media ${device.tablet} {
      flex-direction: column;
      .cell_container {
      }
    }
  }
    
  @media ${device.laptopM} {
    max-width: 100vw;
    margin: 58px auto 0;
  }
  @media (max-width: 500px) {
    margin: 106px auto 0;
  }
  
  @media ${device.tabletS} {
    //margin: 56px auto 0;
  }
`;

export default StyledSingleLayout;
