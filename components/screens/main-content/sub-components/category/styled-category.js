import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledCategory = styled.div`
  display: flex;
  gap: 32px;
  margin: 0 auto;
  max-width: 880px;

  .category-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 120px;

    &:hover {
      .category-box-title {
        text-decoration: underline;
      }
    }

    @media ${device.mobile} {
      min-width: 104px;
    }
  }

  .category-box-img {
    margin-bottom: 24px;
    width: 80px;
    min-width: 80px;
    height: 80px;

    @media ${device.mobile} {
      margin-bottom: 16px;
      width: 64px;
      min-width: 64px;
      height: 64px;
    }
  }

  .category-box-title {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #444444;
    text-align: center;
    text-transform: uppercase;
  }

  @media ${device.laptopM} {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default StyledCategory;
