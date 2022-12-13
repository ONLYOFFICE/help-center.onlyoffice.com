import styled from "styled-components";
import Section from "@components/screens/common/section";
import { device } from "@components/utils/devices";

const Styled404 = styled(Section)`
  padding: 107px 0 177px;

  .section-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .page-error-404-image {
    max-height: 412px;
    margin: 0 auto;
    width: 100%;
    filter: grayscale(100%);
  }

  .page-error-404-container {
    max-width: 530px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .page-error-404-heading {
    font-weight: bold;
    font-size: 40px;
    line-height: 53px;
    text-align: center;
    letter-spacing: -0.02em;
  }

  .page-error-404-description {
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #555555;
  }

  @media ${device.mobileL} {
    padding: 100px 0;
  }
`;

export default Styled404;
