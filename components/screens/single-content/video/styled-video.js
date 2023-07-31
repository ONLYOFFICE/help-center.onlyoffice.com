import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledVideo = styled.div`
padding: 24px 0 40px;
margin: 24px 0;
border-top: 1px solid #cccccc;
border-bottom: 1px solid #cccccc;
  .vids {
    align-items: start;
    background: #ffffff;
    box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
    border-radius: 2px;
    height: 434px;
    gap: 32px;
    padding: 32px;
  }

  h4 {
    padding: 0 0 16px;
  }

  @media ${device.laptop} {
  }
`;

export default StyledVideo;
