import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import StyledBreadcrumb from "./styled-breadcrumbs";
import languages from "@config/languages.json";
import findCategory from "@utils/helpers/Common/findLvlCategories";

const Breadcrumbs = ({ t, article, category, categories, mainCategory, pagePath }) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const checkCategory = article && article.attributes.category.data.attributes.slug_id == "connectors" ? article?.attributes.url : pagePath;
  const pathnames = article ? checkCategory?.split("/").filter((x) => x) : currentPath.split("/").filter((x) => x);
  const languagePrefixes = languages.map(language => language.shortKey);
  
  return (
    <StyledBreadcrumb>
      <Link href="/" className="breadcrumb-links">
        {t("Home")}
      </Link>
      {pathnames?.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const isLanguagePrefix = languagePrefixes.includes(name);
          const cat = categories && findCategory(categories, name.split('#')[0]);
          return (
            <React.Fragment key={index}>
              {!isLanguagePrefix && !isLast ? (
                <Link href={routeTo} className="breadcrumb-links">
                  {mainCategory && index == 0 && mainCategory}
                  {cat && index != 0 && cat?.name}
                </Link>
              ) : null}
              {isLast ? (
                <span className="breadcrumb-links last">
                  {article ? article?.attributes.title : category?.name}
                </span>
              ) : null}
            </React.Fragment>
          );
        })}
    </StyledBreadcrumb>
  );
};

export default Breadcrumbs;
