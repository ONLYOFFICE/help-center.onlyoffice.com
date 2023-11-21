import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import StyledCategoryItem from "../category-item/styled-category-item";
import ReactHtmlParser from "react-html-parser";
import info from "@public/images/icons/info.react.svg";
import video from "@public/images/icons/video.svg";
import gs from "@public/images/icons/start.svg";
import RawHtmlStyle from "@components/utils/rawHtmlStyles";
import leftMenuGenerating from '@utils/helpers/leftMenuGenerating';

const CategoryItem = ({
  data, t, currentLanguage
}) => {
  const catPic = data?.attributes.pictures?.data;
  const catVideo = data?.attributes.videos?.data.length;

  //get links 
  const htmlString = data?.attributes.content;
  const [h4List, setH4List] = useState([]);

  useEffect(() => {
    const container = document.createElement('div');
    container.innerHTML = htmlString;
    const h4Elements = container.querySelectorAll('h2');
    const h4Links = Array.from(h4Elements)
      .map((element) => ({
        text: element.textContent,
        href: data.attributes.url + "#" + element.parentElement.id,
      }));
    setH4List(h4Links);
  }, [htmlString]);

  // for release bottom menu from all headings
  const itemsBM = leftMenuGenerating(data, false, data.attributes.url, 'h2, h3');
  const categoryPic = catPic?.find((it) => it.attributes.name === "category_img.png");
  return (
    <StyledCategoryItem>
      <Heading level={4}><img src={categoryPic?.attributes.url} /><Link href={data.attributes.url}>{data.attributes.title}</Link></Heading>
     {itemsBM.length !== 0 && <>
     {/* <Heading level={5}>{t("Connecting")}</Heading> */}
     <ul>
        {itemsBM.map((link, index) => (
          <li key={index}>
            <a href={currentLanguage === "en" ? link.href : `/${link.href}`}>{link.text}</a>
          </li>
        ))}
      </ul></>}
    </StyledCategoryItem>
  );
};

export default CategoryItem;