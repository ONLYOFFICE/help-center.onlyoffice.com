import styled from "styled-components";
import { device } from "@components/utils/devices";

import apple from "@public/images/icons/apple.svg";
import android from "@public/images/icons/android.svg";

const StyledGuidesCell = styled.div`
  background-color: white;  
  border-radius: 3px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  display: inline-block;
  height: fit-content;
  flex: 48%;
  margin: 0;
  position: relative;
  vertical-align: top;
  text-align: center;
  transition: box-shadow 0.3s;
  width: 544px;

  .cell_header {
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: flex-start;
    gap: 32px;
    padding: 32px 32px 24px;

    .cell_header_links {
      display: flex;
      flex-direction: column;
      align-items: start;
      text-align: left;

      span {
        display: block;
        line-height: 22px;
        width: 100%;
      }

      .presearch_title_link {
        color: #333;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        padding: 0 0 16px;
        text-align: left;
        text-decoration: none;
        letter-spacing: -0.02em;

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
    padding: 24px 32px 32px;
    gap: 32px;

    .links_area {
      flex-direction: column;
      align-items: initial;

      .cell_link {
        .internal-link, .external-link {
          display: block;
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.04em;
          text-decoration: none;
          color: #333333;

          &:hover {
            text-decoration: underline;
          }
        }

        &:not(.not_bold) {
          margin-bottom: 16px;

          &:not(:first-child) {
            margin-top: 24px;
          }

          .internal-link, .external-link {
            text-transform: uppercase;
          }
        }

        &.not_bold {
          .internal-link, .external-link {
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            font-feature-settings: 'tnum' on, 'lnum' on;
          }

          &:not(:last-child) {
            margin-bottom: 15px;
          }

          &.cell_heading {
            &:not(:last-child) {
              margin-bottom: -6px;
            }
          }
        }
      }

      .cell_heading {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        font-feature-settings: 'tnum' on, 'lnum' on;
        color: #FF6F3D;
        text-align: initial;

        &.iOS,
        &.Android {
          &:before {
            margin-right: 8px;
            width: 16px;
          }
        }

        &.iOS {
          &::before {
            content: url(${apple.src});
          }
        }

        &.Android {
          &:before {
            content: url(${android.src});
          }
        }
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
