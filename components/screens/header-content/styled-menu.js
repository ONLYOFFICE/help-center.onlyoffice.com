import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledMenuTablet = css`
  //padding: 0 48px;
  padding: 0 16px;
  height: 58px;
  grid-template-columns: 20px 1fr auto 50px;

  /* > a {
    margin: 0 auto;
  } */

  .site-logo {
    //width: 35px;
    height: 32px;
    width: 50px;
    //padding: 20px 0;
    padding: 13px 0;
    //margin-left: 10px;
    margin-left: 0px;
  }

 // @media ${device.tablet} {
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
    /* .site-logo {
      width: 186px;
    } */
  //}

  @media ${device.tabletS} {
  height: 56px;
    .site-logo {
      background-image: url('https://static-helpcenter.onlyoffice.com/images/logo/logo-mobile.react.svg');
      background-repeat: no-repeat;
      background-position: 50%;
      width: 35px;
      height: 32px;
      padding: 12px 0;
    }
  }

  //@media ${device.mobileL} {
    @media (max-width: 500px) {
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
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr auto;
  grid-template-columns: auto 1fr auto 106px;
  -ms-grid-rows: 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
  height: 72px;
  font-size: 12px;
  color: #fff;
  background-color: #333;
  transition: 0.3s;
  column-gap: 5vw;

    @media screen and (max-width: 1550px) {
      column-gap: 30px;
    }
    @media screen and (max-width: 1440px) {
      column-gap: 16px;
    }
  .menu-box {
    justify-content: end;
    @media screen and (max-width: 1550px) {
      justify-content: start;
    }
  }

  .nav-btn {
      height: 48px;
      font-size: 14px;
    @media screen and (max-width: 1440px) {
      padding: 0 16px;
    }
  }

  .nav-item-logo {
    grid-column-start: 1;
    grid-column-end: 2;
    display: unset;
  }

  .site-logo {
    background-image: url('https://static-helpcenter.onlyoffice.com/images/logo/logonew.react.svg');
    background-repeat: no-repeat;
    background-position: 0 50%;
    position: relative;
    width: 186px;
    height: 40px;
    @media screen and (max-width: 1550px) {
      width: 50px;
      margin-left: 60px;
    }
  }

  .nav-item-lng {
    grid-column-start: 4;
    grid-column-end: 5;
    display: flex;
    column-gap: 22px;
    align-items: center;
  }

  .nav-items-mobile {
    display: none;
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
