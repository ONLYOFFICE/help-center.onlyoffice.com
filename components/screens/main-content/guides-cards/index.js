import React, { useMemo } from "react";
import GuidesCell from "../guides-cards/sub-components/guides-cell";
import StyledGuidesCards from "./styled-guides-cards";
import { LinksInfo } from "@public/data/main-page-links";
import Box from "@components/common/box";

import IntegrationPic from "@public/images/icons/integration.svg";
import InstallationPic from "@public/images/icons/installation.svg";
import AdministrationPic from "@public/images/icons/administration.svg";
import UserPic from "@public/images/icons/user-guides.svg";
import DeveloperPic from "@public/images/icons/development.svg";
import ContributionPic from "@public/images/icons/contribution.svg";

const GuidesCards = ({ t }) => {
  const installationData = useMemo(
    () => LinksInfo.find((it) => it.position === "installation"),
    [LinksInfo]
  );
  const integationData = useMemo(
    () => LinksInfo.find((item) => item.position === "integration"),
    [LinksInfo]
  );
  const administrationData = useMemo(
    () => LinksInfo.find((item) => item.position === "administration"),
    [LinksInfo]
  );
  const userData = useMemo(
    () => LinksInfo.find((item) => item.position === "user"),
    [LinksInfo]
  );
  const developerData = useMemo(
    () => LinksInfo.find((item) => item.position === "developer"),
    [LinksInfo]
  );
  const contributionData = useMemo(
    () => LinksInfo.find((item) => item.position === "contribution"),
    [LinksInfo]
  );

  return (
    <StyledGuidesCards>
      <Box className="cell_container">
        <GuidesCell pic={InstallationPic} headData={installationData} t={t} />
        <GuidesCell pic={AdministrationPic} headData={administrationData} t={t} />
        <GuidesCell pic={DeveloperPic} headData={developerData} t={t} />
      </Box>
      <Box className="cell_container">
        <GuidesCell pic={IntegrationPic} headData={integationData} t={t} />
        <GuidesCell pic={UserPic} headData={userData} t={t} />
        <GuidesCell pic={ContributionPic} headData={contributionData} t={t} />
      </Box>
    </StyledGuidesCards>
  );
};

export default GuidesCards;