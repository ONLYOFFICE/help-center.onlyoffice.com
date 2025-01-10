import styled from "styled-components";
import globalColors from "@components/utils/global-colors";
import { device } from "@components/utils/devices";

const StyledSubCategoryItem = styled.div`
  padding: 32px;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);
  scroll-margin-top: 24px;

  .subcategory-item-title {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    img {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      object-fit: contain;
    }
  }

  .subcategory-item-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    gap: 32px;

    @media ${device.mobile} {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }
  }

  .subcategory-item-list {
    list-style-type: none;
    line-height: 20px;

    li {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    a {
      display: block;
      width: 100%;
      color: ${globalColors.grayMain};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledSubCategoryItem;
