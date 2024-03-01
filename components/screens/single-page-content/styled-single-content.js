import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSingleLayout = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 72px auto 0;
  padding: 0 32px;

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

  h3.subcat-heading {
    padding: 0 0 24px;
    &.dlw {
      display: flex;
      gap: 16px;
    }
  }

  .subcat-div {
    padding: 0 0 24px;
    h5 {
      padding: 0;
    }
  }

  .classic-ul {
    list-style-type: none;
    > li {
        padding: 16px 0 0;
      > a > span {
        color: #333333;
        text-decoration: none;
        &:hover {
          color: #ff6f3d;
        }
      }
    }
  }

  .reqs {
      display: flex;
      gap: 8px;
      text-decoration: underline;
  }
    
  @media ${device.laptopM} {
    max-width: 100vw;
    margin: 72px auto 0;
  }
  @media (max-width: 500px) {
    margin: 106px auto 0;
  }
  
  @media ${device.tabletS} {
    //margin: 56px auto 0;
  }
`;

export default StyledSingleLayout;
