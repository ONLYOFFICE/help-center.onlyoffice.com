import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledMenuTablet = css`
  padding: 0 48px;

  .site-logo {
    background: url(../images/logo/logo-mobile.svg) no-repeat 50%;
    width: 35px;
    height: 32px;
    padding: 20px 0;
  }
  @media ${device.tablet} {
    .nav-items-mobile {
      display: block;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 1;
      div {
        svg {
          rect {
            fill: ${(props) => (props.template ? "black" : "white")};
          }
        }
      }
      cursor: pointer;
    }

  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr 2fr auto 2fr 1fr 1fr;
    height: 106px;
    padding: 0;
    .nav-item-lng {
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
    }

    .site-logo {
      margin: 0 auto;
      background: url(../images/logo/logo-mobile.svg) no-repeat 20px 50%;
    }
  }
`;

const StyledMenu = styled.div`
  align-items: center;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr auto;
  grid-template-columns: auto 1fr auto;
  -ms-grid-rows: 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  padding: 0 160px;
  box-sizing: border-box;
  height: 72px;
  font-size: 12px;
  color: #fff;
  background-color: #333;
  transition: 0.3s;

  .nav-item-logo {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .nav-item-links {
    .nav-item .heading-nav-item {
      color: #fff;
      &:hover {
        color: #ff6f3d;
      }
    }
  }

  .site-logo {
    background: url(../images/logo/logowhite.svg) no-repeat 0 50%;
    position: relative;
    width: 186px;
    height: 34px;
    padding: 19px 0;
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
  @media (max-width: 1439px) {
    padding: 0 2vw;
  }

  @media (max-width: 1190px) {
    ${StyledMenuTablet};
  }
`;

export { StyledMenu };
