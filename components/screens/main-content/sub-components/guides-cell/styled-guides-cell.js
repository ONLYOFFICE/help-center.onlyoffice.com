import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledGuidesCell = styled.div`
  border-radius: 3px;
  width: 544px;
  background-color: #ffffff;
  box-shadow: rgba(85, 85, 85, 0.15) 0px 7px 25px;

  .guides-cell-header {
    display: flex;
    flex-direction: column;
    padding: 32px 32px 24px;
  }

  .guides-cell-top {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    &.integration {
      justify-content: space-between;

      .guides-cell-icon {
        margin-left: 8px;
        margin-right: 0;
      }
    }
  }

  .guides-cell-icon {
    margin-right: 24px;
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  .guides-cell-title {
    color: #333333;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.33em;
    letter-spacing: -0.02em;
    transition: color 0.3s;

    &[href] {
      &:hover {
        color: #ff6f3d;
      }
    }
  }

  .guides-cell-description {
    font-size: 13px;
    line-height: 1.6em;

    a {
      color: #ff6f3d;
    }
  }

  .guides-cell-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 32px;
    border-top: 1px solid #cccccc;
    padding: 24px 32px 32px;
  }

  .guides-cell-column {
    display: grid;
    gap: 16px;
  }

  .guides-cell-link {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.04em;
    color: #333333;

    &.guides-cell-header-link {
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      text-transform: uppercase;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledGuidesCell;
