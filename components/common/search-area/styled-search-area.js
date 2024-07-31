import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSearchArea = styled.div`
  background-color: #f5f5f5;
  position: relative;
  width: 100%;
  padding: 102px 20px 80px;
  box-sizing: border-box;

  &.open {
      padding: 56px 20px 56px;
  }

  > div {
    max-width: 688px;
    margin: auto;
    position: relative;
 }

  &.cat_search {
    padding: 72px 0 0;
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
    padding-bottom: 50px;
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
    position: absolute;
    right: 24px;
    padding: 16px 8px;
    bottom: 6px;
    cursor: pointer;

    svg {
      cursor: pointer;
      fill: "#444444";
    }
  }

  @media ${device.tabletS} {
    padding: 100px 20px 55px;

    &.cat_search {
      padding: 56px 0;
    }

    .search_input {
      padding: 13px 28px;
      height: 48px;
    }

    .presearch_title {
      font-size: 28px;
      line-height: 48px;
    }

    .presearch_bx {
      > img {
        height: 48px;
        width: 48px;
      }
    }

    .search_icon {
      bottom: 0;
  }
  }
`;
export default StyledSearchArea;
