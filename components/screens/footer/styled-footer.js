import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledFooter = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 48px 40px;
  max-width: 1120px;
  
  .footer {
    border-bottom: 1px solid #616161;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 280px;
    grid-column-gap: 120px;
    padding-bottom: 32px;

    @media ${device.laptop} {
      grid-column-gap: 56px;
      border-bottom: none;
    }

    @media ${device.laptopS} {
      grid-template-columns: 1fr 1fr 280px;
      grid-column-gap: 44px;
    }

    @media ${device.tablet} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media ${device.tabletS} {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding-bottom: 0;
    }
  }

  .footer-link-contact {
    font-size: 13px;
    line-height: 1.4em;
    color: #ff6f3d;

    &:hover {
      text-decoration: underline;
    }
  }

  .contact-text {
    color: #808080;
    display: flex;
    font-size: 13px;
    line-height: 1.4em;
    flex-wrap: wrap;

    @media ${device.tabletS} {
      display: flex;
      flex-direction: initial;
    }
  }

  .footer-copyright-block {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #AAAAAA;
    gap: 16px;
    padding-top: 32px;

    > a {
      color: #fff;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.04em;
      line-height: 18px;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.3s;

      &:hover {
        color: #FF6F3D;
      }

      @media ${device.laptop} {
        font-weight: 400;
        text-transform: none;
      }

      @media ${device.tabletS} {
        line-height: 21px;
      }
    }

    @media ${device.laptop} {
      flex-direction: column;
      justify-content: center;
      gap: 16px;
      padding-top: 24px;
    }

    @media ${device.tabletS} {
      align-items: initial;
      padding-top: 16px;
      gap: 40px;
    }
  }

  .footer-copyright {
    font-size: 13px;
    line-height: 18px;
    color: #AAAAAA;

    @media ${device.tabletS} {
      font-size: 12px;
      line-height: 17px;
      color: #808080;
      text-align: center;
    }
  }

  .footer-item-group {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media ${device.tabletS} {
      gap: 0;
    }
  }
  
  @media ${device.laptop} {
    padding: 56px 48px 32px;
  }

  @media ${device.tablet} {
    padding: 56px 40px 32px;
  }

  @media ${device.tabletS} {
    padding: 16px;
  }
`;

export default StyledFooter;