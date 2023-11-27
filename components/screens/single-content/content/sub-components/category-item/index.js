import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import StyledCategoryItem from "./styled-category-item";
import ReactHtmlParser from "react-html-parser";
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
    const h4Elements = container.querySelectorAll('h4');
    const h4Links = Array.from(h4Elements)
      .map((element) => ({
        text: element.textContent,
        href: data.attributes.url + "#" + element.parentElement.id,
      }));
    setH4List(h4Links);
  }, [htmlString]);

  // for release bottom menu from all headings
  const itemsBM = leftMenuGenerating(data, false, data.attributes.url, 'h4, h5');

  const gsItem = h4List.find(item => item.href.includes(t('GettingStartedId')));
  const catUrlGS = gsItem ? gsItem.href : null;
  const aboutItem = h4List.find(item => item.href.includes(t('AboutId')));
  const catUrlAbout = aboutItem ? aboutItem.href : null;
  const catUrlVideo = data?.attributes.url + "#watchvideo";
  const categoryPic = catPic?.find((it) => it.attributes.name === "connector_img.svg");
  return (
    <StyledCategoryItem>
      <Heading level={4}><Link href={data.attributes.url}>{data.attributes.title}</Link><img src={categoryPic?.attributes.url} /></Heading>
      <div className="main_links">
        {catUrlGS && <div><img src={'https://static-helpcenter.onlyoffice.com/images/icons/start.react.svg'} /><Link href={catUrlGS}>{t("GettingStarted")}</Link></div>}
        {catUrlAbout && <div><img src={'https://static-helpcenter.onlyoffice.com/images/icons/info.react.svg'} /><Link href={catUrlAbout}>{t("About")}</Link></div>}
        {catVideo > 0 && <div><img src={'https://static-helpcenter.onlyoffice.com/images/icons/video.react.svg'} /><Link href={catUrlVideo}>{t("WatchVideo")}</Link></div>}
      </div>
      <Text><RawHtmlStyle>{ReactHtmlParser(data.attributes.description)}</RawHtmlStyle></Text>
      {itemsBM.length !== 0 && (
        <ul>
          {itemsBM.map((link, index) => (
            <React.Fragment key={index}>
              {link.type === "h4" ? (
                <li>
                  <a href={currentLanguage === "en" ? link.href : `/${link.href}`}><Heading level={5}>{link.text}</Heading></a>
                </li>
              ) : link.type === "h5" && (
                <li className="sublink">
                  <a href={currentLanguage === "en" ? link.href : `/${link.href}`}>{link.text}</a>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
    </StyledCategoryItem>
  );
};

export default CategoryItem;