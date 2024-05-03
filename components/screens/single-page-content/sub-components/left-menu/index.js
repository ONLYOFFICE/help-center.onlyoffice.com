import React, { useEffect, useRef, useState, useMemo } from "react";
import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import items from "./data/items";
import Heading from "@components/common/heading";
import TreeView from "@components/common/treeview";

import leftMenuGenerating from '@utils/helpers/Menu/leftMenuGenerating';
import checkPrevPage from "@utils/helpers/Menu/checkPrevPage";

const LeftMenu = ({ t, isCategory, articles, article, category, categories, activeItem, handleActiveItemChange, currentLanguage, isArticle, ...rest }) => {
  const leftMenu = useRef();
  const menuItems = !isCategory && leftMenuGenerating(article, null, isArticle ? 'h4' : 'h5, a[id]:not([id=""]', isArticle);
  const artTitle = !isArticle && article?.querySelector('h3');
  //const prevPath = categories && checkPrevPage(categories, isArticle);

  // menu highlight
  useEffect(() => {
    const headings = document.querySelectorAll('h4');
    const header = document.querySelector('header');

    const handleScroll = () => {
      const headerRect = header.getBoundingClientRect().height;
      const topHeading = Array.from(headings).find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top - headerRect >= 0 && rect.top - headerRect <= window.innerHeight;
      });
      if (topHeading) {
        const activeItemId = topHeading.parentElement.id;
        if (activeItemId === 'watchvideo') {
          handleActiveItemChange({
            id: activeItemId,
            text: 'WatchVideo',
          });
        } else {
          handleActiveItemChange({
            id: activeItemId,
            text: topHeading.textContent,
          });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleActiveItemChange]);

  return (
    <StyledLeftMenu ref={leftMenu}>
      <div className="lm-wrap">
        {/* <MiniSearch /> */}
        {/* <div className="bck-to-prev">
         {prevPath && <InternalLink href={prevPath.url}><img src="https://static-helpcenter.onlyoffice.com/images/icons/16px_back_arrow.react.svg" />{prevPath?.name}</InternalLink>}
        </div> */}
        {isCategory ? <>
           <Heading level={6}>{category?.name}</Heading>
            {articles?.map((article, index) => (
              <TreeView key={index} children={article} t={t} />
            ))}
        </> : <>
          <Heading level={6}>{isArticle ? article?.attributes?.title : artTitle?.textContent}</Heading>
          <ul className="page">
            {article?.attributes?.videos?.data.length > 0 && (
              <li className={activeItem?.id === 'watchvideo' ? 'active' : ''}>
                <InternalLink href="#watchvideo">
                  {t("WatchVideo")}
                </InternalLink>
              </li>
            )}
            {menuItems.map((item, index) => (
              <li key={index} className={activeItem && activeItem.id === item.id ? 'active' : ''} >
                <InternalLink href={`#${item.id}`}>
                  {item.text}
                </InternalLink>
              </li>
            ))}
          </ul>
        </>}
        <ul className="stat">
          {items.map((link, index) => (
            <li key={index}>
              <InternalLink href={link.href} className={link.className}>
                {t(link.label)}
              </InternalLink>
            </li>
          ))}
        </ul>
      </div>
    </StyledLeftMenu>
  )
}

export default LeftMenu;