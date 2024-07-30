import styled from "styled-components";
import Section from "@components/common/section";
import { device } from "@components/utils/devices";

const StyledMainContent = styled(Section)`
  overflow: hidden;

  .info-content {
    position: relative;
    background-color: #f5f5f5;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100vw;
      height: 100%;
      background-color: #f5f5f5;
      transform: translateX(-100%);
    }

    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
      width: 100vw;
      height: 100%;
      background-color: #f5f5f5;
      transform: translateX(100%);
    }
  }

  .guides-cards {
    background-color: #ffffff;
    padding: 80px 0 112px;

    &.bg-gray {
      position: relative;
      background-color: #f5f5f5;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100vw;
        height: 100%;
        background-color: #f5f5f5;
        transform: translateX(-100%);
      }

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
        width: 100vw;
        height: 100%;
        background-color: #f5f5f5;
        transform: translateX(100%);
      }
    }

    @media ${device.laptop} {
      padding: 80px 0 88px;
    }

    @media ${device.tabletS} {
      padding: 48px 0;
    }
  }

  .guides-cards-top {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }

  .guides-cards-top-link {
    img {
      margin-right: 8px;
      width: 16px;
      min-width: 16px;
      height: 16px;
      object-fit: contain;
    }

    &:not(:last-child) {
      margin-right: 48px;
    }

    > a {
      color: #333333;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  .guides-cards-items {
    display: flex;
    gap: 32px;
  }
`;

export default StyledMainContent;