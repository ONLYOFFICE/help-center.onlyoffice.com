import StyledTagsContent from "./styled-tags-content";
import { useState } from "react";
import getTagsArticle from "@lib/strapi/getTagsArticle";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import ArticlePopup from "../common/article-popup";
import AlphabetContainer from "../common/alphabet-container";

const TagsContent = ({ t, locale, tagsData, leftMenuMobile }) => {
  const [modalActive, setModalActive] = useState(false);
  const [tagName, setTagName] = useState();
  const [tagItems, setTagItems] = useState();
  const [hasMoreTags, setHasMoreTags] = useState(false);
  const page = 1;

  const handleTagModal = async (tagName) => {
    const data = await getTagsArticle(locale, tagName, 2, page);

    const { articles, article_desktops, article_docs, article_docspaces, article_mobiles,  article_workspaces } = data;
    const hasMoreTags = [articles, article_desktops, article_docs, article_docspaces, article_mobiles, article_workspaces].some(({ meta: { pagination } }) => pagination.total > pagination.page + 1);

    setHasMoreTags(hasMoreTags);
    setTagItems([
      ...articles?.data || [],
      ...article_desktops?.data || [],
      ...article_docs?.data || [],
      ...article_docspaces?.data || [],
      ...article_mobiles?.data || [],
      ...article_workspaces?.data || [],
    ]);
    setTagName(tagName);
    setModalActive(true);
  };

  return (
    <StyledTagsContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          backBtnName={t("Home")}
          backBtnUrl="/"
          leftMenuMobile={leftMenuMobile}
        />
        <div className="wrapper">
          <AlphabetContainer
            t={t}
            data={tagsData}
            handleTagModal={handleTagModal}
            isTagPage={true}
          />
          <ArticlePopup
            t={t}
            locale={locale}
            tagName={tagName}
            tagItems={tagItems}
            modalActive={modalActive}
            setModalActive={setModalActive}
            hasMoreTags={hasMoreTags}
            page={page}
            setHasMoreTags={setHasMoreTags}
            setTagItems={setTagItems}
          />
        </div>
      </StyledWrapperContent>
    </StyledTagsContent>
  );
};

export default TagsContent;
