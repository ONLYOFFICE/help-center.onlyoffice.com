import styled from "styled-components";
import globalColors from "@components/utils/global-colors";
import { device } from "@components/utils/devices";

const StyledCategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 32px;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);
  scroll-margin-top: 24px;

  .category-item-title {
    display: flex;
    align-items: center;
    color: ${globalColors.gray};

    &:not(:last-child) {
      margin-bottom: 32px;
    }

    img {
      margin-right: 16px;
      object-fit: contain;
    }

    a {
      display: flex;
      align-items: center;
      transition: color 0.3s;

      &:hover {
        color: ${globalColors.orangeMain};
      }
    }
  }

  .category-item-top-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px 32px;
    border-bottom: 1px solid ${globalColors.grayLight};
    padding-bottom: 16px;
    margin: 0 0 16px;
    list-style-type: none;

    img {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      object-fit: contain;
    }

    a {
      display: flex;
      align-items: center;
      color: ${globalColors.orangeMain};

      &:hover {
        text-decoration: underline;
      }
    }
  }  

  .category-item-subtitle {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
  }

  .category-item-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    gap: 32px;

    @media ${device.mobile} {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }
  }

  .category-item-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px 32px;
    margin: 0;
    font-size: 14px;
    line-height: 19px;
    color: ${globalColors.grayMain};
    list-style-type: none;

    a {
      display: flex;
      align-items: center;

      img {
        margin-right: 8px;
        width: 16px;
        height: 16px;
        object-fit: contain;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledCategoryItem;