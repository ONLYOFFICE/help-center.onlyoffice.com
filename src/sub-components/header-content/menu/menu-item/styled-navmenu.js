import styled from "styled-components";
import arrow_gray from "../../../../../static/images/icons/arrow-gray.svg";
import { device } from "../../../../../components/utils/devices";

const StyledNavMenu = styled.div`
  .dropdown-item {
    display: block;
    border: 0;
    color: #333;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    line-height: 1.4em;
    padding: 8px 25px;
    text-decoration: none;
    white-space: nowrap;
    position: relative;
    text-transform: uppercase;
  }

  .heading-nav-item {
    display: block;
    font-size: 12px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0.04em;
    padding: 21px 20px 22px;
    cursor: pointer;
    margin: 0px;
    text-transform: uppercase;
  }

  @media (max-width: 1155px) {
    .heading-nav-item {
      padding: 20px 10px;
    }
  }

  .nav_2nd_menu_link {
    display: block;
    text-transform: none;
    background: none;
    border: 0;
    color: #444;
    font-size: 14px;
    cursor: pointer;
    line-height: 1.6em;
    margin: 0;
    padding: 8px 40px;
    text-decoration: none;
  }

  .nav_item_nowrap_link {
    display: inline-flex;
    &:first-child {
      padding: 4px 8px 4px 72px;
    }
    &:last-child {
      padding: 4px 48px 4px 8px;
      white-space: nowrap;
    }
  }

  .outer-box {
    padding: 27px 0;
    &:first-child {
      border-bottom-left-radius: 9px;
    }
    &.with_border {
      border-right: 1px solid #f5f5f5;
    }

    .inner-box {
      padding: 10px 0;

      .nowrap {
        flex-direction: row;

        .slash_text {
          color: #333333;
          margin: 0;
          line-height: 21px;
          padding: 4px 0;
        }
      }
    }
  }

  @media screen and (max-width: 1050px) {
    .dropdown-item {
      line-height: 1.5em;
      margin: 0 0 16px;
      padding: 7px 16px;
      &:before {
        display: none;
      }
    }

    .mobile_no_link {
      margin: 0 16px;
    }

    .nav_2nd_menu_link {
      font-size: 16px;
      line-height: 1.6em;
      padding: 6px 32px;
    }

    .nav_item_nowrap_link {
      font-size: 16px;
      line-height: 1.6em;
      &:first-child {
        padding: 6px 8px 6px 32px;
      }

      &:last-child {
        padding: 6px 48px 6px 8px;
      }
    }

    .outer-box {
      border: none !important;
      border-radius: unset !important;
      padding: 0;
      .inner-box {
        padding: 2px 0 11px;

        .nowrap .slash_text {
          line-height: 1.6em;
          padding: 6px 0;
        }
      }

      &:last-child {
        background-color: unset;
      }

      .pricing-box {
        width: 100%;
      }
    }

    .heading-nav-item {
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.33em;
      padding: 12px 36px 12px 18px;
      margin: 0px;
      position: relative;

      &:before {
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        background-image: url(${arrow_gray});
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        position: absolute;
        right: 14px;
        top: 15px;
        transition: 0.1s linear;
      }
    }

    #compare_div,
    #for_developers_div,
    #latest_news_div,
    #reseller_div,
    #oforms_div,
    #latest_events_div {
      display: none;
    }
  }
  @media ${device.tabletS} {
    .dropdown-item {
      white-space: unset;
    }
    .heading-nav-item {
      font-size: 16px;
    }
    .nav_item_nowrap_link:last-child {
      padding: 6px 8px 6px 32px;
    }
    .outer-box {
      .inner-box {
        .nowrap {
          flex-direction: column;
          .slash_text {
            display: none;
          }
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
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  z-index: 5000;
  position: absolute;
  display: flex;
  box-shadow: 0 20px 50px rgba(85, 85, 85, 0.15);

  @media (max-width: 1050px) {
    padding: 0;
    background-color: #fff;
    max-height: calc(100% - 54px);
    height: 100vh;
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
    padding-top: 8px;
    box-sizing: border-box;
    box-shadow: unset;
    overflow-x: hidden;
  }
`;

export { StyledNavMenu, StyledMenuItemsWrapper };
