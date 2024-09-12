import styled from "styled-components";
import { device } from "@components/utils/devices";
import globalColors from "@components/utils/global-colors";

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

    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr 280px;
      grid-column-gap: 44px;
    }

    @media ${device.tablet} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding-bottom: 0;
    }
  }

  .footer-link-contact {
    font-size: 13px;
    line-height: 1.4em;
    color: ${globalColors.orangeMain};

    &:hover {
      text-decoration: underline;
    }
  }

  .contact-text {
    color: ${globalColors.textGray};
    display: flex;
    font-size: 13px;
    line-height: 1.4em;
    flex-wrap: wrap;

    @media ${device.mobile} {
      display: flex;
      flex-direction: initial;
    }
  }

  .footer-copyright-block {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${globalColors.veryLightGrey};
    gap: 16px;
    padding-top: 32px;

    > a {
      color: ${globalColors.white};
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.04em;
      line-height: 18px;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.3s;

      &:hover {
        color: ${globalColors.orangeMain};
      }

      @media ${device.laptop} {
        font-weight: 400;
        text-transform: none;
      }

      @media ${device.mobile} {
        line-height: 21px;
      }
    }

    @media ${device.laptop} {
      flex-direction: column;
      justify-content: center;
      gap: 16px;
      padding-top: 24px;
    }

    @media ${device.mobile} {
      align-items: initial;
      padding-top: 16px;
      gap: 40px;
    }
  }

  .footer-copyright {
    font-size: 13px;
    line-height: 18px;
    color: ${globalColors.veryLightGrey};

    @media ${device.mobile} {
      font-size: 12px;
      line-height: 17px;
      color: ${globalColors.textGray};
      text-align: center;
    }
  }

  .footer-item-group {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media ${device.mobile} {
      gap: 0;
    }
  }
  
  @media ${device.laptop} {
    padding: 56px 48px 32px;
  }

  @media ${device.tablet} {
    padding: 56px 40px 32px;
  }

  @media ${device.mobile} {
    padding: 16px;
  }
`;

export default StyledFooter;