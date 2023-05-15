import styled from "styled-components";
import attention from "@public/images/icons/attention.svg";

const StyledContent = styled.div`
  box-sizing: border-box;
  padding: 44px 0 112px 14px;
  width: 100%;
  max-width: 861px;
  color: #333333;

  .wrapper {
    font-size: 14px;
    line-height: 19px;

    &.main {
      .block-editor {
        list-style-type: none;
        li {
          margin: 0;
          h6 {
            margin: 20px 0 16px;
          }
          ul {
            list-style-type: none;
            li {
              margin: 0 0 10px;
            }
          }
        }
        
      }
    }

    ul,
    li {
      padding: 0;
      margin: 0;
    }

    ul {
      list-style-type: disc;

      &:not(:last-child) {
        margin-bottom: 24px;
      }

      li {
        margin: 0 0 0 21px;
        line-height: 22px;
      }

      &.ul-category {
        list-style-type: none;

        > li {
          list-style-type: none;
          margin: 0;

          &:not(:last-child) {
            margin-bottom: 32px;
          }

          > ul {
            > li {
              &:not(:last-child) {
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }

    .border-content {
      margin-bottom: 24px;
      padding-bottom: 23px;
      border-bottom: 1px solid #cccccc;
    }

    .gs_content {
      border-bottom: 1px solid #d1dce2;
      height: auto;
      margin-bottom: 15px;
      margin-top: 15px;
      padding-bottom: 30px;
      &:last-child {
        border-bottom: 0px;
        padding-bottom: 0px;
      }
    }

    .gs_submenu {
      border-bottom: 0px;
      padding-bottom: 0px;
    }

    .bigphoto_screen {
      display: none;
    }

    .items {
      margin: 24px 0 0;
      padding: 32px;
      background: #FFFFFF;
      border: 1px solid #EFEFEF;
      box-shadow: 0px 7px 25px rgb(85 85 85 / 15%);
      border-radius: 3px;
      color: #333333;
      &:hover {
        color: #333333;
        text-decoration: none;
      }
    }

    a {
      display: inline-flex;
      align-items: center;
      color: #ff6f3d;
      text-decoration: none;

      span {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        h1, h2, h3, h4, h5 {
          color: #ff6f3d;
          &:hover {
            cursor: pointer;
          }
        }
      }
      
      img {
        margin-right: 8px;
      }

      &.bold {
        font-weight: 700;
      }

      &:not(:last-child) {
        margin-bottom: 16px;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      margin: 0;

      &:not(:last-child) {
        margin: 0 0 16px;
      }

      a {
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;

      &:not(:last-child) {
        margin: 0 0 16px;
      }
    }

    h3 {
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.02em;
    }

    h4 {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }

    h5 {
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 19px;
    }

    h6 {
      font-size: 14px;
      line-height: 19px;
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

    .tag {
      display: inline-flex;
      margin: 0 8px 8px 0;
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

    .notehelp {
      position: relative;
      border-radius: 3px;
      margin-bottom: 16px;
      padding: 16px 16px 16px 42px;
      font-size: 14px;
      line-height: 22px;
      background-color: #f5f5f5;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 16px;
        width: 16px;
        height: 16px;
        background-image: url(${attention.src});
        transform: translateY(-50%);
      }
    }

    .gs_submenu {
      padding: 16px 0;
    }

    img.screen_guides {
      border: 1px solid #e0e0e0;
      cursor: pointer;
      display: inline-block;
      height: auto;
      margin: 15px 0;
      position: relative;
      width: 350px;
    }

    img {
      vertical-align: middle;
    }

    .prettyprint {
      padding: 2px;
      background: #f4f4f4;
      font-family: "Roboto Mono", Menlo, "Bitstream Vera Sans Mono",
        "DejaVu Sans Mono", Monaco, Consolas, monospace;
      border: 0;
      font-size: 14px;

      > code {
        white-space: pre-wrap;
        display: block;
        line-height: 18px;
        padding: 15px;

        span {
          margin: 0;
          padding: 0;
        }

        > .pln {
          color: #000;
        }

        > .pun {
          color: #660;
        }
      }
    }

    code {
      background: #f4f4f4;
      font-family: "Roboto Mono", Consolas, Monaco, "Andale Mono", monospace;
      padding: 1px 5px;
      word-break: break-all;
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

  .download-area {
    margin: 40px 0 16px;
  }
`;

export default StyledContent;
