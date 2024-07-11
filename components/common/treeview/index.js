
import React, { useState, useRef } from "react";
import StyledTreeView from "./styled-treeview";
import Link from "@components/common/internal-link";
import Heading from "@components/common/heading";
import checkPlatformMatch from "@utils/helpers/Common/checkPlatforms";

const TreeView = ({ children, t, pageItemsLevel, categorySlug, ...rest }) => {
  const content = useRef();
  const [active, setActive] = useState(true);
  const items = children?.level_3 || children?.level_4;

  return (
    <StyledTreeView {...rest}>
      <Heading
        level={6}
        style={{ cursor: "pointer" }}
        className="tree__heading"
        onClick={() => setActive(!active)}
      >
        <img src="https://static-helpcenter.onlyoffice.com/images/icons/arrow-right.react.svg" style={!active ? { transform: "rotate(0)" } : { transform: "rotate(90deg)" }} />
        {children.attributes.name}
      </Heading>
      <div className="tree__items"
        ref={content}
        style={{
          maxHeight: `${active ? `${content?.current?.scrollHeight}px` : "0px"}`,
        }}
      >
        {children.attributes[`level_${pageItemsLevel}_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`]?.data.map((item, index) => (
          <Link
            className="treeview__link"
            key={index}
            href={item.attributes.url}
          >
            {item.attributes.name}
          </Link>
        ))}
      </div>
    </StyledTreeView>
  );
};


export default TreeView;
