import React from "react";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ExternalLink from "@components/common/link";
import StyledDownloadArea from "./styled-download-area";

const DownloadArea = ({ t }) => {
  return (
    <StyledDownloadArea>
      <div className="download-wrapper">
        <div className="download-content">
          <Heading level={3} className="download-title" label={t("Host on your own server")} />
          <Text className="download-text" label={t("Download free and open source versions of ONLYOFFICE")} />

          <div className="download-buttons">
            <ExternalLink className="download-button for-windows">
              {t("For Windows")}
            </ExternalLink>
            <ExternalLink className="download-button for-linux">
              {t("For Linux")}
            </ExternalLink>
            <ExternalLink className="download-button docker">
              {t("Docker")}
            </ExternalLink>
          </div>
        </div>
      </div>
    </StyledDownloadArea>
  );
};

export default DownloadArea;
