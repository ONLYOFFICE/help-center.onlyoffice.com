import styled from "styled-components";

const StyledAccordionContent = styled.div`
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

    @media (max-width: 500px) {
      padding: 0 0 40px;
    }
  }
`;

export default StyledAccordionContent;
