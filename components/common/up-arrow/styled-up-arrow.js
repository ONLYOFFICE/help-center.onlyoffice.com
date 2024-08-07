import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledUpArrow = styled.div`
  cursor: pointer;
  height: 32px;
  margin-left: 40px;
  margin-bottom: 112px;
  opacity: ${(props) => (props.showButton ? 1 : 0)};
  position: sticky;
  right: 0;
  top: calc(100% - 80px);
  transition: 0.3s;
  width: 32px;
  z-index: 15000;
    span {
      background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/arrow-gray.react.svg");
      background-position: center center;
      background-repeat: no-repeat;
      background-color: #f9f9f9;
      border: 1px solid #aaaaaa;
      border-radius: 3px;
      display: inline-flex;
      height: 30px;
      transform: rotate(270deg);
      width: 30px;
    }


  @media ${device.laptopM} {
    margin-left: 8px;

    span {
      height: 22px;  
      width: 22px;
    }
  }

  @media ${device.tabletS} {
    display: none;
  } 
`

export default StyledUpArrow;