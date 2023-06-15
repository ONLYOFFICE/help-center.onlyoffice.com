import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState } from "react";
import StyledCategoryItem from "./styled-category-item";
import ReactHtmlParser from "react-html-parser";

const CategoryItem = ({
  data
}) => {
    const catData = data?.attributes.pictures?.data;
    const categoryPic = catData?.find((it) => it.attributes.name === "connector_img.png");
    console.log(categoryPic);
  return (
    <StyledCategoryItem>
              <div className="items">
                <Heading level={3}><Link href={data.attributes.url}>{data.attributes.title}</Link><img src={categoryPic?.attributes.url} /></Heading>
                
                <Text>{ReactHtmlParser(data.attributes.description)}</Text>
              </div>
    </StyledCategoryItem>
  );
};

export default CategoryItem;