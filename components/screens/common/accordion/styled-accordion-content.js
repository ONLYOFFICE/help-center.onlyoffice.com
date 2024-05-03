import styled from "styled-components";
import Section from "../section";
import { device } from "@components/utils/devices";

const StyledAccordionContent = styled(Section)`
  padding: 0;
  .text-trans-accordion {
    display: initial;
    vertical-align: bottom;
    .link-trans-acc {
      display: inline-flex;
      text-decoration: underline;
    }
  }
  .accordion__text {
    .link-trans-acc {
      display: initial;
      text-decoration: underline;
    }
  }
  .titleAccordion {
    padding: 0 0 56px;
    letter-spacing: -0.02em;

    @media ${device.tablet} {
      padding: 0 0 48px;
    }

    @media ${device.tabletS} {
      font-size: 20px;
      padding: 0 0 32px;
    }
  }
`;

export default StyledAccordionContent;
