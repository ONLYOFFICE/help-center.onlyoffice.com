import styled from "styled-components";

const StyledHeader = styled.header`
position: fixed;
top: 0px;
left: 0;
width: 100%;
z-index: 1000;
&.scrolled {
    border-bottom: 1px solid #d9d9d9;
  }
`;

export default StyledHeader;
