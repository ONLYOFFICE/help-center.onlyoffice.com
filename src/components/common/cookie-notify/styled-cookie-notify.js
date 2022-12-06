import styled from "styled-components";

const StyledCookieNotify = styled.div`
  position: fixed;
  left: 0;
  bottom: 30px;
  width: 100%;
  z-index: 100000;
  text-align: center;
  pointer-events: none;
  transition: opacity 0.3s, visibility 0.3s;

  &.hide {
    opacity: 0;
    visibility: hidden;
  }

  .cookie-notify {
    display: inline-flex;
    align-items: center;
    padding: 10px 10px 10px 20px;
    background-color: rgb(255 102 46 / 80%);
    pointer-events: initial;
  }

  .cookie-text {
    display: table-cell;
    vertical-align: middle;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
  }

  .cookie-btn {
    border: none;
    border-radius: 3px;
    margin-left: 30px;
    padding: 8px 16px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    color: rgba(255,100,46,0.8);
    background-color: #fff;
    cursor: pointer;
  }
`;

export default StyledCookieNotify;
