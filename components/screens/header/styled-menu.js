import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledMenuTablet = css`
  display: grid;
  padding: 0 40px;
  grid-template-columns: 20px auto 40px;
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
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.27);
    transition: opacity 0.3s, visibility 0.3s;
    z-index: 1001;
  }

  &.is-open {
      .nav-items-mobile {
        transform: translate3d(300px, 0, 0) translateX(-50%);
      }
  
      .nav-item-logo, .nav-item-lng {
        transform: translate3d(380px, 0, 0) translateX(-50%);
      }
  
      .overlay {
        opacity: 1;
        visibility: visible;
      }
  }

  @media ${device.tabletS} {
    height: 56px;
    grid-template-columns: ${(props) => (props.isMain ? "30px 1fr 36px" : "24px 30px 1fr 36px")};
    gap: 32px;
    padding: 0 16px;

    .site-logo {
      background-image: url("https://static-helpcenter.onlyoffice.com/images/logo/logo-mobile.react.svg");
      width: 30px;
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
    background-image: url("https://static-helpcenter.onlyoffice.com/images/logo/logowhite.react.svg");
    background-repeat: no-repeat;
    background-position: 0 50%;
    position: relative;
    width: 186px;
    height: 40px;
    @media ${device.laptopM} {
      width: 35px;
    }
  }

  @media ${device.laptopL} {
    padding: 0 2vw;
  }

  @media ${device.laptopS} {
    ${StyledMenuTablet};
  }
`;

export default StyledMenu;
