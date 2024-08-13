import { useState } from "react";
import StyledFaqContent from "./styled-faq-content";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import LeftMenu from "@components/screens/common/left-menu";
import Heading from "@components/common/heading";
import Breadcrumbs from "../common/breadcrumbs";
import { AccordionItem } from "@components/common/accordion";
import ReactHtmlParser from "react-html-parser";
import getTagsArticle from "@lib/strapi/getTagsArticle";
import ArticlePopup from "../common/article-popup";

const FaqContent = ({ t, faqData, locale }) => {
  const { name, faq_block, tags } = faqData.data[0].attributes;
  const [isExpanded, setIsExpanded] = useState(false);
  const [tagName, setTagName] = useState();
  const [tagItems, setTagItems] = useState();
  const [hasMoreTags, setHasMoreTags] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const handleTagModal = async (tagName) => {
    const data = await getTagsArticle(locale, tagName, 4, 1);

    const { articles, article_desktops, article_docs, article_docspaces, article_mobiles, article_workspaces } = data;
    const hasMoreTags = [articles, article_desktops, article_docs, article_docspaces, article_mobiles, article_workspaces].some(({ meta: { pagination } }) => pagination.pageCount > pagination.page);

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
    <StyledFaqContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={name}
        />
        <div className="wrapper">
          <Breadcrumbs
            t={t}
            pageName={name}
          />
          <Heading level={3} label={name} />
          {tags?.data && 
            <div className="tags">
              {tags?.data.map((item, index) => (
                <div
                  onClick={() => handleTagModal(item.attributes.title)}
                  className="tag"
                  key={index}
                >
                  {item.attributes.title}
                </div>
              ))}
            </div>
          }
          <div className="switcher" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? t("Collapse all") : t("Expand all")}</div>
          {faq_block.map((item, index) => (
            <div className="faq-block" key={index}>
              {faq_block.name &&
                <Heading className="faq-title" level={4} label={faq_block.name} />
              }
              <div className="faq-items">
                {item.faq_item.map((item, index) => (
                  <AccordionItem isExpanded={isExpanded} heading={item.question} key={index}>
                    {ReactHtmlParser(item.answer)}
                  </AccordionItem>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ArticlePopup
          t={t}
          locale={locale}
          tagName={tagName}
          tagItems={tagItems}
          modalActive={modalActive}
          setModalActive={setModalActive}
          hasMoreTags={hasMoreTags}
          setHasMoreTags={setHasMoreTags}
          setTagItems={setTagItems}
        />
      </StyledWrapperContent>
    </StyledFaqContent>
  );
};

export default FaqContent;
