
import StyledTreeView from "./styled-treeview";
import { useState, useRef } from "react";
import InternalLink from "@components/common/internal-link";
import Heading from "@components/common/heading";

const TreeView = ({ t, article, pageItemsLevel, categorySlug }) => {
  const content = useRef();
  const [active, setActive] = useState(true);

  return (
    <StyledTreeView>
      <Heading
        onClick={() => setActive(!active)}
        className="tree-heading"
        level={6}
      >
        <img 
          src="https://static-helpcenter.onlyoffice.com/images/icons/arrow-right.react.svg" 
          style={!active ? { transform: "rotate(0)" } : { transform: "rotate(90deg)" }}
        />
        {article.attributes.name}
      </Heading>
      <div className="tree-items"
        ref={content}
        style={{ maxHeight: `${active ? `${content?.current?.scrollHeight}px` : "0px"}` }}
      >
        {article.attributes[`level_${pageItemsLevel}_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`]?.data.map((item, index) => (
          <InternalLink
            className="treeview-link"
            key={index}
            href={item.attributes.url}
          >
            {item.attributes.name}
          </InternalLink>
        ))}
      </div>
    </StyledTreeView>
  );
};


export default TreeView;
