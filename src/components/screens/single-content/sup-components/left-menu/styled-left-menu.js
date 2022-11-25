import styled from "styled-components";

const StyledLeftMenu = styled.div`
  position: relative;
  padding-left: 24px;
  width: 255px;
  min-width: 255px;
  z-index: 100;

  .search_wrapper {
    margin-bottom: 26px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .external-link {
    font-size: 13px;
    line-height: 18.2px;
    color: #666;
    text-decoration: none;
    margin: 2px 0;
    padding: 6px 0;
    display: block;

    :hover {
      color: rgb(255, 111, 61);
    }

    &.selected {
      color: #ff642e;
      font-weight: 700;
    }
  }

  .expanded-menu {
    display: none;
    margin-left: 12px;

    .external-link {
      line-height: 16.9px;
    }

    &.open {
      display: block;
    }
  }
  
  @media (max-width: 1190px) {
    display: none;
  }
`;

export default StyledLeftMenu;
