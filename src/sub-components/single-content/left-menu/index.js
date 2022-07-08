import React from "react";
import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "../../../../components/internal-link";
import SearchContent from "./sub-components/search";

const LeftMenu = ({ t, ...rest }) => {
    return (
    <StyledLeftMenu>
        <SearchContent t={t} />
        <InternalLink
            label="Installation guides"
            className="external-link"
        />
        <InternalLink
            label="ONLYOFFICE Workspace"
            className="external-link"
        />
        <InternalLink
            label="ONLYOFFICE Groups"
            className="external-link"
        />
        <InternalLink
            label="ONLYOFFICE Mail"
            className="external-link"
        />
        <InternalLink
            label="ONLYOFFICE Talk"
            className="external-link"
        />
        <InternalLink
            label="ONLYOFFICE Docs"
            className="external-link"
        />
        <InternalLink
            label="ONLYOFFICE Desktop Editors"
            className="external-link"
        />
        <InternalLink
            label="ONLYOFFICE Mobile Apps"
            className="external-link"
        />
        <InternalLink
            label="Glossary"
            className="external-link"
        />
        <InternalLink
            label="Video"
            className="external-link"
        />
        <InternalLink
            label="FAQ"
            className="external-link"
        />
    </StyledLeftMenu>
    )
}

export default LeftMenu;