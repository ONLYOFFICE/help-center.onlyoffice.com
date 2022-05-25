import styled from "styled-components";
import { device } from "../../components/utils/devices";

const StyledSearchArea = styled.div`
  background-color: #f5f5f5;
  position: relative;
  width: 100%;
  padding: 100px 0 90px;

  .search_container {
    margin: 72px auto 0;
    max-width: 682px;
  }

  .presearch_title {
    line-height: 1em;
    overflow: unset;
    white-space: nowrap;  
  }

  .search_input {
    border: 1px solid #c2c2c2;
    border-radius: 32px;
    padding: 5px 30px 5px 30px;
    white-space: normal;
    height: 64px;
    box-sizing: unset;
  }
  .search_icon {
    padding: 16px;
    z-index: 2;

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
      max-width: none;
      width: 90vw;
    }
  }
  @media (max-width: 600px) {
    .presearch_title {
      display: none;
    }
    .search_input {
      padding: 16px 40px 16px 8px;
    }

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
