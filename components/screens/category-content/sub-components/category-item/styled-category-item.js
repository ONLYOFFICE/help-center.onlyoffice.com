import styled from "styled-components";
import globalColors from "@components/utils/global-colors";

const StyledCategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0;
  padding: 32px;
  background: ${globalColors.white};
  box-shadow: 0px 7px 25px rgb(85 85 85 / 15%);
  border-radius: 3px;
  color: ${globalColors.gray};

  &:hover {
    color: ${globalColors.gray};
    text-decoration: none;
  }

  > h4 > a {
    display: flex;
    transition: color 0.3s;

    > span {
      color: ${globalColors.gray};
      font-size: 18px;
      line-height: 1.33em;
      letter-spacing: -0.02em;
      font-weight: 700;
      text-decoration: none;
    }

    &[href] {
      &:hover {
        color: ${globalColors.orangeMain};
      }
    }
  }

  > h4 {
    align-items: center;
    display: flex;
    justify-content: start;
    gap: 16px;
    padding: 0 0 24px;
    transition: color 0.3s;

    img {
      height: fit-content;
    }

    &[href] {
      &:hover {
        color: ${globalColors.orangeMain};
      }
    }
  }

  h5 {
    &:hover {
      color: ${globalColors.orangeMain};
      cursor: pointer;
    }
  }

  > span {
    border-top: 1px solid ${globalColors.grayLight};
    border-bottom: 1px solid ${globalColors.grayLight};
    color: ${globalColors.grayTextInput};
    padding: 16px 0;
  }

  .main_links {
    display: flex;
    align-items: center;
    gap: 16px 32px;
    flex-wrap: wrap;
    padding: 32px 0 16px;

    > div {
      display: flex;
      gap: 8px;

    > a { 
        display: flex;

        > span {
          text-decoration: none;
        }
      }
    }
  }

  ul {
    list-style-type: none;
    padding: 16px 0 0;

    &.subcategory {
      padding: 0px;
    }

    li {
      line-height: normal;
      padding: 16px 0 16px;

      &.sublink {
        padding: 0 0 16px;

        > a {
          display: flex;
          gap: 8px;

          &:hover {
            color: ${globalColors.gray};
            text-decoration: underline;
          }
        }
      }

      &:last-child {
        padding-bottom: 0;
      }

      a {
        color: ${globalColors.gray};
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: ${globalColors.orangeMain};
        }
      }
    }
  }
`;

export default StyledCategoryItem;