import { useState } from "react";
import StyledDownloadArea from "./styled-download-area";
import Heading from "@components/common/heading";
import ExternalLink from "@components/common/external-link";
import { useEffect } from "react";

const DownloadArea = ({ t, slug, subcat, ...rest }) => {
  const [label, setLabel] = useState();
  const [downloadHref, setDownloadHref] = useState();

  useEffect(() => {
    switch (slug.toLowerCase()) {
      case 'docspace':
        setLabel("HostOnYourOwnServerDocSpace");
        setDownloadHref("docspace");
        break;
      case 'workspace':
        setLabel("HostOnYourOwnServer");
        setDownloadHref("https://www.onlyoffice.com/download-workspace.aspx?from=helpcenter");
        break;
      case 'mobile apps':
        if (subcat === "iOS") {
          setLabel("HostiOS");
          setDownloadHref("https://itunes.apple.com/us/app/onlyoffice-documents/id944896972");
        }
        else {
          setLabel("HostAndroid");
          setDownloadHref("https://play.google.com/store/apps/details?id=com.onlyoffice.documents");
        }
        break;
      case 'desktop':
        setLabel("HostDesktop");
        setDownloadHref("https://www.onlyoffice.com/download-desktop.aspx?from=helpcenter");
        break;
      default:
        setLabel("HostOnYourOwnServerDocs");
        setDownloadHref("docs");
        break;
    }
  }, []);

  return (
    <StyledDownloadArea {...rest}>
      <div className="download-wrapper">
        <div className="download-content">
          <Heading level={3} className="download-title" label={t(label)} />
          <div className="download-buttons">
            {slug.toLowerCase() !== "mobile apps" && slug.toLowerCase() !== "workspace" ? (
              <>
                <ExternalLink className="download-button" href={`https://www.onlyoffice.com/download-${downloadHref}.aspx?from=helpcenter`} label={t("GetItNow")} />
                <ExternalLink className="download-button" href={`https://www.onlyoffice.com/${downloadHref}-registration.aspx?from=helpcenter`} label={t("UseInTheCloud")} />
              </>
            ) : (
              slug.toLowerCase() === "mobile apps" ? (
                subcat === "iOS" ? (
                  <ExternalLink className="download-button ios" href={downloadHref} />
                ) : (
                  <ExternalLink className="download-button android" href={downloadHref} />
                )
              ) : (
                <ExternalLink className="download-button" href={downloadHref} label={t("Download")} />
              )
            )}
          </div>

        </div>
      </div>
    </StyledDownloadArea>
  );
};

export default DownloadArea;
