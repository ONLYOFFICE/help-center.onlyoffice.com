import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSearchArea = styled.div`
  background-color: #f5f5f5;
  position: relative;
  width: 100%;
  padding: 164px 0 80px;

  &.cat_search {
    padding: 72px 0;
  }

  .search_container {
    position: relative;
    margin: 40px auto 0;
    max-width: 688px;
  }

  .presearch_bx {
    gap: 16px;
    justify-content: center;
  }

  .presearch_title {
    line-height: 53px;
    letter-spacing: -0.02em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    overflow: unset;
  }

  .search_input {
    position: relative;
    border: 1px solid #CCCCCC;
    border-radius: 32px;
    padding: 19px 28px;
    white-space: normal;
    height: 64px;

    &::placeholder {
      font-size: 16px;
    }

    &:hover {
      border-color: #c2c2c2;
    }
  }

  .search_icon {
    display: flex;
    z-index: 2;
    transform: translateX(12px);

    svg {
      cursor: pointer;
      fill: "#AAAAAA";
    }
  }

  @media ${device.laptopM} {
    .search_container {
      max-width: 928px;
    }
  }
  @media ${device.laptop} {
    .search_container {
      margin: 76px auto 0;
      padding: 0 12px;
    }

    .search_icon {
      left: 31px;
    }

    .search_input {
      height: 68px;
    }
  }
  @media (max-width: 600px) {
    padding: 100px 0 55px;

    .input-label {
      padding: 0 8px;
    }

    .search_icon {
      padding: 16px 8px;
    }
  }
  @media ${device.mobile} {
    .input-label {
      font-size: 14px;
      top: 35%;
    }
  }
`;
export default StyledSearchArea;
