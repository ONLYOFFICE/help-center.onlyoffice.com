import StyledArticlePopup from "./styled-article-popup";
import getTagsArticle from "@lib/strapi/getTagsArticle";
import InternalLink from "@components/common/internal-link";
import Button from "@components/common/button";

const ArticlePopup = ({ t, locale, tagName, tagItems, setTagItems, modalActive, setModalActive, hasMoreTags, page, setHasMoreTags }) => {
  const loadMoreTags = async () => {
    const newData = await getTagsArticle(locale, tagName, 1, page + 1);

    const { articles, article_desktops, article_docs, article_docspaces, article_mobiles,  article_workspaces } = newData;
    const hasMoreTags = [articles, article_desktops, article_docs, article_docspaces, article_mobiles, article_workspaces].some(({ meta: { pagination } }) => pagination.total > pagination.page + 1);

    setHasMoreTags(hasMoreTags);
    setTagItems([
      ...tagItems,
      ...articles?.data || [],
      ...article_desktops?.data || [],
      ...article_docs?.data || [],
      ...article_docspaces?.data || [],
      ...article_mobiles?.data || [],
      ...article_workspaces?.data || [],
    ]);
  };

  return (
    <StyledArticlePopup onClick={() => setModalActive(false)} className={modalActive ? "show": ""}>
      <div className="article-popup-container">
        <div onClick={(e) => e.stopPropagation()} className="article-popup-wrapper">
          <button onClick={() => setModalActive(false)} className="article-popup-btn"></button>
          <div className="article-popup-header">
            <div className="article-popup-title">{t("ArticleWithThe")}<b>{tagName}</b>{t("Tag")}</div>
            <InternalLink className="article-popup-link" href="/tags.aspx" label={t("BrowseAllTags")} />
          </div>
          <ul className="article-popup-list">
            {tagItems?.map((item, index) => (
              <li key={index}>
                <InternalLink className="article-popup-list-link" href={item.attributes.url}>
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
              className="article-popup-more-btn"
              label={t("MoreArticles")}
              typeButton="transparent"
            />
          }
        </div>
      </div>
    </StyledArticlePopup>
  );
};

export default ArticlePopup;