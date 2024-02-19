import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledFooterTablet = css`
  padding: 16px 17px 0;
  //padding: 0px 17px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  width: calc(100% - 34px);
  min-width: unset;

  .footer-item-follow {
    height: 100%;
    padding: 0 0 10px;
    border: none;

    .footer-copyright {
      padding: 10px 0 50px 0;
    }

    .footer-items-group {
      max-height: 100% !important;
    }

    .footer-item-heading-arrow {
      display: none;
    }

    .footer-item-heading {
      //text-align: center;
      text-align: left;
      //margin: 28px 0 28px 0;
      margin: 14px 0;
    }

    .footer-social-links {
      justify-content: space-between;
    }
  }

  .footer-item-group {
    margin-top: 0;

    &.last {
      .footer-item-group {
        margin-top: 19px;

        .footer-item-heading {
          margin: 0 0 12px;
          text-align: left;
        }
      }
  
      .footer-item-follow {
        padding: 3px 0;
        margin: 6px 0 9px;
      }
    }

    &:nth-child(4) {
      align-items: start;
      flex-direction: column;
      justify-content: start;
      gap: 0;

      .footer-item-contribution, .footer-item-contacts {
        width: 100%;
      }
    }
  }

  .footer-item-contacts {
    padding: 17px 0;
  }

  .contact-text {
    display: flex;
    flex-direction: initial;
  }

  .footer-copyright-block {
    display: flex;
    justify-content: center;
    margin: 0 -17px;
    padding: 40px 0 16px;
    //justify-content: start;
    //padding: 20px 0 40px;
  }

  .footer-copyright {
    font-size: 12px;
    line-height: 1.6em;
    //font-size: 13px;
    color: #aaa;
  }
`;

const StyledFooter = styled.div`
  width: calc(100% - 10vw);
  margin: 0 auto;
  position: relative;
  max-width: 996px;
  min-width: 769px;
  padding-top: 56px;
  padding: 56px 0 78px;
  height: auto;
  display: grid;
  grid-template-columns: 160px 160px 224px 1fr;
  grid-column-gap: 56px;

  .footer-item-group {
    position: relative;

    &.last {
      grid-column: span 4;

      .footer-item-group {
        margin: 0 auto;
        max-width: 774px;
      }

      .footer-item-heading {
        padding: 0 0 16px;
        text-align: center;
      }
    }
  }

  .footer-social-links {
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 100%;
    align-items: baseline;
    gap: 16px 32px;

    .footer-social {
      list-style-type: none;
      width: 24px;
      height: 24px;
      margin: 0;
      vertical-align: middle;
    }
  }

  .footer-item-contacts {
    padding: 0 0 32px;
  }

  .footer-link-contact {
    font-size: 13px;
    line-height: 1.4em;
  }

  .contact-text {
    color: #808080;
    display: flex;
    font-size: 13px;
    margin: 0 0 7px;
    line-height: 1.4em;
    flex-wrap: wrap;
  }

  .footer-copyright-block {
    display: flex;
    justify-content: center;
    color: #AAAAAA;
  }

  .footer-copyright {
    font-size: 13px;
    line-height: 18px;
    color: #AAAAAA;
  }

  @media ${device.laptopM} {
    .contact-text {
      display: flex;
      flex-direction: column;
    }

    .footer-copyright-block {
      padding: 0px 0 0 20px;
    }
  }

  @media ${device.laptop} {
    width: auto;
    max-width: 928px;
    padding: 56px 35px 50px;
    grid-template-columns: 25vw 25vw 25vw;
    vertical-align: top;
    min-width: unset;
    margin-bottom: 0;
    gap: 32px 42px;

    .footer-item-group {
      &.last {
        grid-column: span 3;
      }

      &:nth-child(4) {
        align-items: start;
        grid-column: span 3;
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 42px;

        .footer-item-contribution, .footer-item-contacts {
          width: 25vw;
        }
      }
    }
  }

  @media ${device.tabletS} {
  //@media (max-width: 812px) {
    ${StyledFooterTablet};
  }
`;

export default StyledFooter;
