import styled from "styled-components";
import { device } from "@components/utils/devices";

// const StyledNavMenu = styled.div`
//   .heading-nav-item {
//     display: block;
//     font-size: 12px;
//     font-weight: 600;
//     line-height: 1.33em;
//     letter-spacing: 0.04em;
//     padding: 28px 0px;
//     cursor: pointer;
//     margin: 0px;
//     text-transform: uppercase;
//   }

//   @media screen and (max-width: 768px) {
//     .heading-nav-item {
//       cursor: pointer;
//       font-size: 16px;
//       font-weight: 600;
//       height: fit-content;
//       line-height: 16px;
//       padding: 15px 25px 15px 40px;
//       margin: 0px;
//       position: relative;

//       &:before {
//         display: block;
//         content: "";
//         width: 10px;
//         height: 10px;
//         background-image: url(${arrow_gray});
//         background-position: 50% 50%;
//         background-repeat: no-repeat;
//         background-size: auto 100%;
//         position: absolute;
//         left: 17px;
//         top: 17px;
//         transition: 0.1s linear;
//       }
//     }
//   }
//   @media ${device.tabletS} {
//     .heading-nav-item {
//       font-size: 16px;
//     }
//   }
// `;

// const StyledMenuItemsWrapper = styled.div`
//   width: auto;
//   height: auto;
//   margin: auto;
//   background-color: white;
//   border-bottom-left-radius: 9px;
//   border-bottom-right-radius: 9px;
//   z-index: 5000;
//   position: absolute;
//   display: flex;
//   box-shadow: 0 20px 50px rgba(85, 85, 85, 0.15);

//   @media ${device.laptopM} {
//     padding: 0;
//     background-color: #fff;
//     max-height: calc(100% - 54px);
//     height: 100vh;
//     margin: 0;
//     position: absolute;
//     left: ${(props) => (props.isOpen ? "0" : "-120vw")};
//     top: 0;
//     overflow: auto;
//     text-align: center;
//     font-size: 16px;
//     transition: right 0.5s;
//     width: 100%;
//     z-index: 5;
//     display: block;
//     padding-top: 8px;
//     box-sizing: border-box;
//     box-shadow: unset;
//     overflow-x: hidden;
//   }
// `;

const StyledNavMenu = styled.div`
    &#navitem_features {
      position: relative;
      > .menu-items-wrapper {
        left: -300px;
      }
    }
  .heading-nav-item {
    border-bottom: 1px solid transparent;
    display: block;
    font-size: 12px;
    font-weight: 600;
    line-height: 29px;
    //letter-spacing: 0.08em;
    letter-spacing: 0.01em;
    //padding: 21px 20px 22px;
    padding: 21px 0;
    cursor: pointer;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    
    &:hover {
      color: #333;
    }
  }
    &.active .heading-nav-item {
      color: #ff6f3d;
      border-bottom: 1px solid #ff6f3d;
    }

    &:hover .heading-nav-item {
      color: #333;
      border-bottom: 1px solid #ff6f3d;
    }

  .dropdown-item {
    border: 0;
    color: #444;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    line-height: 1.4em;
    text-decoration: none;
    //white-space: nowrap;
    position: relative;
    text-transform: uppercase;
    padding: 8px 25px;

    &.not_bold {
      text-transform: unset;
      font-weight: 400;
      padding: 8px 40px;
    }

    &:hover {
      color: #ff6f3d;
    }
  }

  .outer-box {
    align-items: start;
    display: flex;
    flex-direction: column;
    padding: 32px 0;

    &.with-border {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: calc(100% - 64px);
        background-color: #cccccc;
        transform: translateY(-50%);
        opacity: 0.4;
      }
    }
  }

  .outer-box-wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }

  .link-wrapper {
    max-width: 308px;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #666666;
    text-align: left;
    gap: 8px;
    min-width: 252px;
  }

  //@media (max-width: 1150px) {
    @media (max-width: 1190px) {
      &#navitem_features {
      position: unset;
      > .menu-items-wrapper {
        left: 0px;
      }
    }
    .heading-nav-item {
      cursor: pointer;
      //font-size: 18px;
      //font-weight: 700;
      //line-height: 1.33em;
      //padding: 12px 36px 12px 18px;
      border-color: #f2f2f2;
      padding: 15px 25px 15px 40px;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 0.03em;
      margin: 0px;
      position: relative;
      text-align: left;

      &:before {
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        background-image: url('https://static-oforms.onlyoffice.com/icons/arrow-gray.react.svg');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        position: absolute;
        //right: 14px;
        left: 17px;
        top: 17px;
        //top: 15px;
        transition: 0.1s linear;
      }
    }

    .menu-items-wrapper {
      height: 100%;
      display: grid;
      grid-template-rows: max-content 1fr;
      grid-template-columns: 1fr;
    }

    .outer-box {
      //padding: 24px;
      padding: 16px 0;

      &:first-child {
        //padding-top: 32px;
      }

      &:last-child {
        padding-bottom: 32px;
      }

      &.with-border {
        &:after {
          top: 100%;
          right: 32px;
          height: 1px;
          width: calc(100% - 48px);
          background-color: #cccccc;
          transform: translateY(-50%);
        }
      }

      &.without-border-on-mobile {
        &:after {
          content: none;
        }
      }

      &.without-pb-on-mobile {
        padding-bottom: 0;
      }
    }

    .link-wrapper {
      max-width: 380px;
    }
  }

  @media (max-width: 500px) {
    .menu-items-wrapper {
      //width: 90vw;
    }

    .outer-box {
      .dropdown-item {
        max-width: calc(90vw - 48px);
        white-space: break-spaces;

        &:before {
          flex-shrink: 0;
        }
      }
    }
  }
`;

const StyledMenuItemsWrapper = styled.div`
  width: auto;
  height: auto;
  margin: auto;
  background-color: white;
  z-index: 5000;
  position: absolute;
  display: flex;
  box-shadow: 0 20px 50px rgba(85, 85, 85, 0.15);
    //@media (max-width: 1150px) {
      @media (max-width: 1190px) {
    padding: 0;
    margin: 0;
    position: absolute;
    left: ${(props) => (props.isOpen ? "0" : "-120vw")};
    top: 0;
    overflow: auto;
    text-align: center;
    font-size: 16px;
    transition: right 0.5s;
    width: 100%;
    z-index: 5;
    display: block;
    box-sizing: border-box;
    box-shadow: unset;
    overflow-x: hidden;
  }
`;


export { StyledNavMenu, StyledMenuItemsWrapper };
