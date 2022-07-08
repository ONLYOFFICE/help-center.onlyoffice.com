import React from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterContent from "./content";

const SingleContent = ({ t, ...rest }) => {
    return (
        <StyledSingleContent>
            <LeftMenu t={t} />
            <CenterContent t={t} />
        </StyledSingleContent>
    )
}

export default SingleContent;
