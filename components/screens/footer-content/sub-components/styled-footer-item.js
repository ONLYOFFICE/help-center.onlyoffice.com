import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledFooterTablet = css`
  display: block;
  padding: 17px 0;
  border-bottom: 2px solid #f7f7f7;

  .footer-item-heading {
    padding: 6px 0 3px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s linear 0s;
  }

  .footer-item-heading-arrow {
    display: block;
    position: absolute;
    right: 2px;
    top: 16px;
    z-index: -1;
    transition: 0.3s linear;
    &.up {
      transform: rotate(180deg);
    }
  }

  .footer-items-group {
    display: grid;
    position: initial;
    margin-bottom: 0px;
    overflow: hidden;
    transition: margin-top 0.5s ease;

    ${(props) =>
      props.isOpen
        ? css`
            margin-top: 16px;
            position: initial;
            height: 100%;
            max-height: 100%;
          `
        : css`
            position: initial;
            margin-bottom: 0px;
            margin-top: 0px;
            max-height: 0px;
          `}
  }
`;

const StyledFooterItem = styled.div`
  display: grid;
  position: relative;
  padding: 0 0 35px;
  white-space: break-spaces;

  .footer-items-group {
    display: grid;
    justify-items: start;
    max-height: 100%;
  }

  .footer-link {
    color: #333;
    font-size: 13px;
    line-height: 1.4em;
    margin: 0px 0px 7px;
    text-decoration: none;
    -webkit-transition: color 0.2s, border 0.5s;
    -moz-transition: color 0.2s, border 0.5s;
    -o-transition: color 0.2s, border 0.5s;
    transition: color 0.2s, border 0.5s;

    &:hover {
      color: #ff6f3d;
    }
  }

  .footer-item-heading {
    padding: 6px 0 16px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .footer-item-heading-arrow {
    display: none;
  }

  @media ${device.tablet} {
    ${StyledFooterTablet};
  }
`;

export default StyledFooterItem;
