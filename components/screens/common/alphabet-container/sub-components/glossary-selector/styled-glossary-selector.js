import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledGlossarySelector = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0 64px;
  padding: 24px;


  .glossary-select {
    background-color: #ffffff;
    border: none;
    border-radius: 3px;
    color: #444444;
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
      color: #ffffff;
      background-color: #ff6f3d;
    }

    &:disabled {
      color: #aaaaaa;
      cursor: unset;
    }

    &:not(:disabled):hover {
      background-color: #ff6f3d;
      color: #ffffff;
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