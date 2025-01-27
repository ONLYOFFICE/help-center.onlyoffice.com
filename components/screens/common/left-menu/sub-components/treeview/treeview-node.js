import { useState, useEffect } from "react";
import ExternalLink from "@components/common/external-link";
import InternalLink from "@components/common/internal-link";

const TreeViewNode = ({ node, levelIndex, toggleLevelTreeview, routerPath, routerPathWithoutQuery, setIsTransition, shouldObserve }) => {
  const [externalUrl, setExternalUrl] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const linkUrl = new URL(node.url, window.location.origin);
      setExternalUrl(linkUrl.origin !== window.location.origin);
      setIsRendered(true);
    }
  }, []);

  const enableObserver = () => {
    shouldObserve.current = true;
  };
  
  const disableObserver = () => {
    shouldObserve.current = false;
  };

  return (
    <li>
      {node?.children?.length > 0 ? (
        <>
          {node.url ? (
            <div className="left-menu-level-item">
              <button
                onClick={() => {
                  toggleLevelTreeview(node.url);
                  disableObserver();
                }}
                className={`left-menu-arrow-btn ${isRendered && levelIndex[node.url] ? "active" : ""}`}
              >
              </button>
              <InternalLink
                onClick={() => {
                  window.innerWidth <= 1024 && setIsTransition(false);
                  enableObserver();
                }}
                className={`left-menu-level-link ${isRendered && routerPathWithoutQuery === node.url ? "active" : ""}`}
                href={node.url}
                label={node.name || node.title}
              />
            </div>
          ) : (
            <button
              onClick={() => {
                toggleLevelTreeview(node.name);
                disableObserver();
              }}
              className={`left-menu-level-btn ${isRendered && levelIndex[node.url ? node.url : node.name] ? "active" : ""}`}
            >
              {node.name || node.title}
            </button>
          )}

          {levelIndex[isRendered && node.url ? node.url : node.name] && (
            <ul>
              {node.children?.map((node, indexIndex) => (
                <TreeViewNode
                  node={node}
                  key={indexIndex}
                  levelIndex={levelIndex}
                  toggleLevelTreeview={toggleLevelTreeview}
                  routerPathWithoutQuery={routerPathWithoutQuery}
                  setIsTransition={setIsTransition}
                  shouldObserve={shouldObserve}
                />
              ))}
            </ul>
          )}
        </>
      ) : (
        externalUrl ? (
          <ExternalLink
            className={`left-menu-level-link ${isRendered && routerPath === node?.url ? "active" : ""}`}
            href={node?.url}
            label={node?.name || node?.title}
          />
        ) : (
          <InternalLink
            onClick={() => {
              window.innerWidth <= 1024 && setIsTransition(false);
              enableObserver();
            }}
            className={`left-menu-level-link ${isRendered && routerPath === node?.url ? "active" : ""}`}
            href={node?.url}
            label={node?.name || node?.title}
          />
        )
      )}
    </li>
  );
};

export default TreeViewNode;