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
    article,
    articles,
    categories,
    isCategory,
    category,
    handleActiveItemChange,
    currentLanguage,
    t,
    activeItem,
    isArticle
  };

  const sysReqItem = articles?.find(item => item.name.includes(t('SystemRequirements')));
  const troubleShootingItem = articles?.find(item => item.name.includes(t('Troubleshooting')));
  const items = [];

  if (sysReqItem) {
    items.push(sysReqItem)
  } else if (troubleShootingItem) {
    items.push(troubleShootingItem);
  }

  const filteredArray = items ? articles?.filter(item => !items?.includes(item)) : articles;


  return (
    <StyledSingleContent>
      <LeftMenu {...menuProps} />
      <StyledContent className="wrapper">
        <Breadcrumbs t={t} category={category} isCategory={false} categories={categories} mainCategory={pageMainCategory} />
        <Heading level={3} className={`subcat-heading ${checkPlatformMatch(category?.name) && `dlw`}`}>{checkPlatformMatch(category?.name) && <img src={`https://static-helpcenter.onlyoffice.com/images/icons/24px_${category?.name.toLowerCase()}.react.svg`} alt={category?.name} style={{ width: "32px" }} />}{category?.name} {checkPlatformMatch(category?.name) && t("Version")}</Heading>
          <>
            {sysReqItem && <Link id={sysReqItem.name.toLowerCase().replace(/ /g, "_")} className="reqs" href={sysReqItem?.level_5[0]?.url}><img src={`https://static-helpcenter.onlyoffice.com/images/icons/16px_${sysReqItem.name.toLowerCase().replace(/ /g, "_")}.react.svg`} alt={sysReqItem.name} />{sysReqItem.name}</Link>}
            {troubleShootingItem && <Link id={troubleShootingItem.name.toLowerCase().replace(/ /g, "_")} className="reqs" href={troubleShootingItem?.level_5[0]?.url}><img src={`https://static-helpcenter.onlyoffice.com/images/icons/16px_${troubleShootingItem.name.toLowerCase().replace(/ /g, "_")}.react.svg`} alt={troubleShootingItem.name} />{troubleShootingItem.name}</Link>}
          </>
          {filteredArray?.map((it, index) => {
            console.log(it);
            const artList = it.level_5 || it.level_4 || it.level_3;
            const l5Length = artList?.length;
            return (
              <div className="subcat-div" key={index} id={it.name.toLowerCase()}>
                <Heading level={5}>{it.name}</Heading>
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
