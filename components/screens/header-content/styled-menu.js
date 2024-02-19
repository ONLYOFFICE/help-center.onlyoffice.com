import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledMenuTablet = css`
  display: grid;
  padding: 0 16px;
  height: 72px;
  grid-template-columns: 20px auto 50px;
  justify-content: space-between;

  .site-logo {
    width: 186px;
  }

    .nav-items-mobile {
      display: block;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 1;
      padding-top: 6px;
      div {
        svg {
          rect {
            fill: ${(props) => (!props.template ? "#666" : "white")};
          }
        }
      }
      cursor: pointer;
    }

  @media ${device.tabletS} {
  height: 56px;
  }

  @media ${device.mobileL} {
      height: fit-content;
      padding: 0;
      grid-template-rows: 48px 58px;
      grid-template-columns: 50px 1fr 50px;
    .link {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 1; 
      width: 100%;
      > button {
        height: 48px;
        width: 100%;
      }
  }
  a,
  .language-selector,
  .nav-items-mobile {
    grid-row-start: 2;
    grid-row-end: 2; 
  }
  .nav-items-mobile {
    padding-left: 16px;
  }
    //grid-template-columns: 1fr 1fr 2fr auto 2fr 1fr 1fr;
    //height: 56px;
    //padding: 0;
    /* .nav-item-lng {
      grid-column-start: 6;
      grid-column-end: 7;
      grid-row-start: 2;
      grid-row-end: 2;
    }
    a {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 2;
    }
    .nav-items-mobile {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 2;
    } */

    .site-logo {
      margin: 0 auto;
      //background: url(../images/logo/logo-mobile.react.svg) no-repeat 20px 50%;
    }
  }
`;

const StyledMenu = styled.div`
  align-items: center;
  border-bottom: 1px solid #cccccc;
  display: flex;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
  height: 72px;
  font-size: 13px;
  color: #fff;
  background-color: #333;
  transition: 0.3s;

  > a {
    height: 40px;
  }

  .site-logo {
    background-image: url('https://static-helpcenter.onlyoffice.com/images/logo/logowhite.react.svg');
    background-repeat: no-repeat;
    background-position: 0 50%;
    position: relative;
    width: 186px;
    height: 40px;
    @media ${device.laptopM} {
      width: 35px;
    }
  }

  .nav-item-lng {
    display: flex;
    column-gap: 22px;
    align-items: center;
  }

  @media ${device.laptopL} {
    padding: 0 2vw;
  }

  @media ${device.laptopS} {
    ${StyledMenuTablet};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export { StyledMenu, Overlay };
