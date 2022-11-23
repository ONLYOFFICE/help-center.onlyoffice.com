import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledFooterTablet = css`
  padding: 0 17px;
  margin: 0;

  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;

  .footer-social-links {
    justify-content: space-between;
    width: 100%;
  }

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
      text-align: center;
      margin: 28px 0 28px 0;
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
    padding: 20px 0 21px;
    background-color: #f9f9f9;
  }

  .footer-copyright {
    font-size: 13px;
    line-height: 13px;
    color: #aaa;
  }
`;

const StyledFooter = styled.div`
  width: calc(100% - 10vw);
  margin: 0 auto 20px;
  position: relative;
  max-width: 1120px;
  min-width: 769px;
  padding-top: 56px;
  height: auto;
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 0.8fr 1fr;
  grid-column-gap: 32px;

  .footer-item-group {
    position: relative;
    margin-top: 19px;

    &.last {
      .footer-item-group {
        margin-top: 0;
      }

      .footer-item-follow {
        padding: 0 0 6px;
      }
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
    display: flex;
    font-size: 13px;
    margin: 0 0 7px;
    line-height: 1.4em;
  }

  .footer-social-links {
    display: flex;
    flex-wrap: wrap;
    margin-left: 14px;

    .footer-social {
      display: inline-block;
      margin: 0 24px 18px 0;
      list-style-type: none;
      width: 26px;
      height: 24px;
      vertical-align: middle;
    }
  }

  .footer-copyright-block {
    margin: 0 0 7px;
  }

  .footer-copyright {
    font-size: 13px;
    line-height: 1.4em;
  }

  @media (max-width: 1100px) {
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
    vertical-align: top;
    min-width: unset;
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    ${StyledFooterTablet};
  }

  @media (max-width: 500px) {
    .footer-social-links {
      justify-content: center;
    }
  }
`;

export default StyledFooter;
