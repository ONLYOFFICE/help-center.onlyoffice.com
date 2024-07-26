import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSearch = styled.div`
  margin-bottom: 32px;
  position: relative;

  .group_input_container {
    height: auto;
    grid-column-gap: 10px;
    align-items: center;
  }

  .search_input {
    background-color: #f9f9f9;
    position: relative;        
    border: 1px solid #cccccc;
    border-radius: 24px;
    padding: 0 16px 0 48px;
    height: 48px;
    font-size: 14px;
    line-height: normal;
    font-family: 'Open Sans', sans-serif, Arial;
  }

  .search_icon {
    position: absolute;
    z-index: 2;
    left: 18px;
    top: 14px;
  }

  @media ${device.laptopS} {
    margin-bottom: 24px;

    .search_input {
      font-size: 13px;
      padding: 0 16px 0 40px;
    }

    .search_icon {
      left: 16px;
      top: 11px;

      > div > div > svg {
        height: 16px;
        width: 16px;
      }
    }
  }
`;

export default StyledSearch;
