import styled from "styled-components";
import Section from "../section";
import { device } from "@components/utils/devices";

const StyledAccordionContent = styled(Section)`
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
    margin-bottom: 56px;
    letter-spacing: -0.02em;

    @media ${device.mobileL} {
      margin-bottom: 8px;
      padding: 0 0 40px;
    }
  }
`;

export default StyledAccordionContent;
