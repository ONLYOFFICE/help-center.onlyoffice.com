import { useState, useEffect } from 'react';

export default function leftMenuGenerating(article, isCategory) {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const content = !isCategory && article?.attributes.content;
        const headings = document.createElement('div');
        headings.innerHTML = content;
        // const headingElements = headings.querySelectorAll('h4, h5');
        const headingElements = headings.querySelectorAll('h4');
        const items = [];
    
        headingElements.forEach((heading) => {
          const text = heading.textContent;
          const item = {
            id: heading.parentElement.id,
            text,
          };
          items.push(item);
        });
        items.sort((a, b) => {
          const elementA = document.getElementById(a.id);
          const elementB = document.getElementById(b.id);
        
          if (elementA && elementB) {
            // const aIndex = Array.from(headingElements).indexOf(elementA.querySelector('h4, h5'));
            // const bIndex = Array.from(headingElements).indexOf(elementB.querySelector('h4, h5'));
            const aIndex = Array.from(headingElements).indexOf(elementA.querySelector('h4'));
            const bIndex = Array.from(headingElements).indexOf(elementB.querySelector('h4'));
            return aIndex - bIndex;
          } else {
            return 0;
          }
        });
        setMenuItems(items);
      }, [article]);
      
      return menuItems;
}
