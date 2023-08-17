import React, { useEffect, useRef, useState } from "react";
import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import items from "./data/items";
import Heading from "@components/common/heading";

const LeftMenu = ({ t, isCategory, articles, category, categories, activeItem, onActiveItemChange, currentLanguage, ...rest }) => {
  const leftMenu = useRef();
  const catData = isCategory && categories.find(
    (it) => it.attributes.slug_id === category
  )?.attributes;
  const artData = isCategory && articles?.filter(
    (it) =>
      it.attributes.category.data.attributes.slug_id === category
  )
    .sort(function (a, b) {
      return a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase()
        ? -1
        : 1;
    });

  const [menuItems, setMenuItems] = useState([]);

  // menu generating
  useEffect(() => {
    const content = !isCategory && articles?.attributes.content;
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
    // not works bc of wrong articl id's
    items.sort((a, b) => {
      const aIndex = Array.from(headingElements).indexOf(document.getElementById(a.id).querySelector('h4, h5'));
      const bIndex = Array.from(headingElements).indexOf(document.getElementById(b.id).querySelector('h4, h5'));
      return aIndex - bIndex;
    });

    setMenuItems(items);
  }, [articles]);

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
          onActiveItemChange({
            id: activeItemId,
            text: 'Watch Video',
          });
        } else {
          onActiveItemChange({
            id: activeItemId,
            text: topHeading.textContent,
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onActiveItemChange]);

  // for release
  const hrefLang = `https://helpcenter.onlyoffice.com${currentLanguage === "en" ? "" : `/${currentLanguage}`
    }`;

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
          <Heading level={6}>{articles?.attributes.title}</Heading>
          <ul className="page">
            {articles?.attributes.videos && (
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