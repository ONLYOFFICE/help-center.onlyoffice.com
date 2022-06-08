import React from "react";
import StyledMainContent from "./styled-main-content";
import GuidesCards from "./guides-cards";

const MainContent = ({ t }) => {
    return (
        <StyledMainContent>
            <GuidesCards t={t} />
        </StyledMainContent>
    )
}

export default MainContent;
