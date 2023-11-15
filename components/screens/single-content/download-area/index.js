import React from "react";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ExternalLink from "@components/common/link";
import StyledDownloadArea from "./styled-download-area";

const DownloadArea = ({ t, ...rest }) => {
  return (
    <StyledDownloadArea {...rest}>
      <div className="download-wrapper">
        <div className="download-content">
          <Heading level={3} className="download-title" label={t("HostOnYourOwnServer")} />
          <div className="download-buttons">
            <ExternalLink className="download-button" href="https://www.onlyoffice.com/download-docs.aspx">
              {t("GetItNow")}
            </ExternalLink>
            <ExternalLink className="download-button" href="https://www.onlyoffice.com/docspace-registration.aspx">
              {t("UseInTheCloud")}
            </ExternalLink>
          </div>
        </div>
      </div>
    </StyledDownloadArea>
  );
};

export default DownloadArea;
