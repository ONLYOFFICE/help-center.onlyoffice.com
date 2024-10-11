import StyledTreeView from "./styled-treeview";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InternalLink from "@components/common/internal-link";
import TreeViewItems from "./sub-components/treeview-items";

const TreeView = ({ data }) => {
  const router = useRouter();
  const [pathName, setPathName] = useState("");
  const [categoryIndex, setCategoryIndex] = useState({
    [`${router.query.page === "docs" ? "docs" : `${router.query.page}s`}`]: true
  });
  const [levelIndex, setLevelIndex] = useState({
    [!router.query.level3?.includes(".aspx") && router.query.level2 ? `/${router.query.page}/${router.query.level2}` : ""]: true,
    [router.query.level3 ? `/${router.query.page}/${router.query.level2}/${router.query.level3}` : ""]: true,
    [router.query.level4 ? `/${router.query.page}/${router.query.level2}/${router.query.level3}/${router.query.level4}` : ""]: true
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathName(`${window.location.pathname}${window.location.hash}`);
    }
  }, [router]);

  const toggleCategoryAccordion = (slug_id) => {
    setLevelIndex({});
    setCategoryIndex((prev) => ({
      [slug_id]: !prev[slug_id],
      ...Object.keys(prev).reduce((acc, key) => {
        if (key !== slug_id.toString()) {
          acc[key] = false;
        }
        return acc;
      }, {})
    }));
  };

  const toggleLevelAccordion = (slug_id) => {
    setLevelIndex((prev) => ({
      ...prev,
      [slug_id]: !prev[slug_id],
    }));
  };

  return (
    <StyledTreeView className="left-menu-treeview">
      <ul className="left-menu-wrapper">
        {data?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((item, index) => {
          const slug_id = `${item.attributes?.slug_id === "docs" ? "docs" : `${item.attributes?.slug_id}s`}`;

          return (
            <li className="left-menu-category-item" key={index}>
              <button
                onClick={() => toggleCategoryAccordion(slug_id)}
                className={`left-menu-category-btn ${categoryIndex[slug_id] ? "active" : ""}`}
              >
                {item.attributes.name}
              </button>

              {categoryIndex[slug_id] && (
                <ul>
                  {item.attributes[`category_${slug_id}`]?.data.length > 0 ? (
                    item.attributes[`category_${slug_id}`].data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((level1Item, level1Index) => (
                      <TreeViewItems 
                        level1Item={level1Item}
                        level1Index={level1Index}
                        slug_id={slug_id}
                        levelIndex={levelIndex}
                        pathName={pathName}
                        toggleLevelAccordion={toggleLevelAccordion}
                        key={level1Index}
                      />
                    ))
                  ) : (
                    <ul>
                      {item.attributes.articles?.data
                        .sort((a, b) => a.attributes.title.localeCompare(b.attributes.title))
                        .map((article, articleIndex) => (
                          <li key={articleIndex}>
                            <InternalLink
                              className="left-menu-level-link"
                              href={article.attributes.url}
                              label={article.attributes.title}
                            />
                          </li>
                        ))}
                    </ul>
                  )}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </StyledTreeView>
  );
};

export default TreeView;
