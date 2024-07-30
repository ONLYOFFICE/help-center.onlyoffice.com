import styled from "styled-components";

const StyledAlphabetContainer = styled.div`
  .alphabet-letter {
    margin-bottom: 24px;
  }

  .alphabet-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;
  }

  .alphabet-tags {
    columns: 3 200px;
    column-gap: 0;
    margin: 2px 0;
    list-style-type: none;
  }

  .alphabet-tag {
    display: flex;
    border: none;
    margin: 2px 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.6em;
    background-color: transparent;
    color: #ff642e;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledAlphabetContainer;
