import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "../styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryConnectorItem from "../sub-components/connector-category-item";
import CategoryItem from "../../../category-content/sub-components/category-item";
import filterAricles from "@utils/helpers/filterArticles";

const CenterCategoryContent = ({
  t,
  articles,
  categories,
  category,
  children,
  currentLanguage
}) => {
  const [artData, setArtData] = useState(null);
  const catData = categories?.find(
    (it) => it.attributes.slug_id === category
  )?.attributes;
  const data = filterAricles(articles, catData.slug_id);

  // function to make articles group by first level of url
  const groupArticlesBySecondLevel = () => {
    const groupedArticles = {};

    data.forEach((article) => {
      const urlParts = article.attributes.url.split('/');
      if (urlParts.length >= 3) {
        const secondLevel = urlParts[2];
        if (!groupedArticles[secondLevel]) {
          groupedArticles[secondLevel] = [];
        }
        groupedArticles[secondLevel].push(article);
      }
    });

    return groupedArticles;
  };

  const groupedArticles = groupArticlesBySecondLevel();
  console.log(groupedArticles);

  useEffect(() => {
    if (catData.slug_id !== "connectors") {
      setArtData(groupedArticles);
    } else {
      setArtData(data);
    }
  }, [catData, articles]);
  console.log(artData);
  return (
    <StyledContent className="wrapper">
      <Breadcrumbs t={t} category={catData} isCategory={true} />
      <Heading level={3}>{catData?.name}</Heading>
      <Text>{ReactHtmlParser(catData?.description)}</Text>
      {/* {artData.map((it, index) => {
          return (
            <React.Fragment key={index}>
              {catData.slug_id !== "connectors" ? <CategoryItem data={it} t={t} currentLanguage={currentLanguage} /> : <CategoryConnectorItem data={it} key={index} t={t} currentLanguage={currentLanguage} />}
            </React.Fragment>
           );
      })} */}
      {children}
    </StyledContent>
  );
};

export default CenterCategoryContent;
