import styled from "styled-components";
import { device } from "@components/utils/devices";
import globalColors from "@components/utils/global-colors";

const StyledGlossarySelector = styled.div`
  background-color: ${globalColors.bgGray};
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0 64px;
  padding: 24px;


  .glossary-select {
    background-color: ${globalColors.white};
    border: none;
    border-radius: 3px;
    color: ${globalColors.grayMain};
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    outline: none;
    padding: 10px;
    text-align: center;
    text-transform: capitalize;
    min-width: 41px;

    &.active {
      color: ${globalColors.white};
      background-color: ${globalColors.orangeMain};
    }

    &:disabled {
      color: ${globalColors.veryLightGrey};
      cursor: unset;
    }

    &:not(:disabled):hover {
      background-color: ${globalColors.orangeMain};
      color: ${globalColors.white};
    }

    @media (max-width: 608px) {
      display: inline-block;
    }
  }

  @media ${device.tablet} {
    margin: 24px 0 56px;
  }
`

export default StyledGlossarySelector;