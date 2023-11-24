import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledLeftMenu = styled.div`
background-color: #F5F5F5;
border-right: 1px solid #EFEFEF;
padding: 32px 0;
padding-right: 24px;
width: 231px;
  
  .lm-wrap {
    box-sizing: border-box;
    position: sticky;
    margin: 0;
    min-width: 231px;
    z-index: 100;
    top: 72px;
    height: calc(100vh - 72px);
    overflow-y: auto;
    padding: 0px 4px 64px 0px;
  }

  .lm-wrap::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: #D0D5DA;
    }
    .lm-wrap::-webkit-scrollbar {
    width: 4px;
}

  h6 {
    padding: 0 0 8px;
    text-transform: uppercase;
  }

  &::before {
    content: "";
    position: absolute;
    left: 32px;
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
        content: url('https://static-helpcenter.teamlab.info/images/icons/glossary-icon.react.svg');
    }
  }

  .video {
      &::before {
        content: url('https://static-helpcenter.teamlab.info/images/icons/video-icon.react.svg');
    }
  }

  .faq {
      &::before {
        content: url('https://static-helpcenter.teamlab.info/images/icons/faq-icon.react.svg');
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
    background-color: #ff6f3d;
  }

  ul > li {
    position: relative;
  }

  @media ${device.tablet} {
    .lm-wrap {
      min-width: 184px;
    }
  }

  @media ${device.tabletS} {
    display: none;
  }
`;

export default StyledLeftMenu;
