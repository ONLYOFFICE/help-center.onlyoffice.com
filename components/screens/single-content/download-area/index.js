import React from "react";
import Heading from "@components/common/heading";
import Button from "@components/common/button";
import ExternalLink from "@components/common/link";
import StyledDownloadArea from "./styled-download-area";

const DownloadArea = ({ t, ...rest }) => {
  return (
    <StyledDownloadArea {...rest}>
      <div className="download-wrapper">
        <div className="download-content">
          <Heading level={3} className="download-title" label={t("HostOnYourOwnServer")} />
          <div className="download-buttons">
            <ExternalLink href="https://www.onlyoffice.com/download-docs.aspx">
              <Button label={t("GetItNow")} typeButton={"white"} />
            </ExternalLink>
            <ExternalLink href="https://www.onlyoffice.com/docs-registration.aspx">
              <Button label={t("UseInTheCloud")} typeButton={"white"} />
            </ExternalLink>
          </div>
        </div>
      </div>
    </StyledDownloadArea>
  );
};

export default DownloadArea;
