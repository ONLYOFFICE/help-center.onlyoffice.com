import StyledTreeView from "./styled-treeview";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GenerateTreeData from "./tree-data";
import TreeNode from "./tree-node";

const TreeView = ({ data }) => {
  const router = useRouter();
  const { page, level2, level3, level4 } = router.query;
  const routerPathHash = router.asPath.split("#")[1];

  const levelObjectData = Object.assign({},
    !level3?.includes(".aspx") && level2 && { [`/${page}/${level2}`]: true },
    !level3?.includes(".aspx") && !level3 && !level4 && router.asPath.includes(routerPathHash) && { [`/${page}/${level2}#${routerPathHash}`]: true },
    level3 && { [`/${page}/${level2}/${level3}`]: true },
    level3 && !level4 && router.asPath.includes(routerPathHash) && { [`/${page}/${level2}/${level3}#${routerPathHash}`]: true },
    level4 && { [`/${page}/${level2}/${level3}/${level4}`]: true },
    level4 && router.asPath.includes(routerPathHash) && { [`/${page}/${level2}/${level3}/${level4}#${routerPathHash}`]: true }
  );

  const [categoryIndex, setCategoryIndex] = useState(router.query.page);
  const [levelIndex, setLevelIndex] = useState(levelObjectData);

  useEffect(() => {
    const levelIndexSession = JSON.parse(sessionStorage.getItem(`${window.history.state.as}-${window.history.state.key}`));

    if (levelIndexSession) {
      setLevelIndex(levelIndexSession);
    } else {
      setLevelIndex(levelObjectData);
    }
  }, [router.asPath]);

  const toggleCategoryTree = (slug) => {
    setLevelIndex({});
    setCategoryIndex((prev) => (prev === slug ? null : slug));
  };

  const toggleLevelAccordion = (slug_id) => {
    setLevelIndex((prev) => {
      const newLevelIndex = {
        ...prev,
        [slug_id]: !prev[slug_id],
      };

      sessionStorage.setItem(`${window.history.state.as}-${window.history.state.key}`, JSON.stringify(newLevelIndex));

      return newLevelIndex;
    });
  };

  return (
    <StyledTreeView className="left-menu-treeview">
      <ul className="left-menu-wrapper">
        {GenerateTreeData(data).children.map((item, index) => (
          <li className="left-menu-category-item" key={index}>
            <button
              onClick={() => toggleCategoryTree(item.slug_id)}
              className="left-menu-category-btn"
            >
              {item.name}
            </button>

            {categoryIndex === item.slug_id && (
              <ul>
                {item.children?.map((item2, index2) => (
                  <TreeNode
                    key={index2}
                    node={item2}
                    levelIndex={levelIndex}
                    toggleLevelAccordion={toggleLevelAccordion}
                    routerPath={router.asPath.split("?")[0].split("#")[0]}
                    routerPathWithoutQuery={router.asPath.split("?")[0]}
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </StyledTreeView>
  );
};

export default TreeView;
