import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledGuidesCell = styled.div`
  background-color: white;  
  border: 1px solid rgba(85, 85, 85, 0.15);
  border-radius: 5px;
  box-shadow: 0 7px 25px rgb(0 0 0 / 10%);
  display: inline-block;
  height: fit-content;
  margin: 0;
  position: relative;
  vertical-align: top;
  text-align: center;
  transition: box-shadow 0.3s;
  width: 544px;

  .cell_header {
    border-bottom: 1px solid #ccc;
    display: flex;
    gap: 20px;
    padding: 32px;

    .cell_header_links {
      display: block;
      text-align: left;

      span {
        display: block;
        width: 100%;
      }

      .presearch_title_link {
        color: #333;
        font-weight: 700;
        font-size: 18px;
        line-height: 1.2em;
        padding: 0 0 16px;
        text-align: left;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .cell_links {
    align-items: start;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 28px 32px;

    .links_area {
      flex-direction: column;
      justify-content: start;
      align-items: start;

      .internal-link, .external-link {
        display: block;
        font-weight: 600;
        text-decoration: none;
        padding: 6px 0;
        &.not_bold {
          font-weight: 400;
          padding-left: 32px;
        }
        &:hover {
          text-decoration: underline;
        }
      }

      &:last-child {
        padding-left: 32px;
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

  @media ${device.tabletM} {
    width: 90vw;
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
