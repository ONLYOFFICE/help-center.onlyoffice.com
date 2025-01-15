import StyledTreeView from "./styled-treeview";
import { forwardRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import GenerateTreeViewData from "./treeview-data";
import TreeViewNode from "./treeview-node";

const TreeView = forwardRef(({ data, setIsTransition, shouldObserve }, ref) => {
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

  const [categoryIndex, setCategoryIndex] = useState(page);
  const [levelIndex, setLevelIndex] = useState(levelObjectData);

  useEffect(() => {
    const levelIndexSession = JSON.parse(sessionStorage.getItem(`${window.history.state.as}-${window.history.state.key}`));
    setLevelIndex(levelIndexSession ?? levelObjectData);
  }, [router.asPath]);

  const toggleCategoryTreeview = (slug) => {
    setLevelIndex({});
    setCategoryIndex((prev) => (prev === slug ? null : slug));
  };

  const toggleLevelTreeview = (slug_id) => {
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
    <StyledTreeView ref={ref} className="left-menu-treeview">
      <ul>
        {GenerateTreeViewData(data).children.map((item, index) => (
          <li className="left-menu-category-item" key={index}>
            <button
              onClick={() => toggleCategoryTreeview(item.slug_id)}
              className="left-menu-category-btn"
            >
              {item.name}
            </button>

            {categoryIndex === item.slug_id && (
              <ul>
                {item.children?.map((node, nodeIndex) => (
                  <TreeViewNode
                    key={nodeIndex}
                    node={node}
                    levelIndex={levelIndex}
                    toggleLevelTreeview={toggleLevelTreeview}
                    routerPath={router.asPath.split("?")[0].split("#")[0]}
                    routerPathWithoutQuery={router.asPath.split("?")[0]}
                    setIsTransition={setIsTransition}
                    shouldObserve={shouldObserve}
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </StyledTreeView>
  );
});

export default TreeView;
