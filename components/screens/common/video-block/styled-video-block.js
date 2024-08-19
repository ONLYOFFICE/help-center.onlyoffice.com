import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledVideoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
  background-color: #F5F5F5;

  h3.video-block-title {
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #333333;
    text-align: center;

    span {
      color: #FF6F3D;
    }

    @media ${device.tabletS} {
      margin-bottom: 32px;
    }
  }

  .video-block-wrapper {
    display: grid;
    grid-template-columns: 322px auto;
    align-items: start;
    gap: 32px;
    margin-bottom: 40px;

    @media ${device.tablet} {
      display: block;
    }

    @media ${device.tabletS} {
      margin-bottom: 32px;
    }
  }

  .video-block-youtube {
    position: relative;
    width: 100%;
    max-width: 322px;
    padding-bottom: 55.904%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media ${device.tablet} {
      padding-bottom: 56.25%;
      margin: 0 auto 24px;
      max-width: 100%;
    }
  }

  .video-block-name {
    margin-bottom: 16px;
    letter-spacing: -0.02em;

    @media ${device.tablet} {
      margin-bottom: 8px;
    }
  }

  .video-block-description {
    font-size: 14px;
    line-height: 21px;
  }

  .video-block-link {
    border: 1px solid #AAAAAA;
    border-radius: 3px;
    padding: 19px 24px;
    font-size: 13px;
    font-weight: 600;
    line-height: 17.29px;
    letter-spacing: 0.04em;
    color: #444444;
    text-transform: uppercase;
    transition: border-color 0.3s, color 0.3s;

    &:hover {
      border-color: #FF6F3D;
      color: #FF6F3D;
    }
  }

  @media ${device.tabletS} {
    padding: 24px;
  }
`;

export default StyledVideoBlock;