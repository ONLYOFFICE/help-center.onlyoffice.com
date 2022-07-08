import styled from "styled-components";
import Section from "../section";
import { device } from "../../../components/utils/devices";

const StyledAccordionContent = styled(Section)`
  .text-trans-accordion {
    vertical-align: bottom;
    .link-trans-acc {
      display: inline-flex;
      text-decoration: underline;
    }
  }
  .accordion__text {
    .link-trans-acc {
      display: inline-flex;
      text-decoration: underline;
    }
  }
  .titleAccordion {
    padding: 48px;
    text-align: center;

    @media ${device.mobileL} {
      padding: 0 0 40px;
    }
  }
`;

export default StyledAccordionContent;
