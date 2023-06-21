import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSingleLayout = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 72px auto 0;

  .alert-enter {
    opacity: 0;
  }
  .alert-enter-active {
    opacity: 1;
    transition: opacity .1s fadein;
  }
  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 0;
    transition: opacity .1s fadeout;
  }

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
  }
`;

export default StyledSingleLayout;
