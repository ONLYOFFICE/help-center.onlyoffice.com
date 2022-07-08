import styled, { css } from "styled-components";

const StyledLeftMenu = styled.div`
    float: left;
    position: relative;
    width: 264px;
    z-index: 100;
    margin-left: -314px;


    .external-link {
        font-size: 13px;
        color: #333;
        text-decoration: none;
        margin: 2px 0;
        padding: 6px 0;
        display: block;
        :hover {
            color: rgb(255, 111, 61);
        }
  }
`

export default StyledLeftMenu;