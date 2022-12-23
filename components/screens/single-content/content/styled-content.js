import styled from "styled-components";
import attention from "@public/images/icons/attention.svg";

const StyledContent = styled.div`
  box-sizing: border-box;
  padding: 32px 0 94px 29px;
  width: 100%;
  color: #333333;

  .wrapper {
    font-size: 14px;
    line-height: 19px;

    a {
      display: inline-flex;
      align-items: center;
      color: #FF6F3D;
      text-decoration: none;

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
      margin-bottom: 16px;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;

      &:not(:last-child) {
        margin: 0 0 24px;
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

    .category-item {
      border-radius: 3px;
      padding: 32px;
      box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
      background: #FFFFFF;

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
          color: #FF6F3D;
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
      border-top: 1px solid #CCCCCC;
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
      margin: 0 8px 8px 0;
      border-radius: 2px;
      padding: 4px 8px;
      font-size: 12px;
      line-height: 19px;
      color: #333333;
      background-color: #EFEFEF;
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
      color: #FFFFFF;
      cursor: pointer;

      .tag-version-product,
      .tag-version-num {
        padding: 4px 8px;
      }

      .tag-version-product {
        background: #444444;
      }

      .tag-version-num {
        background: #FF6F3D;
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
      color: #FFFFFF;
      background-color: #8BB825;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }

    .notehelp {
      display: flex;
      align-items: center;
      border-radius: 3px;
      padding: 16px;
      font-size: 14px;
      line-height: 22px;
      background-color: #F5F5F5;

      &::before {
        content: url(${attention.src});
        margin-right: 10px;
      }
    }
  }
`

export default StyledContent;