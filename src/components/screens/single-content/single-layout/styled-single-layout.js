import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSingleLayout = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  max-width: 100%;
  padding: 115px 153px 70px 0;

  .wrapper-content {
    flex: 1 1 auto;
    padding: 16px 52px 0 49px;
    font-size: 14px;
    line-height: 1.5em;

    ul {
      line-height: 1.5em;
      padding: 0;

      ul {
        list-style-type: circle;
      }
      
      li {
        list-style-type: none;
        padding: 0;
        margin: 6px 0;

        a {
          font-size: 14px;
          line-height: 1.2em;
          color: #ff642e;
        }

        h6 a {
          font-size: 19px;
        }
      }
    }

    p {
      font-size: 14px;
      line-height: 1.5em;
      padding: 10px 0;
    }

    a {
      line-height: 1.2em;
      cursor: pointer;
      text-decoration: none;
      color: #ff642e;

      &:hover {
        text-decoration: underline;
      }
    }

    h1 {
      font-size: 35px;
      font-weight: 300;
      margin: 10px 0 20px;
      line-height: 1.3em;
      padding-left: 0px;
      color: #ff642e;
    }

    h2 {
      color: #333;
      font-family: 'Open Sans',sans-serif,Arial;
      font-size: 30px;
      font-weight: 300;
      line-height: 1.3em;
      margin: 25px 0 10px;
      text-transform: none;
      width: 100%;

      a {
        display: block;
        font-size: 30px;
        font-weight: 300;
        line-height: 1.5em;
        text-transform: none;
        width: 100%;
        margin: 10px 0;
      }
    }

    h6 {
      color: #333;
      font-size: 19px;
      line-height: 21px;
      font-weight: 300;
      margin: 20px 0 0;
      text-transform: none;
    }
  }

  .alert-enter {
    opacity: 0;
  }
  .alert-enter-active {
    opacity: 1;
    transition: opacity .1s fadein;
  }
  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 0;
    transition: opacity .1s fadeout;
  }

  .section-page {
    .cell_container {
      display: flex;
      flex-direction: column;
      gap: 32px 0px;
    }

    @media ${device.tabletM} {
      flex-direction: column;
      .cell_container {
      }
    }
  }
    
  @media (max-width: 1190px) {
    margin: 100px 0 20px 0px;
    padding: 0 20px;
  }
  @media (max-width: 500px) {
    margin: 106px 0 20px 0px;
  }
`;

export default StyledSingleLayout;
