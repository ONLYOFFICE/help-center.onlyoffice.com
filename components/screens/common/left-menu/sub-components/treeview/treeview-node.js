import { useState, useEffect } from "react";
import ExternalLink from "@components/common/external-link";
import InternalLink from "@components/common/internal-link";

const TreeViewNode = ({ node, levelIndex, toggleLevelTreeview, routerPath, routerPathWithoutQuery, setIsTransition }) => {
  const [externalUrl, setExternalUrl] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const linkUrl = new URL(node.url, window.location.origin);
      setExternalUrl(linkUrl.origin !== window.location.origin);
    }
  }, []);

  return (
    <li>
      {node?.children?.length > 0 ? (
        <>
          {node.url ? (
            <div className="left-menu-level-item">
              <button
                onClick={() => toggleLevelTreeview(node.url)}
                className={`left-menu-arrow-btn ${levelIndex[node.url] ? "active" : ""}`}
              >
              </button>
              <InternalLink
                onClick={() => window.innerWidth < 1024 && setIsTransition(false)}
                className={`left-menu-level-link ${routerPathWithoutQuery === node.url ? "active" : ""}`}
                href={node.url}
                label={node.name || node.title}
              />
            </div>
          ) : (
            <button
              onClick={() => toggleLevelTreeview(node.name)}
              className="left-menu-level-btn"
            >
              {node.name || node.title}
            </button>
          )}

          {levelIndex[node.url ? node.url : node.name] && (
            <ul>
              {node.children?.map((node, indexIndex) => (
                <TreeViewNode
                  node={node}
                  key={indexIndex}
                  levelIndex={levelIndex}
                  toggleLevelTreeview={toggleLevelTreeview}
                  routerPathWithoutQuery={routerPathWithoutQuery}
                  setIsTransition={setIsTransition}
                />
              ))}
            </ul>
          )}
        </>
      ) : (
        externalUrl ? (
          <ExternalLink
            className={`left-menu-level-link ${routerPath === node?.url ? "active" : ""}`}
            href={node?.url}
            label={node?.name || node?.title}
          />
        ) : (
          <InternalLink
            onClick={() => window.innerWidth < 1024 && setIsTransition(false)}
            className={`left-menu-level-link ${routerPath === node?.url ? "active" : ""}`}
            href={node?.url}
            label={node?.name || node?.title}
          />
        )
      )}
    </li>
  );
};

export default TreeViewNode;