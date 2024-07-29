
import StyledTreeView from "./styled-treeview";
import { useState, useRef } from "react";
import InternalLink from "@components/common/internal-link";

const TreeView = ({ article, pageItemsLevel, categorySlug }) => {
  const content = useRef();
  const [active, setActive] = useState(true);

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
        {article.attributes[`level_${pageItemsLevel}_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`]?.data.map((item, index) => (
          <li className="treeview-item" key={index}>
            <InternalLink
              className="treeview-link"
              href={item.attributes.url}
              label={item.attributes.name}
            />
          </li>
        ))}
      </ul>
    </StyledTreeView>
  );
};


export default TreeView;
