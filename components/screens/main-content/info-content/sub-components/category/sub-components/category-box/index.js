import React from "react";
import StyledCategoryBox from "./styled-category-box";
import InternalLink from "@components/common/internal-link";
import IconButton from "@components/common/icon-button";

const CategoryBox = ({ t, template, pic, label, href }) => {
  return (
    <StyledCategoryBox template={template}>
      <IconButton isClickable={true} className="icon" iconName={pic} size={100} onClick={() => { window.open(href, "_self"); }} />
      <InternalLink label={t(label)} href={href} />
    </StyledCategoryBox>
  );
};

export default CategoryBox;
