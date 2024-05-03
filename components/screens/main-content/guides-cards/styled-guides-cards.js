import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/screens/common/section";

const StyledGuidesCards = styled(Section)`
  background-color: #f5f5f5;  
  padding: 80px 0 112px;

  &.mp {
    background-color: #ffffff;
    > .section-page {
      flex-wrap: wrap;
      justify-content: flex-start;
      flex: 2;
      > div > .cell_header > .cell_icon > img {
        width: 48px;
      }

    }
  }

  .section-page {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .squares {
      align-items: start;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex: 2;
      gap: 32px;
    }

    .top-blck {
      justify-content: center;
      gap: 48px;

      .top-links {
        align-items: center;
        display: flex;
        gap: 8px;

        > img {
          height: 16px;
          width: 16px;

        }
        > a {
          color: #333333;
          display: flex;
          > span {
            color: #333333;
            font-weight: 700;
            letter-spacing: 0.04em;
            text-decoration: none;
            text-transform: uppercase;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        } 

      }
    }
  }

  @media ${device.laptop} {
    padding: 80px 0 88px;
  }

  @media ${device.laptop} {
    padding: 80px 0 80px;
  }

  @media ${device.tabletS} {
    padding: 48px 0;
  }
`;

export default StyledGuidesCards;
