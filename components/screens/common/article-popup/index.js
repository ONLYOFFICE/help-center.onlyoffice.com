import StyledArticlePopup from "./styled-article-popup";
import { useState } from "react";
import getTagsArticle from "@lib/strapi/getTagsArticle";
import InternalLink from "@components/common/internal-link";
import Button from "@components/common/button";

const ArticlePopup = ({ t, locale, tagName, tagItems, setTagItems, modalActive, setModalActive, hasMoreTags, setHasMoreTags }) => {
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreTags = async () => {
    setIsLoading(true);
    const newData = await getTagsArticle(locale, tagName, 4, page);
    const { articles, article_desktops, article_docs, article_docspaces, article_mobiles,  article_workspaces } = newData;
    const hasMoreTags = [articles, article_desktops, article_docs, article_docspaces, article_mobiles, article_workspaces].some(({ meta: { pagination } }) => pagination.pageCount > pagination.page);

    setHasMoreTags(hasMoreTags);
    setPage(prevPage => prevPage + 1);
    setTagItems([
      ...tagItems,
      ...articles?.data || [],
      ...article_desktops?.data || [],
      ...article_docs?.data || [],
      ...article_docspaces?.data || [],
      ...article_mobiles?.data || [],
      ...article_workspaces?.data || [],
    ]);
    setIsLoading(false);
  };

  const closePopup = () => {
    setModalActive(false);
    setPage(2);
  };

  return (
    <StyledArticlePopup onClick={closePopup} className={modalActive ? "show": ""}>
      <div className="article-popup-container">
        <div onClick={(e) => e.stopPropagation()} className="article-popup-wrapper">
          <button onClick={closePopup} className="article-popup-btn"></button>
          <div className="article-popup-header">
            <div className="article-popup-title">{t("ArticleWithThe")}<b>{tagName}</b>{t("Tag")}</div>
            <InternalLink className="article-popup-link" href="/tags.aspx" label={t("BrowseAllTags")} />
          </div>
          <ul className="article-popup-list">
            {tagItems?.map((item, index) => (
              <li key={index}>
                <InternalLink onClick={closePopup} className="article-popup-list-link" href={item.attributes.url}>
                  {item.attributes?.mark?.data?.attributes.name &&
                    <span className="mark" style={{ backgroundColor: item.attributes?.mark.data?.attributes.color }}>
                      {item.attributes?.mark.data?.attributes.name}
                    </span>
                  }
                  <span className="article-popup-list-title">{item.attributes?.title}</span>
                  {item.attributes?.subtitle &&
                    <span className="article-popup-list-subtitle">({item.attributes.subtitle})</span>
                  }
                </InternalLink>
              </li>
            ))}
          </ul>
          {hasMoreTags &&
            <Button
              onClick={() => loadMoreTags()}
              className={`article-popup-more-btn ${isLoading ? "loading" : ""}`}
              label={t("MoreArticles")}
              typeButton="transparent"
              isDisabled={isLoading}
            />
          }
        </div>
      </div>
    </StyledArticlePopup>
  );
};

export default ArticlePopup;