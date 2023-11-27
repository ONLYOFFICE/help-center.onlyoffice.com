import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "../styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryConnectorItem from "../sub-components/connector-category-item";
import CategoryItem from "../sub-components/category-item";
import filterAricles from "@utils/helpers/filterArticles";

const CenterCategoryContent = ({
  t,
  articles,
  categories,
  category,
  children,
  currentLanguage
}) => {
  const catData = categories?.find(
    (it) => it.attributes.slug_id === category
  )?.attributes;
   const data = filterAricles(articles, catData.slug_id);
   //console.log(data);
   const groupArticlesBySecondLevel = () => {
    const groupedArticles = {};

    data.forEach((article) => {
      const urlParts = article.attributes.url.split('/');

      // Проверяем, что у нас есть достаточно уровней вложенности
      if (urlParts.length >= 3) {
        const secondLevel = urlParts[2];

        // Создаем группу, если ее еще нет
        if (!groupedArticles[secondLevel]) {
          groupedArticles[secondLevel] = [];
        }

        // Добавляем статью в соответствующую группу
        groupedArticles[secondLevel].push(article);
      }
    });

    return groupedArticles;
  };

  const groupedArticles = groupArticlesBySecondLevel();
  console.log(groupedArticles);
  //  const pathnames = data?.attributes.url.split("/").slice(2, 6).filter((x) => x);
  //  pathnames?.map((name, index) => {
  //    const routeTo = `/${pathnames.slice(0)}`;
 
  //    //console.log(routeTo);
  //    return routeTo;}
  //    );
  //    console.log(pathnames);
  //    const [filteredArticles, setFilteredArticles] = useState([]);
  //    useEffect(() => {
  //      // Фильтруем статьи по второму уровню вложенности в URL
  //      const filtered = data.filter((article) => {
  //        const urlParts = article.attributes.url.split('/');
  //        return urlParts.length >= 3 && urlParts[2] === data.attributes.url;
  //      });
  //      console.log(filtered);
   
  //      setFilteredArticles(filtered);
  //    }, [data]);
  return (
    <StyledContent className="wrapper">
      {/* <Breadcrumbs t={t} category={catData} isCategory={true} />
      <Heading level={3}>{catData?.name}</Heading>
      <Text>{ReactHtmlParser(catData?.description)}</Text>
      {artData.map((it, index) => {
          return (
            <React.Fragment key={index}>
              {catData.slug_id !== "connectors" ? <CategoryItem data={it} t={t} currentLanguage={currentLanguage} /> : <CategoryConnectorItem data={it} key={index} t={t} currentLanguage={currentLanguage} />}
            </React.Fragment>
           );
      })}
      {children} */}
    </StyledContent>
  );
};

export default CenterCategoryContent;
