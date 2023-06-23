import styled from "styled-components";
import glossary from "@public/images/icons/glossary-icon.svg";
import video from "@public/images/icons/video-icon.svg";
import faq from "@public/images/icons/faq-icon.svg";
import { device } from "@components/utils/devices";

const StyledLeftMenu = styled.div`
background-color: #F5F5F5;
border-right: 1px solid #EFEFEF;
  
  .lm-wrap {
    box-sizing: border-box;
    position: sticky;
    margin: 0;
    min-width: 258px;
    z-index: 100;
    top: 72px;
    height: calc(100vh - 72px);
    overflow-y: auto;
    padding: 32px 26px 64px 16px;
    width: 258px;
  }

  h6 {
    padding: 0 0 8px;
    text-transform: uppercase;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100vw;
    height: 100%;
    background-color: #F5F5F5;
    transform: translateX(-100%);
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  ul.stat {
    padding: 32px 0 0;
  }

  li.active {
    .internal-link {
      color: #ff6f3d;
      font-weight: 700;
    } 
  }

  .internal-link {
    display: block;
    line-height: 22px;
    color: #333333;
    padding: 6px 16px;
    text-decoration: none;
    transition: color 0.3s;

    &.selected {
      color: #FF6F3D;
    }

    &:hover {
      color: #FF6F3D;
    }
  }
    .glossary, .video, .faq {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      padding: 0;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: normal;
      text-transform: initial;

      &::before {
        margin-right: 8px;
        width: 24px;
        height: 24px;
    }
  }

  .glossary {
      &::before {
        content: url(${glossary.src});
    }
  }

  .video {
      &::before {
        content: url(${video.src});
    }
  }

  .faq {
      &::before {
        content: url(${faq.src});
    }
  }

  .page {
    position: relative;
  }

  .page::before {
    border-radius: 2px;
    content: '';
    position: absolute;
    top: 8px;
    width: 4px; 
    height: calc(100% - 16px);
    background-color: #E2E2E2; 
    transform: translateY(0); 
    transition: transform 0.2s ease; 
  }

  ul > li::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;
    border-radius: 50%;
  }
  
  ul > li.active::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;
    border-radius: 2px;
    background-color: #444444;
  }

  ul > li {
    position: relative;
  }

  @media ${device.tablet} {
    .lm-wrap {
      padding: 32px 40px 64px;
      width: 280px;
    }
  }
`;

export default StyledLeftMenu;
