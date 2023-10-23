import styled from "styled-components";
import arrow_red from "@public/images/icons/arrow-red.svg";
import { device } from "@components/utils/devices";

// const StyledNav = styled.nav`
//   display: flex;
//   justify-content: center;
//   gap: 40px;
//   margin: 0 auto;
//   padding: 0 132px 0 88px;

//   .external-link {
//     color: #fff;
//     text-decoration: none;
//     :hover {
//       color: rgb(255, 111, 61);
//     }
//   }
//   @media ${device.laptop} {
//     gap: 3vw;
//     padding: 0 3vw 0 2vw;
//   }

//   @media ${device.tablet} {
//     padding: 0;
//     background-color: #fff;
//     min-height: 100px;
//     height: 100vh;
//     margin: 0;
//     position: absolute;
//     left: ${(props) => (props.stateMobile ? "0" : "-120vw")};
//     top: 0;
//     overflow: auto;
//     text-align: center;
//     font-size: 16px;
//     transition: right 0.5s;
//     width: 300px;
//     z-index: 5;
//     display: block;
//     padding-top: 16px;
//     box-sizing: border-box;
//     overflow-x: hidden;

//     .menu_wrapper {
//       display: block;
//     }

//     .mobile-heading-nav-item {
//       border-bottom: 1px solid #f2f2f2;
//       color: #ff6f3d;
//       cursor: pointer;
//       display: block;
//       font-size: 16px;
//       letter-spacing: 0.03em;
//       line-height: 1.33em;
//       margin: 0 auto;
//       padding: 6px 22px 12px 22px;
//       position: relative;
//       text-transform: uppercase;
//       text-align: center;

//       &:before {
//         background-image: url(${arrow_red});
//         background-position: 50% 50%;
//         background-repeat: no-repeat;
//         background-size: auto 100%;
//         display: block;
//         content: "";
//         width: 10px;
//         height: 10px;
//         left: 14px;
//         position: absolute;
//         top: 12px;
//         transform: rotate(180deg);
//         transition: 0.1s linear;
//       }
//     }

//     .phone_wrapper {
//       bottom: 0;
//       top: auto;
//       width: 100%;
//       height: 54px;
//       position: absolute;
//       right: 0;
//       left: auto;
//       margin: 0;
//       padding: 0;
//     }

//     .no-box-inside {
//       width: 100%;
//     }
//   }

//   @media ${device.tabletS} {
//     width: 267px;

//     .mobile-heading-nav-item {
//       font-size: 16px;
//     }
//   }
// `;
const StyledNav = styled.nav`
  .menu-items-box {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    //width: 100%;
    width: 45vw;
    @media (max-width: 1550px) {
      width: 58vw;
    }
  }

  .link_api{
    text-decoration: none;
  }

  .external-link {
    color: #333;
    text-decoration: none;

    :hover {
      color: rgb(255, 111, 61);
    }
  }

  .menu_wrapper {
    flex-direction: unset;
    justify-content: unset;
    align-content: unset;
    flex-wrap: unset;
    align-items: unset;

     //@media (max-width: 1150px) {
      @media (max-width: 1190px) {
      &:before {
        display: block;
        position: absolute;
        width: 50%;
        content: "";
        height: 1px;
        background-color: #ff642e;
        transition: width 0.2s ease-in-out;
        left: 0;
        top: 0;
      }

      &:after {
        display: block;
        position: absolute;
        width: 50%;
        content: "";
        height: 1px;
        background-color: #ff642e;
        transition: width 0.2s ease-in-out;
        left: 50%;
        top: 0;
      }
    }
  }

   //@media (max-width: 1150px) {
    @media (max-width: 1190px) {
    padding: 0;
    background-color: #fff;
    min-height: 100px;
    height: 100%;
    margin: 0;
    position: fixed;
    left: ${(props) => (props.stateMobile ? "0" : "-120vw")};
    top: 0;
    overflow: auto;
    text-align: center;
    font-size: 16px;
    transition: right 0.5s;
    //width: 429px;
    width: 300px;
    padding: 16px 0 0;
    z-index: 1000;
    box-sizing: border-box;
    overflow-x: hidden;
    
    display: grid;
    grid-template-rows: 1fr max-content;
    
    .menu-items-box {
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      width: 100%;
    }
    
    .menu-box {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
    }

    .menu_wrapper {
      display: block;
      min-height: 300px;
    }

    .mobile-heading-nav-item {
      cursor: pointer;
      display: block;
      font-size: 18px;
      letter-spacing: 0.03em;
      line-height: 1.33em;
      margin: 0 auto;
      padding: 16px 12px;
      border-bottom: 1px solid #f2f2f2;
      color: #ff6f3d;
      position: relative;
      text-transform: uppercase;
      text-align: center;
      width: 100%;

      &:before {
        background-image: url('https://static-oforms.onlyoffice.com/icons/arrow-red.svg');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        left: 14px;
        position: absolute;
        top: 22px;
        transform: rotate(180deg);
        transition: 0.1s linear;
      }
    }

  }
  
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

export default StyledNav;
