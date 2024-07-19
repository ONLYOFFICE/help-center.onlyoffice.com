import styled from "styled-components";
import Section from "@components/common/section";
import { device } from "@components/utils/devices";

const StyledVideoContent = styled(Section)`
  .video-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media ${device.laptop} {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }
  }
`;

export default StyledVideoContent;
