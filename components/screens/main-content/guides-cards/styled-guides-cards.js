import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/screens/common/section";

const StyledGuidesCards = styled(Section)`
  padding: 80px 0 112px;

  &.mp > .section-page > div > .cell_header > .cell_icon > img {
    width: 48px;
  }

  .section-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex: 2;
    gap: 32px;

    @media ${device.tablet} {

    }
  }

  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export default StyledGuidesCards;
