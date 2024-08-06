import styled from "styled-components";
import Section from "@components/common/section";
import bgError from "@public/images/icons/bg-error.svg";

const StyledSearchResultsContent = styled(Section)`
  overflow: hidden;

  .search-results-header {
    position: relative;
    padding: 56px 0;
    background-color: #f5f5f5;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100vw;
      height: 100%;
      background-color: #f5f5f5;
      transform: translateX(-100%);
    }

    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
      width: 100vw;
      height: 100%;
      background-color: #f5f5f5;
      transform: translateX(100%);
    }
  }

  .search-results-wrapper {
    padding: 40px 0 112px;
    margin: 0 auto;
    max-width: 832px;
  }

  .search-results-found {
    margin-bottom: 40px;
    font-size: 14px;
    line-height: 21px;
    color: #808080;
    text-align: center;
  }

  .search-results-items {
    &:not(:last-child) {
      margin-bottom: 80px;
    }
  }

  .search-results-item {
    font-size: 14px;
    line-height: 21px;
    color: #444444;

    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  .search-results-link {
    color: #FF6F3D;

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .search-results-not-found-title {
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: 600;
    line-height: 133%;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .search-results-not-found-img {
    width: 100%;
    height: 340px;
    background-image: url(${bgError.src});
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
`;

export default StyledSearchResultsContent;