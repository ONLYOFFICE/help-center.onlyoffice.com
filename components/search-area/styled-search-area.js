import styled from "styled-components";
import { device } from "../../components/utils/devices";

const StyledSearchArea = styled.div`
  background-color: #f5f5f5;
  position: relative;
  width: 100%;
  padding: 166px 0 101px;

  .search_container {
    position: relative;
    margin: 60px auto 0;
    max-width: 688px;
  }

  .presearch_title {
    line-height: 1.5em;
    overflow: unset;
  }

  .search_input {
    position: relative;
    border: 1px solid #c2c2c2;
    border-radius: 32px;
    padding: 5px 2px 5px 60px;
    white-space: normal;
    height: 76px;

    &::placeholder {
      font-size: 14px;
    }

    &:hover {
      border-color: #c2c2c2;
    }
  }

  .search_icon {
    position: absolute;
    top: 50%;
    left: 21px;
    display: flex;
    z-index: 2;
    transform: translateY(-50%);

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
