import React from "react";
import Link from "next/link";
import StyledBreadcrumb from "./styled-breadcrumbs";
import languages from "@config/languages.json";

const Breadcrumbs = ({ t, article, isCategory, category }) => {
  const pathnames = article?.attributes.url.split("/").filter((x) => x);
  const languagePrefixes = languages.map(language => language.shortKey);

  return (
    <StyledBreadcrumb>
      <Link href="/" className="breadcrumb-links">
        {t("Home")}
      </Link>
      {isCategory ? (
        <React.Fragment>
          <Link href={category.url} className="breadcrumb-links last">
            {category.name}
          </Link>
        </React.Fragment>
      ) : (
        pathnames?.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const isLanguagePrefix = languagePrefixes.includes(name);

          return (
            <React.Fragment key={name}>
              {!isLanguagePrefix && !isLast ? (
                <Link href={routeTo} className="breadcrumb-links">
                  {article.attributes.category.data.attributes.name}
                </Link>
              ) : null}
              {isLast ? (
                <span className="breadcrumb-links last">
                  {article.attributes.title}
                </span>
              ) : null}
            </React.Fragment>
          );
        })
      )}
    </StyledBreadcrumb>
  );
};

export default Breadcrumbs;
