import React from "react";

import StyledCategory from "./styled-category";
import CategoryBox from "./sub-components/category-box";

const Category = ({ t, template, category }) => {
  return (
    <StyledCategory template={template}>
      {category.sort((a, b) => a.attributes.position - b.attributes.position).map((it, index) => (
        <CategoryBox
          t={t}
          key={index}
          label={it.attributes.name}
          href={it.attributes.url}
          pic={it.attributes.card_field_img?.data?.attributes.url}
        />
      ))}
    </StyledCategory>
  );
};

export default Category;