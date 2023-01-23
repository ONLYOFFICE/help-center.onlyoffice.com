import React, { useMemo } from "react";
import GuidesCell from "../guides-cards/sub-components/guides-cell";
import StyledGuidesCards from "./styled-guides-cards";
import { LinksInfo } from "@public/data/main-page-links";
import Box from "@components/common/box";

import DocsPic from "@public/images/icons/documents.svg";
import DesktopPic from "@public/images/icons/desktop-editors.svg";
import WorkspacePic from "@public/images/icons/workspace.svg";
import MobilePic from "@public/images/icons/mobile.svg";
import IntegrationPic from "@public/images/icons/integration.svg";
import PersonalPic from "@public/images/icons/personal.svg"

const GuidesCards = ({ t, articles, categories }) => {
  console.log(articles);
  console.log(categories);
  const docsData = useMemo(
    () => LinksInfo.find((it) => it.position === "docs"),
    [LinksInfo]
  );
  const desktopData = useMemo(
    () => LinksInfo.find((item) => item.position === "desktop"),
    [LinksInfo]
  );
  const workspaceData = useMemo(
    () => LinksInfo.find((item) => item.position === "workspace"),
    [LinksInfo]
  );
  const mobileData = useMemo(
    () => LinksInfo.find((item) => item.position === "mobile"),
    [LinksInfo]
  );
  const integrationsData = useMemo(
    () => LinksInfo.find((item) => item.position === "integrations"),
    [LinksInfo]
  );
  const personalData = useMemo(
    () => LinksInfo.find((item) => item.position === "personal"),
    [LinksInfo]
  );

  return (
    <StyledGuidesCards>
      <Box className="cell_container">
        <GuidesCell pic={DocsPic} headData={docsData} t={t} />
        <GuidesCell pic={WorkspacePic} headData={workspaceData} t={t} />
        <GuidesCell pic={IntegrationPic} headData={integrationsData} t={t} />
      </Box>
      <Box className="cell_container">
        <GuidesCell pic={DesktopPic} headData={desktopData} t={t} />
        <GuidesCell pic={MobilePic} headData={mobileData} t={t} />
        <GuidesCell pic={PersonalPic} headData={personalData} t={t} />
      </Box>
    </StyledGuidesCards>
  );
};

export default GuidesCards;
