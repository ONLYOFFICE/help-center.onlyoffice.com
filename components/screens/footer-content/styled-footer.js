import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledFooterTablet = css`
  padding: 16px 17px 0;
  
  margin: 0;
  width: calc(100% - 34px);

  .footer {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .footer-item-contacts {
    padding: 16px 0;
  } 

  .contact-text {
    display: flex;
    flex-direction: initial;
  }

  .footer-copyright-block {
    padding: 16px 0;
    gap: 40px;
  }

  .footer-copyright {
    font-size: 12px;
    line-height: 1.6em;
    color: #808080;
  }
`;

const StyledFooter = styled.div`
    margin: 0 auto;
    max-width: 1120px;
    padding: 56px 0 32px;
    position: relative;
    width: 100%;
  
  .footer {
    display: grid;
    grid-template-columns: 160px 160px 160px 280px;
    grid-column-gap: 120px;
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
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #AAAAAA;
    gap: 16px;
    > a {
      color: #fff;
      text-decoration: none;
    }
  }

  .footer-copyright {
    font-size: 13px;
    line-height: 18px;
    color: #AAAAAA;
  }

  @media ${device.laptopM} {
    max-width: 912px;
    padding: 56px 8px 32px;
    .footer {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 56px;
    }
  }
  
  @media ${device.laptop} {
    max-width: 672px;
    padding: 56px 8px 32px;
    .footer {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 56px;
    }
  }

  @media ${device.tablet} {
    max-width: 552px;
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
