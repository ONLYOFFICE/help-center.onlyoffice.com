import styled from "styled-components";

const StyledAttentionBlock = styled.div`
  position: relative;
  font-family: "Open Sans", sans-serif;
  border-radius: 2px;
  padding: 15px 30px;
  line-height: 1.3em;
  background-color: #f1da92;

  button {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    line-height: 1.3em;
  }

  .close-cross {
    position: absolute;
    right: 25px;
    top: 15px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    background-image: url('https://static-helpcenter.teamlab.info/images/icons/close-icon.react.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 20px 20px;
  }

  .attention-title {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    color: #ff642e;
    margin-bottom: 10px;
  }

  .attention-text {
    span {
      font-weight: 600;
    }
  }

  .block-editor {
    margin-top: 11px;
  }

  .attention-toggle {
    padding: 0;
    color: #333;
    cursor: pointer;
    border: none;
    border-bottom: 1px dotted #333;
    background-color: transparent;
  }

  .attention-input {
    padding: 20px 0 10px;

    input {
      margin: -4px 5px 0 0;
      display: inline-block;
    }
  }

  .table-versionlist {
    border-collapse: collapse;
    border-spacing: 0;
    width: auto;
    min-width: 55%;
    margin: 10px 0 20px;
    text-align: center;
    background-color: #fff;

    tr, 
    th {
      line-height: 1.3em;
    }

    th {
      border-bottom: 1px solid #d7d8dc;
      color: #333;
      font-size: 16px;
      font-weight: 600;
      padding: 8px 40px 8px 20px;

      span {
        position: relative;
      }

      &:first-child {
        text-align: left;
      }

      &.header {
        cursor: pointer;

        span {
          &:before {
            content: '';
            position: absolute;
            right: -17px;
            top: 7px;
            display: block;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 4px 4px 4px;
            border-color: transparent transparent #999 transparent;
          }

          &:after {
            content: '';
            position: absolute;
            right: -17px;
            top: 13px;
            display: block;
            height: 0;
            width: 0;
            border-style: solid;
            border-width: 4px 4px 0 4px;
            border-color: #999 transparent transparent transparent;
          }
        }

        &.headerSortDown {
          span {
            &:before {
              content: none;
            }

            &:after {
              top: 11px;
            }
          }
        }
      }
    }
  }
`;

export default StyledAttentionBlock;
