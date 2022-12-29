import styled from "styled-components";
import arrow_right from "@public/images/icons/arrow-right.svg";
import glossary from "@public/images/icons/glossary-icon.svg";
import video from "@public/images/icons/video-icon.svg";
import faq from "@public/images/icons/faq-icon.svg";

const StyledLeftMenu = styled.ul`
  box-sizing: border-box;
  position: relative;
  border-right: 1px solid #EFEFEF;
  margin: 0;
  padding: 32px 23px 64px 0;
  width: 259px;
  min-width: 259px;
  z-index: 100;
  background-color: #F5F5F5;

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

  > li {
    &:first-child {
      padding-bottom: 12px;
    }

    &:not(:first-child) {
      position: relative;
      padding: 12px 0;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #CCCCCC;
      }
    }
  }

  .expanded-menu {
    display: none;

    &.open {
      display: block;
    }

    &.no-subitems {
      .expanded-item::before {
        content: none;
      }
    }

    li {
      &.active {
        > a >.external-link {
          &::before {
            transform: rotate(90deg);
          }
        }
      }
    }
  }

  .external-link {
    display: block;
    line-height: 22px;
    color: #333333;
    text-decoration: none;
    transition: color 0.3s;

    &.selected {
      color: #FF6F3D;
    }

    &:hover {
      color: #FF6F3D;
    }
  }

  .item {
    padding: 8px 18px 8px 0;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .glossary,
  .video,
  .faq {
    &:not(:first-child) {
      padding: 0;

      &::before {
        content: none;
      }
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }

    .item {
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
  }

  .glossary {
    margin-top: 26px;

    .item {
      &::before {
        content: url(${glossary.src});
      }
    }
  }

  .video {
    .item {
      &::before {
        content: url(${video.src});
      }
    }
  }

  .faq {
    .item {
      &::before {
        content: url(${faq.src});
      }
    }
  }

  .expanded-item,
  .expanded-subitem {
    &::before {
      content: url(${arrow_right.src});
      margin-right: 2px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 11px;
      height: 11px;
    }
  }

  .expanded-item {
    padding: 8px 11px 8px 8px;
  }

  .expanded-subitem {
    padding: 8px 0 8px 22px;
  }

  .expanded-subsubitem {
    padding: 8px 0 8px 44px;
  }

  @media (max-width: 1190px) {
    display: none;
  }
`;

export default StyledLeftMenu;
