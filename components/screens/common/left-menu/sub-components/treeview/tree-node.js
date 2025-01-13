import { useState, useEffect } from "react";
import ExternalLink from "@components/common/external-link";
import InternalLink from "@components/common/internal-link";

const TreeNode = ({ node, levelIndex, toggleLevelAccordion, routerPath, routerPathWithoutQuery }) => {
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
                onClick={() => toggleLevelAccordion(node.url)}
                className={`left-menu-arrow-btn ${levelIndex[node.url] ? "active" : ""}`}
              >
              </button>
              <InternalLink
                className={`left-menu-level-link ${routerPathWithoutQuery === node.url ? "active" : ""}`}
                href={node.url}
                label={node.name || node.title}
              />
            </div>
          ) : (
            <button
              onClick={() => toggleLevelAccordion(node.name)}
              className="left-menu-level-btn"
            >
              {node.name || node.title}
            </button>
          )}

          {levelIndex[node.url ? node.url : node.name] && (
            <ul>
              {node.children?.map((child, index) => (
                <TreeNode
                  node={child}
                  key={index}
                  levelIndex={levelIndex}
                  toggleLevelAccordion={toggleLevelAccordion}
                  routerPathWithoutQuery={routerPathWithoutQuery}
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
            className={`left-menu-level-link ${routerPath === node?.url ? "active" : ""}`}
            href={node?.url}
            label={node?.name || node?.title}
          />
        )
      )}
    </li>
  );
};

export default TreeNode;