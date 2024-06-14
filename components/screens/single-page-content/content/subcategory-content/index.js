import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import StyledContent from "../styled-content";
import StyledSingleContent from "../../styled-single-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import LeftMenu from "../../sub-components/left-menu";
import checkPlatformMatch from "@utils/helpers/Common/checkPlatforms";
import Link from "@components/common/internal-link";
import Video from "../../sub-components/subcat-video";
import Box from "@components/common/box";

const CenterSubCategoryContent = ({
  t,
  articles,
  categories,
  category,
  currentLanguage,
  isCategory,
  pageMainCategory
}) => {
  const [wrapper, setWrapper] = useState();
  useEffect(() => {
    setWrapper(document.querySelector('.wrapper'));
  }, []);

  // left menu highlight
  const [activeItem, setActiveItem] = useState(null);
  const handleActiveItemChange = (item) => {
    setActiveItem(item);
  };
  const article = wrapper;
  const isArticle = false;
  const menuProps = {
    t,
    isCategory,
    articles,
    article,
    category,
    activeItem,
    handleActiveItemChange,
    currentLanguage,
    isArticle
  };

  const sysReqItem = articles?.find(item => item.name.includes(t('SystemRequirements')));
  const troubleShootingItem = articles?.find(item => item.name.includes(t('Troubleshooting')));
  const items = [];

  if (sysReqItem && sysReqItem.level_5.length === 1) {
    items.push(sysReqItem)
  } else if (troubleShootingItem && troubleShootingItem.level_5.length === 1) {
    items.push(troubleShootingItem);
  }

  const filteredArray = items ? articles?.filter(item => !items?.includes(item)) : articles;

  return (
    <StyledSingleContent>
      <LeftMenu {...menuProps} />
      <StyledContent className="wrapper">
        <Breadcrumbs t={t} category={category} isCategory={false} categories={categories} mainCategory={pageMainCategory} />
        <Heading level={3} className={`subcat-heading ${checkPlatformMatch(category?.name) && `dlw`}`}>{checkPlatformMatch(category?.name) && <img src={`https://static-helpcenter.onlyoffice.com/images/icons/24px_${category?.name.toLowerCase()}.react.svg`} alt={category?.name} style={{ width: "32px" }} />}{category?.name} {checkPlatformMatch(category?.name) && t("Version")}</Heading>
        {(sysReqItem && sysReqItem.level_5.length === 1) || (troubleShootingItem && troubleShootingItem.level_5.length === 1) || (troubleShootingItem && troubleShootingItem.level_5.length === 1) && 
        (<Box className="top-links">
          {sysReqItem && <Link id={sysReqItem.name.toLowerCase().replace(/ /g, "_")} className="reqs" href={sysReqItem?.level_5[0]?.url}><img src={`https://static-helpcenter.onlyoffice.com/images/icons/16px_system_requirements.react.svg`} alt={sysReqItem.name} />{sysReqItem.name}</Link>}
          {troubleShootingItem && <Link id={troubleShootingItem.name.toLowerCase().replace(/ /g, "_")} className="reqs" href={troubleShootingItem?.level_5[0]?.url}><img src={`https://static-helpcenter.onlyoffice.com/images/icons/16px_troubleshooting.react.svg`} alt={troubleShootingItem.name} />{troubleShootingItem.name}</Link>}
        </Box>)}
        {filteredArray?.map((it, index) => {
          const artList = it.level_5 || it.level_4 || it.level_3;
          const l5Length = artList?.length;
          return (
            <div className={`subcat-div ${l5Length !== 0 && 'olk'}`} key={index} id={it.name.toLowerCase().replace(/ /g, "_")}>
              {l5Length > 0 ? <Heading level={5}>{it.name}</Heading> : <Link href={it.url}>{it.name}</Link>}
              {l5Length > 0 && <ul className="classic-ul">
                {artList?.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Link href={item.url}>{item.name}</Link>
                    </li>)
                })}
              </ul>}
            </div>
          );
        })}
        <Video t={t} items={articles && articles[0].level_5} />
      </StyledContent>
    </StyledSingleContent>
  );
};

export default CenterSubCategoryContent;