import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledGuidesLinks = styled.div`
    align-items: start;
    border-top: 1px solid #ccc;
    display: flex;
    padding: 24px 32px 32px;
    gap: 0 32px;

    .con-box {
      align-items: start;
      flex-direction: column;
      gap: 16px;
      width: 50%;
    }

    .cell_link {
        color: #333333;
        display: block;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.04em;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
        }

        &.not_bold {
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            text-transform: none;
        }
    }
`;

export default StyledGuidesLinks;
