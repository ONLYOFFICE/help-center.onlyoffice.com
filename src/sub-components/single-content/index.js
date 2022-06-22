import React from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterContent from "./content";

const SingleContent = ({ t }) => {
    return (
        <StyledSingleContent>
            <LeftMenu/>
            <CenterContent/>
        </StyledSingleContent>
    )
}

export default SingleContent;
