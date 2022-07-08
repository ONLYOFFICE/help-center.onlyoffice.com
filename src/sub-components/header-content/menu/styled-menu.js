import styled, { css } from "styled-components";
import { device } from "../../../../components/utils/devices";

const StyledMenuTablet = css`
  grid-template-columns: 20px 50px auto 170px 104px;
  height: 58px;
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

  .nav-item-links {
    border-right: 1px solid #e5e5e5;
  }

  .nav-item-logo {
    display: block;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    text-align: center;
    margin: 0 auto;
    width: 152px;
  }

  .nav-item-lng {
    display: block;
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  .nav-item-btn {
    grid-column-start: 4;
    grid-column-end: 5;
  }

  .site-logo {
    height: 58px;
    margin: 0 0 0 24px;
    width: 50px;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr 2fr auto 2fr 1fr 1fr;
    height: 106px;
    padding: 0;
    .nav-item-btn {
      grid-column-start: 1;
      grid-column-end: 8;
      width: 100%;
    }
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
  }
  }
`;

const StyledMenu = styled.div`
  align-items: center;
  border-bottom: 1px solid transparent;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr auto auto;
  grid-template-columns: auto 1fr auto auto;
  -ms-grid-rows: 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  height: auto;
  font-size: 12px;
  color: #333;
  background-color: #f5f5f5;
  transition: 0.3s;

  &.active {
    background-color: #ffffff;
    border-bottom: 1px solid #d9d9d9;
  }

  .nav-item-logo {
    grid-column-start: 1;
    grid-column-end: 2;
    margin: 0 90px 0 24px;
  }

  .nav-item-links {
    margin: 0 auto;
    height: 55px;
    .nav-item .heading-nav-item {
      color: #333;
      &:hover {
        color: #ff6f3d;
      }
    }
  }

  .site-logo {
    background: url(../images/logo/logonew.png) no-repeat 0 50%;
    margin: 0 0 0 24px;
    position: relative;
    width: 180px;
    height: 71px;
  }

  .nav-item-btn {
    font-size: 14px;
    margin-right: 3vw;
    width: 170px;
    text-overflow: unset;
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

  @media (max-width: 1550px) {
    .nav-item-logo {
      margin: 0 0 0 24px;
    }
    .site-logo {
      width: 50px;
    }
  }

  @media ${device.laptopM} {
    .nav-item-btn {
      margin-right: unset;
    }
  }

  @media (max-width: 1190px) {
    ${StyledMenuTablet};
  }
`;

export { StyledMenu };
