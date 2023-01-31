import React from "react";

import { isInternalLink } from 'is-internal-link';
import StyledCategoryBox from "./styled-category-box";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/link";
import IconButton from "@components/common/icon-button";

const CategoryBox = ({ t, template, pic, label, href }) => {
  return (
    <StyledCategoryBox template={template}>
      <IconButton isClickable={true} className="icon" iconName={pic} size={100} onClick={() => { window.open(href, "_self"); }} />
      {isInternalLink(href) ?
        <ExternalLink className="link" label={t(label)} href={href} />
        :
        <InternalLink className="link" label={t(label)} href={href} />
      }
    </StyledCategoryBox>
  );
};

export default CategoryBox;
