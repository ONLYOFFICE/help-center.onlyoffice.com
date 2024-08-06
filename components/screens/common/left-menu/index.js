import StyledLeftMenu from "./styled-left-menu";
import { Scrollbar } from "react-scrollbars-custom";
import InternalLink from "@components/common/internal-link";
import SearchArea from "@components/screens/common/search-area";
import Heading from "@components/common/heading";
import TreeView from "@components/screens/common/left-menu/sub-components/treeview";

const LeftMenu = ({
    t,
    isArticle,
    isLevel4CategoryPage,
    pageName,
    pageItems,
    pageItemsLevel,
    categorySlug,
    headings,
    activeSection,
    backBtnUrl,
    backBtnName,
    leftMenuMobile,
    setLeftMenuMobile
  }) => {
  return (
    <StyledLeftMenu className={`left-menu ${leftMenuMobile ? "active" : ""}`}>
      <div className="left-menu-wrapper">
        <SearchArea
          className="left-menu-search"
          placeholder={t("Search in Help Center")}
          isLeftMenu={true}
        />
        {backBtnUrl &&
          <InternalLink className="left-menu-link" href={backBtnUrl} label={backBtnName} />
        }

        <Scrollbar>
          {pageName &&
            <Heading className="left-menu-title" level={6} label={pageName} />
          }

          {isArticle || isLevel4CategoryPage ? (
            <ul className="left-menu-items left-menu-articles">
    
              {headings.map((item, index) => (
                <li className={activeSection === item.id ? "active" : ""} key={index}>
                  <InternalLink onClick={() => setLeftMenuMobile(false)} href={`#${item.id}`} label={item.text} />
                </li>
              ))}
            </ul>
          ) : pageItems ? (
            <ul className="left-menu-items">
              {pageItems?.map((article, index) => (
                <TreeView
                  key={index}
                  article={article}
                  pageItemsLevel={pageItemsLevel}
                  categorySlug={categorySlug}
                />
              ))}
            </ul>
          ) : null}
          <ul className="left-menu-info">
            <li><InternalLink href="/glossary.aspx" className="glossary" label={t("Glossary")} /></li>
            <li><InternalLink href="/video.aspx" className="video" label={t("Video")} /></li>
            <li><InternalLink href="/faq/faq.aspx" className="faq" label={t("FAQ")} /></li>
          </ul>
        </Scrollbar>
      </div>
    </StyledLeftMenu>
  )
}

export default LeftMenu;