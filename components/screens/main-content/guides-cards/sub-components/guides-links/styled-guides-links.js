import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledGuidesLinks = styled.div`
    align-items: start;
    border-top: 1px solid #ccc;
    display: flex;
    padding: 24px 32px 32px;
    gap: 0 32px;

    .con-box {
      flex-direction: column;
      align-items: start;
      width: 50%;
    }

      .cell_link {
        .internal-link, .external-link {
          display: block;
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.04em;
          text-decoration: none;
          text-transform: uppercase;
          color: #333333;
          margin-bottom: 16px;

          &:hover {
            text-decoration: underline;
          }
        }

        &.not_bold {
          .internal-link, .external-link {
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            font-feature-settings: 'tnum' on, 'lnum' on;
            text-transform: none;
            margin-bottom: 0;
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
      }

`;

export default StyledGuidesLinks;
