import StyledDownloadArea from "./styled-download-area";
import Heading from "@components/common/heading";
import ExternalLink from "@components/common/external-link";

const DownloadArea = ({ t, ...rest }) => {
  return (
    <StyledDownloadArea {...rest}>
      <div className="download-wrapper">
        <div className="download-content">
          <Heading level={3} className="download-title" label={t("HostOnYourOwnServer")} />
          <div className="download-buttons">
            <ExternalLink className="download-button" href="https://www.onlyoffice.com/download-docs.aspx" label={t("GetItNow")} />
            <ExternalLink className="download-button" href="https://www.onlyoffice.com/docs-registration.aspx" label={t("UseInTheCloud")} />
          </div>
        </div>
      </div>
    </StyledDownloadArea>
  );
};

export default DownloadArea;
