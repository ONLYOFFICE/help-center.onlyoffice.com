import styled from "styled-components";
import download_bg from "@public/images/icons/download-bg.svg";
import for_windows from "@public/images/icons/windows.svg";
import for_linux from "@public/images/icons/linux.svg";
import docker from "@public/images/icons/docker.svg";

const StyledDownloadArea = styled.div`
  position: relative;
  background: linear-gradient(134.97deg, #FFC671 0%, #FF7541 64.06%, #FF6F3D 100%);
  border-radius: 3px;
  margin: 64px 0 0;

  .download-wrapper {
    padding: 71px 16px;
    text-align: center;
    background-image: url(${download_bg.src});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .download-content {
    display: flex;
    flex-direction: column;
    max-width: 586px;
    margin: 0 auto;
  }

  .download-title {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #FFFFFF;
  }

  .download-text {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
  }

  .download-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .download-button {
    box-sizing: border-box;
    border-radius: 3px;
    padding: 12px 16px;
    font-size: 16px;
    line-height: 24px;
    background-color: #FFFFFF;
    color: #444444;
    min-width: 170px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &::before {
      display: inline-flex;
      margin-right: 8px;
      width: 32px;
      height: 32px;
      filter: grayscale(1);
      transition: filter 0.3s;
    }

    &.for-windows {
      &::before {
        content: url(${for_windows.src});
      }
    }

    &.for-linux {
      &::before {
        content: url(${for_linux.src});
      }
    }

    &.docker {
      &::before {
        content: url(${docker.src});
      }
    }

    &:hover {
      &::before {
        filter: grayscale(0);
      }
    }
  }
`;

export default StyledDownloadArea;
