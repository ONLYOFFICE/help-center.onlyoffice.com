import React from "react";

import StyledCategory from "./styled-category";
import CategoryBox from "./sub-components/category-box";
import DocsPic from "@public/images/icons/documents.svg";
import DesktopPic from "@public/images/icons/desktop-editors.svg";
import WorkspacePic from "@public/images/icons/workspace.svg";
import MobilePic from "@public/images/icons/mobile.svg";
import IntegrationPic from "@public/images/icons/integration.svg";
import PersonalPic from "@public/images/icons/personal.svg";

const Category = ({ t, template, currentLanguage }) => {

  const helpcenter = `https://helpcenter.onlyoffice.com/${
  currentLanguage === "en" ? "" : `${currentLanguage}/`
  }`;

  return (
    <StyledCategory template={template}>
        <CategoryBox t={t} pic={DocsPic} label="Docs" href={"/installation.aspx"}/>
        <CategoryBox t={t} pic={DesktopPic} label="Desktop Apps" href={"/administration.aspx"}/>
        <CategoryBox t={t} pic={WorkspacePic} label="Workspace" href={"/integration.aspx"}/>
        <CategoryBox t={t} pic={MobilePic} label="Mobile Apps" href={"/userguides.aspx"}/>
        <CategoryBox t={t} pic={IntegrationPic} label="Integrations" href={"/guides/become-translator.aspx"}/>
        <CategoryBox t={t} pic={PersonalPic} label="Personal" href="https://api.onlyoffice.com/"/>
    </StyledCategory>
  );
};

export default Category;