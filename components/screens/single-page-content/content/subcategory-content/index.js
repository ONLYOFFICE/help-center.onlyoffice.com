import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import StyledContent from "../styled-content";
import StyledSingleContent from "../../styled-single-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import LeftMenu from "../../sub-components/left-menu";
import checkPlatformMatch from "@utils/helpers/Common/checkPlatforms";
import Link from "@components/common/internal-link";

const CenterSubCategoryContent = ({
  t,
  articles,
  categories,
  category,
  children,
  currentLanguage,
  isCategory,
  pageMainCategory
}) => {

  const article = null;
  // left menu highlight
  const [activeItem, setActiveItem] = useState(null);
  const handleActiveItemChange = (item) => {
    setActiveItem(item);
  };

  const menuProps = {
    article,
    articles,
    categories,
    isCategory,
    category,
    handleActiveItemChange,
    currentLanguage,
    children,
    t,
    activeItem,
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
        <Heading level={3} className={`subcat-heading ${checkPlatformMatch(category?.name) && `dlw`}`}>{checkPlatformMatch(category?.name) && <img src={`/images/icons/24px_${category?.name.toLowerCase()}.react.svg`} alt={category?.name} style={{ width: "32px" }} />}{category?.name} {checkPlatformMatch(category?.name) && t("Version")}</Heading>
        <>
          {sysReqItem && <Link className="reqs" href={sysReqItem?.level_5[0]?.url}><img src={`/images/icons/16px_${sysReqItem.name.toLowerCase().replace(/ /g, "_")}.react.svg`} alt={sysReqItem.name} />{sysReqItem.name}</Link>}
          {troubleShootingItem && <Link className="reqs" href={troubleShootingItem?.level_5[0]?.url}><img src={`/images/icons/16px_${troubleShootingItem.name.toLowerCase().replace(/ /g, "_")}.react.svg`} alt={troubleShootingItem.name} />{troubleShootingItem.name}</Link>}
        </>
        {filteredArray?.map((it, index) => {
          const l5Length = it.level_5.length;
          return (
            <div className="subcat-divs" key={index} id={it.name.toLowerCase()}>
              <Heading level={5}>{it.name}</Heading>
              {l5Length > 0 && <ul className="classic-ul">
                {it.level_5?.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Link href={item.url}>{item.name}</Link>
                    </li>)
                })}
              </ul>}
            </div>
          );
        })}
        {children}
      </StyledContent>
    </StyledSingleContent>
  );
};

export default CenterSubCategoryContent;
