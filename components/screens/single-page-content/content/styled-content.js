import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledContent = styled.div`
  box-sizing: border-box;
  padding: 32px 0px 112px 32px;
  width: 100%;
  max-width: 832px;
  color: #333333;

  &.wrapper {
    font-size: 14px;
    line-height: 200%;

    h3 {
      padding: 0 0 16px;
    }

    .category-item {
      border-radius: 3px;
      padding: 32px;
      box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
      background: #ffffff;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    .category-item-title {
      display: flex;
      align-items: center;
      max-width: 682px;

      h4 {
        color: #333333;
      }

      img {
        margin-right: 16px;
      }

      &:not(:last-child) {
        margin-bottom: 32px;
      }

      &:hover {
        h4 {
          color: #ff6f3d;
        }
      }
    }

    .category-item-links {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      a {
        &:not(:last-child) {
          margin-right: 32px;
          margin-bottom: 0;
        }
      }
    }

    .category-subitems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      border-top: 1px solid #cccccc;
      padding-top: 15px;
      gap: 32px;

      div {
        display: flex;
        flex-direction: column;

        div {
          &:not(:last-child) {
            margin-bottom: 32px;
          }
        }
      }
    }

    .tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .tag {
      border-radius: 2px;
      padding: 4px 8px;
      font-size: 12px;
      line-height: 19px;
      color: #333333;
      background-color: #efefef;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }

    .tag-version {
      display: inline-flex;
      align-items: center;
      border-radius: 2px;
      margin-right: 8px;
      font-size: 12px;
      line-height: 19px;
      color: #ffffff;
      cursor: pointer;

      .tag-version-product,
      .tag-version-num {
        padding: 4px 8px;
      }

      .tag-version-product {
        background: #444444;
      }

      .tag-version-num {
        background: #ff6f3d;
      }

      &:hover {
        text-decoration: none;
      }
    }

    .tag-changelog {
      border-radius: 2px;
      padding: 4px 8px;
      font-size: 12px;
      line-height: 19px;
      color: #ffffff;
      background-color: #8bb825;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }

    &.video {
      display: flex;
      flex-wrap: wrap;
      gap: 0 24px;
      > .vid-page-item {
        width: calc(50% - 24px);
      }
    }
  }

  .page_download_button {
    position: relative;
    z-index: 100;
    display: flex;
    align-items: center;
    padding: 30px 0 0;
    margin: 40px 30px 0 0;
    border-top: 1px solid #d9d9d9;

    .button {
      border-radius: 4px;
      padding: 13px 24px;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-decoration: none;
      color: #ffffff;
      transition: background-color 0.3s;

      &.gray {
        background-color: #444444;

        &:hover {
          background-color: #565656;
        }
      }
    }

    .download_button_description {
      font-size: 13px;
      display: block;
      margin: 0 0 0 20px;
      line-height: 1.3em;
    }
  }

  @media ${device.laptopM} {
    max-width: calc(100vw - 280px);
  }

  @media ${device.tabletL} {
    &.wrapper {
      &.video {
      gap: 16px;
        > .vid-page-item {
          width: 100%;
        }
      }
    }
  }
  @media ${device.tabletS} {
    max-width: 100vw;
    padding: 40px 16px 48px;
  }
`;

export default StyledContent;
