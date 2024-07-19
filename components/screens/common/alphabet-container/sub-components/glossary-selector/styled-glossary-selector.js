import styled from "styled-components";

const StyledGlossarySelector = styled.div`
  display: flex;

  .glossary-select {
    border: none;
    padding: 1px 5px;
    font-size: 16px;
    font-weight: 600;
    color: #ff642e;
    background-color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;

    &.active {
      font-weight: 700;
      color: #ffffff;
      background-color: #ff642e;
    }

    &:disabled {
      color: #333333;
      cursor: unset;
    }

    &:not(:disabled):hover {
      background-color: #a9d4ef;
    }

    @media (max-width: 608px) {
      display: inline-block;
    }
  }

  @media (max-width: 608px) {
    display: inline-block;
  }
`

export default StyledGlossarySelector;