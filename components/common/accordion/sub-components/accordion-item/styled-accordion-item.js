import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledAccordionItem = styled.div`
  position: relative;
  border-top: 1px solid #D2D6DB;
  padding: 19px 0 19px 40px;

  &:last-child {
    border-bottom: 1px solid #D2D6DB;
  }

  .accordion {
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    outline: none;
    align-items: center;
  }

  .accordion-icon {
    position: absolute;
    left: 12px;
    top: 20px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    transition: transform 0.2s ease;
  }

  .accordion-content {
    background-color: white;
    overflow: hidden;
    transition: max-height 0.2s ease;
  }

  .accordion-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    padding-top: 16px;

    @media ${device.tabletS} {
      font-size: 13px;
    }
  }

  .accordion-heading {
    outline: none;
    letter-spacing: -0.02em;
    cursor: pointer;

    @media ${device.tabletS} {
      font-size: 13px;
    }
  }
`;

export default StyledAccordionItem;
