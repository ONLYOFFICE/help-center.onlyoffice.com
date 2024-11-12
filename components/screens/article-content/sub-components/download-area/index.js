import StyledDownloadArea from "./styled-download-area";
import Heading from "@components/common/heading";
import ExternalLink from "@components/common/external-link";

const DownloadArea = ({ t, slug, subcat, ...rest }) => {
  const getLabelAndHref = (slug, subcat) => {
    switch (slug && slug.toLowerCase()) {
      case 'docspace':
        return { label: "HostOnYourOwnServerDocSpace", downloadHref: "docspace" };
      case 'workspace':
        return { label: "HostOnYourOwnServerWorkspace", downloadHref: "https://www.onlyoffice.com/download-workspace.aspx?from=helpcenter" };
      case 'mobile apps':
        if (subcat === "iOS") {
          return { label: "HostiOS", downloadHref: "https://itunes.apple.com/us/app/onlyoffice-documents/id944896972" };
        }
        return { label: "HostAndroid", downloadHref: "https://play.google.com/store/apps/details?id=com.onlyoffice.documents" };
      case 'desktop apps':
        return { label: "HostDesktop", downloadHref: "https://www.onlyoffice.com/download-desktop.aspx?from=helpcenter" };
      default:
        return { label: "HostOnYourOwnServerDocs", downloadHref: "docs" };
    }
  };

  const { label, downloadHref } = getLabelAndHref(slug, subcat);
  
  return (
    <StyledDownloadArea {...rest}>
      <div className="download-wrapper">
        <div className="download-content">
          <Heading level={3} className="download-title" label={t(label)} />
          <div className="download-buttons">
            {slug && slug.toLowerCase() !== "mobile apps" && slug.toLowerCase() !== "workspace" && slug.toLowerCase() !== "desktop apps" ? (
              <>
                <ExternalLink className="download-button" href={`https://www.onlyoffice.com/download-${downloadHref}.aspx?from=helpcenter`} label={t("GetItNow")} />
                <ExternalLink className="download-button" href={`https://www.onlyoffice.com/${downloadHref}-registration.aspx?from=helpcenter`} label={t("UseInTheCloud")} />
              </>
            ) : (
              slug && slug.toLowerCase() === "mobile apps" ? (
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