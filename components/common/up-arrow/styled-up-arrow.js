import styled, { css } from "styled-components";
import StyledIconButton from "@components/common/icon-button/styled-icon-button";
import { device } from "@components/utils/devices";

const StyledUpArrow = styled(StyledIconButton)`
background-color: #9ea4b5;
background-image: url('https://static-helpcenter.teamlab.info/images/icons/arrowup.png');
background-position: center center;
background-repeat: no-repeat;
border-radius: 3px;
bottom: 80px;
left: 24px;
position: fixed;
opacity: 0.8;
z-index: 15000;
height: 40px;
transition: 1s;
width: 40px;

&:hover {
    background-color: rgba(61,74,107,0.7);
}

@media ${device.laptopM} {
    bottom: 100px;
    height: 50px;
    left: auto;
    margin: 0;
    padding: 0;
    right: 20px;
    width: 50px;
  }
`

export default StyledUpArrow;