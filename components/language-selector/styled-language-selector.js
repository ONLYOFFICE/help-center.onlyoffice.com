import styled from "styled-components";

export default styled.div`
  width: 48px;
  display: grid;
  grid-template-columns: 18px 6px;
  grid-column-gap: 2px;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
    margin: 3px auto;
    -webkit-tap-highlight-color: transparent;
  }
  .arrow-image {
    margin-top: -1px;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  .title-lng {
    display: inline-block;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    color: #333;
    padding-left: 8px;
    vertical-align: middle;
    text-transform: uppercase;
    width: fit-content;
  }
`;

const StyledPanelView = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: max-content;
  max-width: 106px;
  background-color: white;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
  z-index: 100;
  padding: 6px 12px;
  top: 20px;
  right: 10px;
`;

const StyledItem = styled.div`
  outline: none;
  -webkit-tap-highlight-color: transparent;
  .language-item-image {
    height: 18px;
    margin-top: -1px;
  }
  .language-item-link {
    align-items: center;
    display: flex;
    height: 30px;
    gap: 0 10px;
    padding: 10px 0 0;
    width: 106px;
    text-decoration: none;
  }

  .language-item-title {
    font-size: 13px;
  }
  .title-lng:hover {
    color: #ff865c;
    cursor: pointer;
  }
`;

export { StyledItem, StyledPanelView };
