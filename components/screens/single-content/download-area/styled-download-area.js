import styled from "styled-components";

const StyledDownloadArea = styled.div`
  position: relative;
  background: linear-gradient(134.97deg, #FFC671 0%, #FF7541 64.06%, #FF6F3D 100%);
  border-radius: 3px;
  margin: 64px 0 0;

  .download-wrapper {
    padding: 64px 16px;
    text-align: center;
    background-image: url('https://static-helpcenter.teamlab.info/images/icons/download-bg.react.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .download-content {
    display: flex;
    flex-direction: column;
    max-width: 586px;
    margin: 0 auto;
    gap: 32px;
  }

  h3.download-title {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #FFFFFF;
    padding: 0;
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
    gap: 8px;
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

    &:hover {
      &::before {
        filter: grayscale(0);
      }
    }
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

export default StyledDownloadArea;
