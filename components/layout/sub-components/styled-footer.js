import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  border-top: 1px solid #ccc;
  //background: #333333;
  //color: #ffffff;

  @media ${device.laptop} {
    margin: 0 auto;
    position: relative;
    z-index: 0;
  }

`;

export default StyledFooter;
