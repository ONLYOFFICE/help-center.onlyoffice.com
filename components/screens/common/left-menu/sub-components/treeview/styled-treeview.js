import styled from "styled-components";
import globalColors from "@components/utils/global-colors";

const StyledTreeView = styled.div`
  box-sizing: border-box;

  ul {
    list-style-type: none;
  }

  .external-link {
    text-decoration: none;
  }

  .left-menu-category-item {
    padding: 12px 0;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${globalColors.grayLight};
    }

    > ul {
      > li {
        > .left-menu-level-item {
          .left-menu-level-link {
            font-weight: 600;
          }
        }

        > ul {
          > li {
            .left-menu-level-item {
              padding-left: 14px;

              .left-menu-level-link {
                padding-left: 0;
              }
            }

            .left-menu-level-link {
              padding-left: 14px;
            }

            > ul {
              > li {
                .left-menu-level-item {
                  padding-left: 28px;

                  .left-menu-level-link {
                    padding-left: 0;
                  }
                }

                .left-menu-level-link {
                  padding-left: 29px;
                }

                > ul {
                  > li {
                    .left-menu-level-item {
                      padding-left: 42px;

                      .left-menu-level-link {
                        padding-left: 0;
                      }
                    }

                    .left-menu-level-link {
                      padding-left: 43px;
                    }

                    > ul {
                      > li {
                        .left-menu-level-link {
                          padding-left: 57px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .left-menu-category-btn {
    border: none;
    padding: 8px 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    width: 100%;
    color: ${globalColors.gray};
    background-color: transparent;
    text-align: initial;
    text-transform: uppercase;
    transition: color 0.3s;
    cursor: pointer;

    &.active {
      color: ${globalColors.orangeMain};
    }
  }

  .left-menu-arrow-btn {
    border: none;
    padding: 0;
    margin-top: 13px;
    margin-right: 4px;
    width: 11px;
    min-width: 11px;
    height: 11px;
    background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/arrow-gray-down.react.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    transform: rotate(-90deg);
    cursor: pointer;

    &.active {
      transform: rotate(0);
    }
  }

  .left-menu-level-item {
    display: flex;
  }

  .left-menu-level-link {
    box-sizing: border-box;
    display: block;
    padding: 8px 0;
    font-size: 14px;
    line-height: 21px;
    width: 100%;
    color: ${globalColors.gray};

    &:hover {
      text-decoration: underline;
    }

    &.active {
      color: ${globalColors.orangeMain};
    }
  }

  .left-menu-level-btn {
    position: relative;
    display: block;
    border: none;
    padding: 8px 0 8px 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: ${globalColors.gray};
    width: 100%;
    text-align: initial;
    background-color: transparent;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 13px;
      left: 0;
      display: inline-flex;
      width: 11px;
      min-width: 11px;
      height: 11px;
      background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/arrow-gray-down.react.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-color: transparent;
      transform: rotate(-90deg);
      cursor: pointer;
    }

    &.active {
      &:before {
        transform: rotate(0);
      }
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

export default StyledTreeView;