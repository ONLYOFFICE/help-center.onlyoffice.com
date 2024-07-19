import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import MiniSearch from "./sub-components/search";
import Heading from "@components/common/heading";
import TreeView from "@components/screens/common/treeview";

const LeftMenu = ({
    t,
    isArticle,
    isLevel4CategoryPage,
    pageName,
    pageItems,
    pageItemsLevel,
    categorySlug,
    headings,
    activeSection
  }) => {
  return (
    <StyledLeftMenu>
      <div className="lm-wrap">
        <MiniSearch />
        <Heading level={6} label={pageName} />

        {isArticle || isLevel4CategoryPage ? (
          <ul className="page">
            {headings.map((item, index) => (
              <li className={activeSection === item.id ? "active" : ""} key={index}>
                <InternalLink href={`#${item.id}`} label={item.text} />
              </li>
            ))}
          </ul>
        ) : (
          <div>
            {pageItems?.map((article, index) => (
              <TreeView
                t={t}
                key={index}
                article={article}
                pageItemsLevel={pageItemsLevel}
                categorySlug={categorySlug}
              />
            ))}
          </div>
        )}

        <ul className="stat">
          <li><InternalLink href="/glossary.aspx" className="glossary" label={t("Glossary")} /></li>
          <li><InternalLink href="/video.aspx" className="video" label={t("Video")} /></li>
          <li><InternalLink href="/faq/faq.aspx" className="faq" label={t("FAQ")} /></li>
        </ul>
      </div>
    </StyledLeftMenu>
  )
}

export default LeftMenu;