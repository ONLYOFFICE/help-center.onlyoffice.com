import styled from "styled-components";

const StyledAlphabetContainer = styled.div`
  .glossContent {
    display: block;
  }

  .glossLetter {
    display: block;
    padding-bottom: 24px;
  }

  .glossTagsArea {
    columns: 3 200px;
    column-gap: 0;
    margin: 2px 0;
    padding: 0;
  }

  .float-enter {
    opacity: 0;
  }
  .float-enter-active {
    opacity: 1;
    transition: opacity .1s fadein;
  }
  .float-exit {
    opacity: 1;
  }
  .float-exit-active {
    opacity: 0;
    transition: opacity .1s fadeout;
  }

  @media (max-width: 608px) {
    padding-top: ${(props) => (props.isTagPage ? "40px" : "0")};
  }
`;

export default StyledAlphabetContainer;
