import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import React, { useState, useEffect } from "react";
import StyledCategoryItem from "../category-item/styled-category-item";
import checkPlatformMatch from "@utils/helpers/Common/checkPlatforms";

const CategoryDocsItem = ({
  data, t, currentLanguage
}) => {
  const categoryPic = data?.name.toLowerCase().replace(/ /g, "_");
  const level = data?.level_3 || data?.level_4;
  const path = checkPlatformMatch(data.name) ? `24px_${categoryPic}` : `${categoryPic}`;
  const sysReqItem = level?.find(item => item.name.includes(t('SystemRequirements')));
  const troubleShootingItem = level?.find(item => item.name.includes(t('Troubleshooting')));

  return (
    <StyledCategoryItem>
      <Heading level={4}><img src={`https://static-helpcenter.onlyoffice.com/images/icons/${path}.react.svg`} alt={data.name} style={{ fontSize: "10px" }} /><Link href={data.url}>{data.name} {checkPlatformMatch(data.name) && t("Version")}</Link></Heading>
      <ul className="subcategory">
        {level?.map((it, index) => {
          const levelpic = it?.name.toLowerCase();
          return (
            <React.Fragment key={index}>
              {
                checkPlatformMatch(it.name) ? <li className="sublink dlw" key={index}>
                  <Link href={it.url}>
                    <img src={`https://static-helpcenter.onlyoffice.com/images/icons/16px_${levelpic}.react.svg`} alt={it.name} style={{ fontSize: "10px" }} />
                    {it.name} {t("Version")}</Link>
                </li> : sysReqItem || troubleShootingItem ? <li className="sublink" key={index}>
                  <Link href={it.level_5[0]?.url}>{it.name}</Link>
                </li> : <li className="sublink" key={index}>
                  <Link href={it.url}>{it.name}</Link>
                </li>

              }
            </React.Fragment>
          )
        })}
      </ul>
    </StyledCategoryItem>
  );
};

export default CategoryDocsItem;