import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledFooterTablet = css`
  padding: 32px 16px 0;
  margin: 0;
  max-width: calc(100vw - 32px);

  .footer {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-bottom: 0;
  }

  .footer-item-contacts {
    padding: 16px 0;
  } 

  .contact-text {
    display: flex;
    flex-direction: initial;
  }

  .footer-copyright-block {
    align-items: initial;
    padding: 16px 0;
    gap: 40px;
  }

  .footer-copyright {
    font-size: 12px;
    line-height: 1.6em;
    color: #808080;
    text-align: center;
  }

  .footer-item-group {
    gap: 0;
  }
`;

const StyledFooter = styled.div`
  margin: 0 auto;
  max-width: 1696px;
  padding: 72px 0 70px;
  position: relative;
  width: 100%;
  
  .footer {
    border-bottom: 1px solid #616161;
    display: grid;
    grid-template-columns: 160px 160px 160px 280px;
    grid-column-gap: 120px;
    justify-content: start;
    padding-bottom: 52px;
  }

  .footer-item-contacts {
    padding: 0 0 32px;
  }

  .footer-link-contact {
    font-size: 13px;
    line-height: 1.4em;
    color: #ff6f3d;
  }

  .contact-text {
    color: #808080;
    display: flex;
    font-size: 13px;
    line-height: 1.4em;
    flex-wrap: wrap;
  }

  .footer-copyright-block {
    align-items: center;
    display: flex;
    //flex-direction: column;
    flex-direction: row;
    //justify-content: center;
    justify-content: space-between;
    color: #AAAAAA;
    gap: 16px;
    padding: 32px 0 0;

    > a {
      color: #fff;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.04em;
      line-height: 18px;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  .footer-copyright {
    font-size: 13px;
    line-height: 18px;
    color: #AAAAAA;
  }

  .footer-item-group {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media ${device.desktop} {
    max-width: calc(100vw - 224px);
    padding: 48px 0 56px;

    .footer {
      padding-bottom: 32px;
    }
  }

  @media ${device.laptopL} {
    max-width: 1120px;
    padding: 48px 0;
  }

  @media ${device.laptopM} {
    max-width: calc(100vw - 96px);
    padding: 48px 8px;

    .footer {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 56px;
    }
  }
  
  @media ${device.laptop} {
    padding: 56px 8px 32px;

    .footer {
      border-bottom: none;
    }
    .footer-copyright-block {
      flex-direction: column;
      justify-content: center;
      gap: 16px;
      padding: 24px 0 0;

      > a {
        font-weight: 400;
        text-transform: none;
      }
    }
  }

  @media ${device.tablet} {
    max-width: calc(100vw - 80px);

    .footer {
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 44px;
    }
  }

  @media ${device.tabletS} {
    ${StyledFooterTablet};
  }
`;

export default StyledFooter;