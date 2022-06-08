import React, { useMemo } from "react";
import GuidesCell from "../guides-cards/sub-components/guides-cell";
import StyledGuidesCards from "./styled-guides-cards";
import LinksInfo from "../../../../static/data/main-page-links";
import Box from "../../../../components/box";

import IntegrationPic from "../../../../static/images/icons/integration.svg";
import InstallationPic from "../../../../static/images/icons/installation.svg";
import AdministrationPic from "../../../../static/images/icons/administration.svg";
import UserPic from "../../../../static/images/icons/user-guides.svg";
import DeveloperPic from "../../../../static/images/icons/development.svg";
import ContributionPic from "../../../../static/images/icons/contribution.svg";


const GuidesCards = ({t}) => {
    const installationData = useMemo(
        () => LinksInfo.filter((item) => item.position === "installation"),
        []
    );
    const integationData = useMemo(
        () => LinksInfo.filter((item) => item.position === "integration"),
        []
    );
    const administrationData = useMemo(
        () => LinksInfo.filter((item) => item.position === "administration"),
        []
    );
    const userData = useMemo(
        () => LinksInfo.filter((item) => item.position === "user"),
        []
    );
    const developerData = useMemo(
        () => LinksInfo.filter((item) => item.position === "developer"),
        []
    );
    const contributionData = useMemo(
        () => LinksInfo.filter((item) => item.position === "contribution"),
        []
    );

    return (
        <StyledGuidesCards>
            <Box className="cell_container">
            <GuidesCell pic={InstallationPic} headData={installationData[0]} t={t} />
            <GuidesCell pic={AdministrationPic} headData={administrationData[0]} t={t} />
            <GuidesCell pic={DeveloperPic} headData={developerData[0]} t={t} />
            </Box>
            <Box className="cell_container">
            <GuidesCell pic={IntegrationPic} headData={integationData[0]} t={t} />
            <GuidesCell pic={UserPic} headData={userData[0]} t={t} />
            <GuidesCell pic={ContributionPic} headData={contributionData[0]} t={t} />
            </Box>
        </StyledGuidesCards>
        )
};

export default GuidesCards;