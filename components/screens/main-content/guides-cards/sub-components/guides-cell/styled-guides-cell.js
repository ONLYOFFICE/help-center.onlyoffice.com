import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledGuidesCell = styled.div`
  background-color: white;  
  border-radius: 3px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  display: inline-block;
  height: fit-content;
  flex: 44%;
  margin: 0;
  position: relative;
  vertical-align: top;
  text-align: center;
  transition: box-shadow 0.3s;
  width: 544px;

  .cell_header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 32px 32px 24px;

      .presearch_title_link {
        color: #333;
        font-weight: 700;
        font-size: 18px;
        line-height: 1.33em;
        text-align: left;
        text-decoration: none;
        letter-spacing: -0.02em;

        &.heading {
          &:hover {
            color: #333;
          }
        }

        &:hover {
          color: #ff6f3d;
        }
      }

    .cell_icon {
      gap: 24px;
      &.connectors {
        justify-content: space-between;
        width: 100%;
      }
    }

    .cell_header_links {
      display: flex;
      align-items: start;
      text-align: left;

      span {
        display: block;
        font-size: 13px;
        line-height: 1.6em;
        width: 100%;
      }
    }
  }

  @media ${device.laptopM} {
    width: auto;
  }
  
  @media ${device.tabletL} {
   .cell_links {
     display: block;

     .links_area {
      &:last-child {
        padding-left: 0;
      }
    }
   }
  }  

  @media ${device.tablet} {
    width: 90vw;
  }

  @media ${device.tabletS} {
    flex: unset;
  }

  @media ${device.mobileL} {
    .cell_header {
      display: block;

      .cell_icon {
        padding-bottom: 20px;
      }
    }
  }
`;

export default StyledGuidesCell;
