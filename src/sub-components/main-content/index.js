import React from "react";
import StyledMainContent from "./styled-main-content";
import GuidesCards from "./guides-cards";
import InfoContent from "./info-content";

const MainContent = ({ t }) => {
    return (
        <StyledMainContent>
            <InfoContent t={t} />
            <GuidesCards t={t} />
        </StyledMainContent>
    )
}

export default MainContent;
