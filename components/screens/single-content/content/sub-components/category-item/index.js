import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState } from "react";
import StyledCategoryItem from "./styled-category-item";
import ReactHtmlParser from "react-html-parser";
import IconButton from "@components/common/icon-button";
import info from "@public/images/icons/info.react.svg";
import {Info1} from "../../../../../../static/images/icons/info.svg";
import Video from "@public/images/icons/video.svg";

const CategoryItem = ({
  data
}) => {
  const catData = data?.attributes.pictures?.data;
  const categoryPic = catData?.find((it) => it.attributes.name === "connector_img.png");
  return (
    <StyledCategoryItem>
      <Heading level={4}><Link href={data.attributes.url}>{data.attributes.title}</Link><img src={categoryPic?.attributes.url} /></Heading>
      <div>
       <span><Link href="#"><img src={info} /></Link></span>
      </div>
      <Text>{ReactHtmlParser(data.attributes.description)}</Text>
    </StyledCategoryItem>
  );
};

export default CategoryItem;