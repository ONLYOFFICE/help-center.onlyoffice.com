import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;
  padding: 0 132px 0 88px;

  .nav-item {
    text-decoration: none;
  }

  .close-cross {
    height: 24px;
    width: 24px;
  }

  .heading-nav-item {
    border-bottom: 1px solid transparent;
    color: #fff;
    display: block;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.33em;
    letter-spacing: 0.04em;
    padding: 27px 16px 28px;
    cursor: pointer;
    margin: 0px;
    text-transform: uppercase;
    white-space: nowrap;
    &:hover {
      color: #ff6f3d;
      border-bottom: 1px solid #ff6f3d;
    }
  }

  @media ${device.laptopM} {
    padding: 0;
  }

  @media ${device.laptopS} {
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: ${(props) => (props.stateMobile ? "280px" : "-120vw")};
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-right: 1px solid rgb(229, 229, 229);
    padding: 24px 32px 0 40px;
    margin: 0px;
    font-size: 16px;
    width: 280px;
    height: 100%;
    min-height: 100px;
    background-color: rgb(255, 255, 255);
    z-index: 1002;
    overflow: hidden auto;
    transform: translate3d(-100%, 0px, 0px);
    transition: transform 0.2s cubic-bezier(0.16, 0.68, 0.43, 0.99) 0s;

    /* padding: 0;
    background-color: #fff;
    min-height: 100px;
    height: 100vh;
    margin: 0;
    position: absolute;
    left: ${(props) => (props.stateMobile ? "0" : "-120vw")};
    top: 0;
    overflow: auto;
    text-align: center;
    font-size: 16px;
    transition: right 0.5s;
    width: 300px;
    z-index: 5;
    display: block;
    padding-top: 16px;
    box-sizing: border-box;
    overflow-x: hidden; */

    .heading-nav-item {
      align-items: center;
      border-bottom: 1px solid #cccccc;
      color: #333;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 16px 0;
      margin: 0px;

       &:after {
        display: block;
        background-image: url('/images/icons/arrow-gray.react.svg');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        width: 6px;
        height: 10px;
        content: "";
      }
      &:hover {
        color: #ff6f3d;
      border-bottom: 1px solid #cccccc;
      }
  }

    .menu_wrapper {
      display: block;
    }

    .mobile-heading-nav-item {
      border-bottom: 1px solid #f2f2f2;
      color: #ff6f3d;
      cursor: pointer;
      display: block;
      font-size: 16px;
      letter-spacing: 0.03em;
      line-height: 1.33em;
      margin: 0 auto;
      padding: 6px 22px 12px 22px;
      position: relative;
      text-transform: uppercase;
      text-align: center;

      &:before {
        background-image: url('https://static-helpcenter.onlyoffice.com/images/icons/arrow_red.react.svg');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        left: 14px;
        position: absolute;
        top: 12px;
        transform: rotate(180deg);
        transition: 0.1s linear;
      }
    }

    .phone_wrapper {
      bottom: 0;
      top: auto;
      width: 100%;
      height: 54px;
      position: absolute;
      right: 0;
      left: auto;
      margin: 0;
      padding: 0;
    }

    .no-box-inside {
      width: 100%;
    }
  }

  @media ${device.tabletS} {
    width: 267px;

    .mobile-heading-nav-item {
      font-size: 16px;
    }
  }
`;
// const StyledNav = styled.nav`
//   .menu-items-box {
//     display: flex;
//     justify-content: space-around;
//     flex-direction: row;
//     width: 100%;
//     width: 45vw;
//     @media (max-width: 1550px) {
//       width: 58vw;
//     }
//   }

//   .link_api{
//     text-decoration: none;
//   }

//   .external-link {
//     color: #333;
//     text-decoration: none;

//     :hover {
//       color: rgb(255, 111, 61);
//     }
//   }

//   .menu_wrapper {
//     flex-direction: unset;
//     justify-content: unset;
//     align-content: unset;
//     flex-wrap: unset;
//     align-items: unset;

//      @media (max-width: 1150px) {
//       @media (max-width: 1190px) {
//       &:before {
//         display: block;
//         position: absolute;
//         width: 50%;
//         content: "";
//         height: 1px;
//         background-color: #ff642e;
//         transition: width 0.2s ease-in-out;
//         left: 0;
//         top: 0;
//       }

//       &:after {
//         display: block;
//         position: absolute;
//         width: 50%;
//         content: "";
//         height: 1px;
//         background-color: #ff642e;
//         transition: width 0.2s ease-in-out;
//         left: 50%;
//         top: 0;
//       }
//     }
//   }

//    @media (max-width: 1150px) {
//     @media (max-width: 1190px) {
//     padding: 0;
//     background-color: #fff;
//     min-height: 100px;
//     height: 100%;
//     margin: 0;
//     position: fixed;
//     left: ${(props) => (props.stateMobile ? "0" : "-120vw")};
//     top: 0;
//     overflow: auto;
//     text-align: center;
//     font-size: 16px;
//     transition: right 0.5s;
//     width: 429px;
//     width: 300px;
//     padding: 16px 0 0;
//     z-index: 1000;
//     box-sizing: border-box;
//     overflow-x: hidden;
    
//     display: grid;
//     grid-template-rows: 1fr max-content;
    
//     .menu-items-box {
//       flex-direction: column;
//       align-items: stretch;
//       justify-content: flex-start;
//       width: 100%;
//     }
    
//     .menu-box {
//       display: flex;
//       flex-direction: column;
//       align-items: stretch;
//       justify-content: space-between;
//     }

//     .menu_wrapper {
//       display: block;
//       min-height: 300px;
//     }

//     .mobile-heading-nav-item {
//       cursor: pointer;
//       display: block;
//       font-size: 18px;
//       letter-spacing: 0.03em;
//       line-height: 1.33em;
//       margin: 0 auto;
//       padding: 16px 12px;
//       border-bottom: 1px solid #f2f2f2;
//       color: #ff6f3d;
//       position: relative;
//       text-transform: uppercase;
//       text-align: center;
//       width: 100%;

//       &:before {
//         background-image: url('https://static-helpcenter.onlyoffice.com/images/icons/arrow-red.react.svg');
//         background-position: 50% 50%;
//         background-repeat: no-repeat;
//         background-size: auto 100%;
//         display: block;
//         content: "";
//         width: 10px;
//         height: 10px;
//         left: 14px;
//         position: absolute;
//         top: 22px;
//         transform: rotate(180deg);
//         transition: 0.1s linear;
//       }
//     }

//   }
  
//   @media (max-width: 500px) {
//     width: 90vw;
//   }
// `;

export default StyledNav;
