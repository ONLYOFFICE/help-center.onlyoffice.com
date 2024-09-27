
import StyledTreeView from "./styled-treeview";
import { useState, useRef } from "react";
import InternalLink from "@components/common/internal-link";

const TreeView = ({ article, leftMenuLevel, categorySlug }) => {
  const content = useRef();
  const [active, setActive] = useState(false);

  const categorySlugMany = categorySlug === "docs" ? "docs" : `${categorySlug}s`;
  const levelLinks = article.attributes[`level_${leftMenuLevel}_${categorySlugMany}`]?.data || [];
  const articleLinks = article.attributes[`article_${categorySlugMany}`]?.data || [];
  const sortByName = (a, b) => (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title);

  const treeViewItems = [
    ...levelLinks.filter(item => item.attributes.icon_small?.data?.attributes.url).sort(sortByName),
    ...levelLinks.filter(item => !item.attributes.icon_small?.data?.attributes.url).sort(sortByName),
    ...articleLinks.sort(sortByName)
  ];

  return (
    <StyledTreeView active={active}>
      <button
        onClick={() => setActive(!active)}
        className="treeview-heading"
      >
        {article.attributes.name}
      </button>
      <ul className="treeview-items"
        ref={content}
        style={{ maxHeight: `${active ? `${content?.current?.scrollHeight}px` : "0px"}` }}
      >
        {treeViewItems.map((item, index) => (
          <li className="treeview-item" key={index}>
            <InternalLink
              className="treeview-link"
              href={item.attributes.url}
              label={item.attributes.name || item.attributes.title}
            />
          </li>
        ))}
      </ul>
    </StyledTreeView>
  );
};


export default TreeView;
