import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import StyledBreadcrumb from "./styled-breadcrumbs";
import languages from "@config/languages.json";

const Breadcrumbs = ({ t, article, category, categories, mainCategory }) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const pathnames = article ? article?.attributes.url.split("/").filter((x) => x) : currentPath.split("/").filter((x) => x);
  const languagePrefixes = languages.map(language => language.shortKey);

  //console.log(category);
  return (
    <StyledBreadcrumb>
      <Link href="/" className="breadcrumb-links">
        {t("Home")}
      </Link>
      {pathnames?.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const isLanguagePrefix = languagePrefixes.includes(name);
          const cat = categories?.find((it) => (it?.slug_id === name || it?.attributes?.slug_id === name));
          // console.log(name);
          // console.log(cat);
          return (
            <React.Fragment key={name}>
              {!isLanguagePrefix && !isLast ? (
                <Link href={routeTo} className="breadcrumb-links">
                  {mainCategory && !cat && mainCategory}
                  {article && article?.attributes.category.data.attributes.name}
                  {cat && cat?.name || cat?.attributes.name}
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
