import { useState, useEffect } from 'react';

export default function bottomMenuFromHeadings(data, selectItems, blockId, t) {
    const [hList, setHList] = useState([]);
    useEffect(() => {
      const container = document.createElement('div');
      container.innerHTML = htmlString;
      const connectingDiv = container.querySelector(`div[id^="${t(blockId)}"]`);
  
      if (connectingDiv) {
        const hElements = connectingDiv.querySelectorAll(selectItems);
        const hLinks = Array.from(hElements).map((element) => ({
          text: element.textContent,
          href: data.attributes.url + "#" + element.parentElement.id,
        }));
        setHList(hLinks);
      }
    }, [data, t]);
      return hList;
}