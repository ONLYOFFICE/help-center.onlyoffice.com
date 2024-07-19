import styled from "styled-components";

const StyledDownloadArea = styled.div`
  position: relative;
  background: linear-gradient(134.97deg, #FFC671 0%, #FF7541 64.06%, #FF6F3D 100%);
  border-radius: 3px;
  margin: 64px 0 0;

  .download-wrapper {
    padding: 64px 16px;
    text-align: center;
    background-image: url("https://static-helpcenter.onlyoffice.com/images/icons/download-bg.react.svg");
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

  .download-title {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #FFFFFF;
    padding: 0;
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    padding: 21px 20px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 600;
    color: #444444;
    background-color: #FFFFFF;
    text-decoration: none;
    text-transform: uppercase;
    opacity: 0.9;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

export default StyledDownloadArea;
