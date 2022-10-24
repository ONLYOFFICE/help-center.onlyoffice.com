import styled from "styled-components";
import { device } from "../../../components/utils/devices";

const StyledSingleContent = styled.div`
  display: inline-block;
  margin: 100px 0 20px 304px;
  max-width: 1300px;
  padding: 0 10% 0 24px;
  position: relative;
  width: auto;

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

    @media ${device.tabletM} {
      flex-direction: column;
      .cell_container {
      }
    }
  }
    
  @media (max-width: 1190px) {
    margin: 100px 0 20px 0px;
    padding: 0 20px;
  }
  @media (max-width: 500px) {
    margin: 106px 0 20px 0px;
  }
`;

export default StyledSingleContent;
