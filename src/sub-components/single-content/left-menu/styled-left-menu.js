import styled, { css } from "styled-components";

const StyledLeftMenu = styled.div`
    float: left;
    position: relative;
    width: 264px;
    z-index: 100;
    margin-left: -376px;


    .external-link {
        color: #333;
        text-decoration: none;
        :hover {
            color: rgb(255, 111, 61);
        }
  }
`

export default StyledLeftMenu;