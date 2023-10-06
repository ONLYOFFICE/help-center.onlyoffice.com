import React, { useEffect, useRef, useState, useMemo } from "react";
import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import items from "./data/items";
import Heading from "@components/common/heading";

const LeftMenu = ({ t, isCategory, articles, article, category, categories, activeItem, handleActiveItemChange, currentLanguage, ...rest }) => {
  const leftMenu = useRef();
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
    
  const [menuItems, setMenuItems] = useState([]);

  // menu generating
  useEffect(() => {
    const content = !isCategory && article?.attributes.content;
    const headings = document.createElement('div');
    headings.innerHTML = content;
    const headingElements = headings.querySelectorAll('h4, h5');
    const items = [];

    headingElements.forEach((heading) => {
      const text = heading.textContent;
      const item = {
        id: heading.parentElement.id,
        text,
      };
      items.push(item);
    });
    // can not work bc of wrong article id's
    items.sort((a, b) => {
      const aIndex = Array.from(headingElements).indexOf(document.getElementById(a.id).querySelector('h4, h5'));
      const bIndex = Array.from(headingElements).indexOf(document.getElementById(b.id).querySelector('h4, h5'));
      return aIndex - bIndex;
    });

    setMenuItems(items);
  }, [article]);

  // menu highlight
  useEffect(() => {
    const headings = document.querySelectorAll('h4, h5');

    const handleScroll = () => {
      const topHeading = Array.from(headings).find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight;
      });
      if (topHeading) {
        const activeItemId = topHeading.parentElement.id;
        if (activeItemId === 'watchvideo') {
          handleActiveItemChange({
            id: activeItemId,
            text: 'Watch Video',
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
            {article?.attributes.videos && (
              <li className={activeItem?.id === 'watchvideo' ? 'active' : ''}>
                <InternalLink href="#watchvideo">
                  Watch Video
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
                {link.label}
              </InternalLink>
            </li>
          ))}
        </ul>
      </div>
    </StyledLeftMenu>
  )
}

export default LeftMenu;