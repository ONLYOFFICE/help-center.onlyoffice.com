import { useState, useEffect } from 'react';

export default function leftMenuGenerating(article, isCategory, hrefDomain, selectItems) {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const content = !isCategory && article?.attributes.content;
        const headings = document.createElement('div');
        headings.innerHTML = content;
        const headingElements = headings.querySelectorAll(selectItems);

        const items = [];
    
        headingElements.forEach((heading) => {
          const text = heading.textContent;
          const item = {
            id: heading.parentElement.id,
            type: heading.tagName.toLowerCase(),
            text,
            ...(hrefDomain != null && { href: article.attributes.url + "#" + heading.parentElement.id }),
          };
          items.push(item);
        });
        items.sort((a, b) => {
          const elementA = document.getElementById(a.id);
          const elementB = document.getElementById(b.id);
        
          if (elementA && elementB) {
            const aIndex = Array.from(headingElements).indexOf(elementA.querySelector(selectItems));
            const bIndex = Array.from(headingElements).indexOf(elementB.querySelector(selectItems));
            return aIndex - bIndex;
          } else {
            return 0;
          }
        });
        setMenuItems(items);
      }, [article]);
      
      return menuItems;
}