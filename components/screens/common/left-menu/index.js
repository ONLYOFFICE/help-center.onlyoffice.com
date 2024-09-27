import StyledLeftMenu from "./styled-left-menu";
import { forwardRef } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import InternalLink from "@components/common/internal-link";
import SearchArea from "@components/screens/common/search-area";
import Heading from "@components/common/heading";
import TreeView from "@components/screens/common/left-menu/sub-components/treeview";

const LeftMenu = forwardRef(({
  t,
  isArticle,
  isLevel4CategoryPage,
  pageName,
  categoryData,
  leftMenuLevel,
  categorySlug,
  headings,
  backBtnUrl,
  backBtnName,
  leftMenuMobile,
  setLeftMenuMobile
}, ref) => {
  return (
    <StyledLeftMenu ref={ref} className={`left-menu ${leftMenuMobile ? "active" : ""}`}>
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
          {headings && headings.length != 0 && pageName &&
            <Heading className="left-menu-title" level={6} label={pageName} />
          }
          <ul className={`left-menu-items ${isArticle || isLevel4CategoryPage ? "left-menu-articles" : ""}`}>
            {isArticle || isLevel4CategoryPage ? (
              headings.map((item, index) => (
                <li className={index === 0 ? "active" : ""} key={index}>
                  <InternalLink onClick={() => setLeftMenuMobile(false)} href={`#${item.id}`} label={item.text} />
                </li>
              ))
            ) : categoryData ? (
              categoryData.map((article, index) => (
                <TreeView
                  key={index}
                  article={article}
                  leftMenuLevel={leftMenuLevel}
                  categorySlug={categorySlug}
                />
              ))
            ) : null}
          </ul>
          <ul className="left-menu-info">
            <li><InternalLink href="/glossary.aspx" className="glossary" label={t("Glossary")} /></li>
            <li><InternalLink href="/video.aspx" className="video" label={t("Video")} /></li>
            <li><InternalLink href="/faq/faq.aspx" className="faq" label={t("FAQ")} /></li>
          </ul>
        </Scrollbar>
      </div>
    </StyledLeftMenu >
  )
});

export default LeftMenu;