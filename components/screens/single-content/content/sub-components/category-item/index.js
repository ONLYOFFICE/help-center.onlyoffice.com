import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import StyledCategoryItem from "./styled-category-item";
import ReactHtmlParser from "react-html-parser";
import info from "@public/images/icons/info.react.svg";
import video from "@public/images/icons/video.svg";
import gs from "@public/images/icons/start.svg";
import RawHtmlStyle from "@components/utils/rawHtmlStyles";

const CategoryItem = ({
  data, t, currentLanguage
}) => {
  const catPic = data?.attributes.pictures?.data;
  const catVideo = data?.attributes.videos?.data.length;
  //get links for pages in bottom block
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

  const [h5List, setH5List] = useState([]);

  useEffect(() => {
    const container = document.createElement('div');
    container.innerHTML = htmlString;
    const connectingDiv = container.querySelector(`div[id^="${t('ConnectingId')}"]`);

    if (connectingDiv) {
      const h5Elements = connectingDiv.querySelectorAll('h5');
      const h5Links = Array.from(h5Elements).map((element) => ({
        text: element.textContent,
        href: data.attributes.url + "#" + element.parentElement.id,
      }));
      setH5List(h5Links);
    }
  }, [htmlString, t]);
  const gsItem = h4List.find(item => item.href.includes(t('GettingStartedId')));
  const catUrlGS = gsItem ? gsItem.href : null;
  const aboutItem = h4List.find(item => item.href.includes(t('AboutId')));
  const catUrlAbout = aboutItem ? aboutItem.href : null;
  const catUrlVideo = data?.attributes.url + "#watchvideo";
  const categoryPic = catPic?.find((it) => it.attributes.name === "connector_img.png");
  return (
    <StyledCategoryItem>
      <Heading level={4}><Link href={data.attributes.url}>{data.attributes.title}</Link><img src={categoryPic?.attributes.url} /></Heading>
      <div className="main_links">
        {catUrlGS && <div><img src={gs.src} /><Link href={catUrlGS}>{t("GettingStarted")}</Link></div>}
        {catUrlAbout && <div><img src={info.src} /><Link href={catUrlAbout}>{t("About")}</Link></div>}
        {catVideo > 0 && <div><img src={video.src} /><Link href={catUrlVideo}>{t("WatchVideo")}</Link></div>}
      </div>
     <Text><RawHtmlStyle>{ReactHtmlParser(data.attributes.description)}</RawHtmlStyle></Text> 
     {h5List.length !== 0 && <><Heading level={5}>{t("Connecting")}</Heading>
     <ul>
        {h5List.map((link, index) => (
          <li key={index}>
            <a href={currentLanguage === "en" ? link.href : `/${link.href}`}>{link.text}</a>
          </li>
        ))}
      </ul></>}
    </StyledCategoryItem>
  );
};

export default CategoryItem;