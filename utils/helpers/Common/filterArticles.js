import { useState, useEffect } from 'react';

export default function filterAricles(articles, category) {
    const [artData, setArtData] = useState([]);
    
    useEffect(() => {
          const curArticle = articles
            .filter(
              (it) =>
                it.attributes.category.data.attributes.slug_id === category
            )
            .sort(function (a, b) {
              return a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase()
                ? -1
                : 1;
            });
            setArtData(curArticle);
      }, [articles, category]);
      
      return artData;
}