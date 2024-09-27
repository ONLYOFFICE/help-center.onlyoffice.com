import styled from "styled-components";
import { device } from "@components/utils/devices";
import globalColors from "@components/utils/global-colors";

const StyledAccordionItem = styled.div`
  position: relative;
  border-top: 1px solid #E5E5E5;
  padding: ${(props) => (props.isMain ? "16px 0" : "32px 0")};
  @media ${device.mobile} {
    padding: ${(props) => (props.isMain ? "16px 0" : "24px 0")};
    }

  &:last-child {
    border-bottom: 1px solid #E5E5E5;
  }

  .accordion {
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    outline: none;
    align-items: center;
    gap: ${(props) => (props.isMain ? "16px" : "10px")};
  }

  .accordion-icon {
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
    transition: transform 0.2s ease;
    width: 24px;
    min-width: 24px;
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
    padding-left: ${(props) => (props.isMain ? "40px" : "34px")};

    > ul {
      padding-left: 16px;
    }

    a {
      color: ${globalColors.orangeMain};

      &:hover {
        text-decoration: none;
      }
    }

    @media ${device.mobile} {
      font-size: 13px;
    }
  }

  .accordion-heading {
    outline: none;
    letter-spacing: -0.02em;
    cursor: pointer;

    @media ${device.mobile} {
      font-size: 16px;
    }
  }
`;

export default StyledAccordionItem;
