import React, { useEffect, useRef, useState, useMemo } from "react";
import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import items from "./data/items";
import Heading from "@components/common/heading";
import leftMenuGenerating from '@utils/helpers/leftMenuGenerating';

const LeftMenu = ({ t, isCategory, articles, article, category, categories, activeItem, handleActiveItemChange, currentLanguage, ...rest }) => {
  const leftMenu = useRef();
  const menuItems = leftMenuGenerating(article, isCategory, null, 'h4');
  const data = useMemo(() => {
    if (!isCategory) {
      return { catData: null, artData: null };
    }
    
    const categoryData = categories.find((it) => it.attributes.slug_id === category);
    const catData = categoryData ? categoryData.attributes : null;
    
    const artData = articles
      .filter((it) => it.attributes.category.data.attributes.slug_id === category)
      .sort((a, b) => {
        return a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase()
          ? -1
          : 1;
      });  
    return { catData, artData };
  }, [isCategory, categories, articles, category]);
    
  const catData = data.catData;
  const artData = data.artData;

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

  // for release
  const hrefLang = `https://helpcenter.onlyoffice.com${currentLanguage === "en" ? "" : `/${currentLanguage}`}`;

  return (
    <StyledLeftMenu ref={leftMenu}>
      <div className="lm-wrap">
        {/* <MiniSearch /> */}
        {isCategory ? <>
          <Heading level={6}>{catData.name}</Heading>
          <ul>
            {artData.map((article, index) => (
              <li key={index}>
                <InternalLink href={article.attributes.url}>
                  {article.attributes.title}
                </InternalLink>
              </li>
            ))}
          </ul>
        </> : <>
          <Heading level={6}>{article?.attributes.title}</Heading>
          <ul className="page">
            {article?.attributes.videos.data.length > 0 && (
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
              <InternalLink href={hrefLang + link.href} className={link.className}>
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