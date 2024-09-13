import styled from "styled-components";
import { device } from "@components/utils/devices";
import globalColors from "@components/utils/global-colors";

const StyledWrapperContent = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;

  .wrapper {
    box-sizing: border-box;
    padding: 32px 0 112px 32px;
    width: 100%;
    max-width: 864px;
    color: ${globalColors.gray};

    h3 {
      margin-bottom: 16px;
    }
    
    @media ${device.laptop} {
      padding: 32px 0 112px;
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
    color: ${globalColors.gray};
    background-color: ${globalColors.tagColor};
    cursor: pointer;

    &:hover {
      background-color: ${globalColors.tagHover};
      text-decoration: none;
    }
  }

  h3.subcat-heading {
    padding: 0 0 24px;

    &.dlw {
      display: flex;
      gap: 16px;
    }
  }

  .subcat-div {
    padding: 0 0 24px;
    scroll-margin-top: 24px;

    h5 {
      padding: 0;
    }

    &.olk {
      padding: 0 0 16px;

      > a > span {
        color: ${globalColors.gray};
        text-decoration: none;

        &:hover {
          color: ${globalColors.orangeMain};
        }
      }
    }
  }
  .subcat-empty-div {
    padding: 0 0 16px;
  }

  .classic-ul {
    list-style-type: none;

    > li {
        padding: 16px 0 0;

      > a {
        color: ${globalColors.gray};
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: ${globalColors.orangeMain};
        }
      }
    }
  }

  .reqs {
    display: flex;
    gap: 8px;
    text-decoration: underline;
  }

  .top-links {
    gap: 32px;
    padding: 0 0 32px;
  }

  .changelog-page {
    &.docs-log {
      .changelog-switcher .changelog-subheader {
        font-size: 14px;
        font-weight: 400;
        padding: 16px 0 0;
      }
    }

    .changelog-main-header {
      position: relative;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      line-height: 23.94px;
      letter-spacing: -0.02em;
      margin: 0;
      text-align: left;

      &::before {
        content: var(--content, '+');
        display: inline-block;
        height: 24px;
        padding: 0 10px 0 0;
        width: 14px;
      }
    }
    .changelog-release-date {
      float: right;
      margin: -24px 0px 0;

      .crd-date {
        color: ${globalColors.orangeMain};
      }
    }

    .changelog-switcher {
      display: none;
      transition: 0.3s ease;

      .changelog-subheader {
        font-size: 18px;
        font-weight: 600;
        padding: 24px 0 16px;
        margin: 0;

        a {
          color: ${globalColors.orangeMain};
        }
      }

      .bigVideoCont {
        position: relative;
        border: none;
        display: block;
        margin-top: 24px;
        padding-bottom: 44.445%;
        width: 80%;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media ${device.mobile} {
          padding-bottom: 56.25%;
          width: 100%;
        }
      }

      > ul {
        padding: 0 0 24px 16px;

        &:last-child {
          padding: 0 0 0px 16px;
        }
      }

      .changelog-subsubheader {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        padding: 0 0 8px;
      }
    }

    .changelog-version-block {
      border-bottom: 1px solid #f5f5f5;
      padding: 32px 0;
    }
  }

  .question_answer p span {
    color: ${globalColors.orangeLetters};
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    margin: 0 8px 0 0;

    &.answer {
      color: #5b9c18;
    }
  }

  .question_answer a {
    color: ${globalColors.orangeMain};
  }
`;

export default StyledWrapperContent;
