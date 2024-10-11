import StyledLeftMenu from "./styled-left-menu";
import { forwardRef, useState, useEffect, useRef, useCallback } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import InternalLink from "@components/common/internal-link";
import SearchArea from "@components/screens/common/search-area";
import Heading from "@components/common/heading";
import TreeView from "@components/screens/common/left-menu/sub-components/treeview";

const LeftMenu = forwardRef(({
  t,
  pageName,
  headings,
  leftMenuIsOpen,
  setLeftMenuIsOpen,
  leftMenuData
}, ref) => {
  const [scrollVisible, setScrollVisible] = useState(false);
  const timeoutRef = useRef(null);

  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const handleVisibility = useCallback(() => {
    setScrollVisible(true);
    clearTimeoutRef();
    timeoutRef.current = setTimeout(() => {
      setScrollVisible(false);
    }, 2000);
  }, [clearTimeoutRef]);

  useEffect(() => {
    return () => {
      clearTimeoutRef();
    };
  }, [clearTimeoutRef]);

  return (
    <>
      <StyledLeftMenu
        ref={ref}
        onMouseEnter={handleVisibility}
        onMouseLeave={() => setScrollVisible(false)}
        className={`left-menu ${leftMenuIsOpen ? "active" : ""}`}
      >
        <div className="left-menu-wrapper">
          <SearchArea
            className="left-menu-search"
            placeholder={t("Search in Help Center")}
            isLeftMenu={true}
          />
          <Scrollbar onScroll={handleVisibility} className={scrollVisible ? "scroll-visible" : ""}>
            {headings && headings.length != 0 && pageName &&
              <Heading className="left-menu-title" level={6} label={pageName} />
            }
            {headings?.length > 0 ? (
              <ul className="left-menu-items left-menu-articles">
                {headings.map((item, index) => (
                  <li className={index === 0 ? "active" : ""} key={index}>
                    <InternalLink onClick={() => setLeftMenuIsOpen(false)} href={`#${item.id}`} label={item.text} />
                  </li>
                ))}
              </ul>
            ) : leftMenuData?.data?.length > 0 ? (
              <TreeView data={leftMenuData} />
            ): null}
            <ul className="left-menu-info">
              <li><InternalLink href="/glossary.aspx" className="glossary" label={t("Glossary")} /></li>
              <li><InternalLink href="/video.aspx" className="video" label={t("Video")} /></li>
              <li><InternalLink href="/faq/faq.aspx" className="faq" label={t("FAQ")} /></li>
            </ul>
          </Scrollbar>
        </div>
      </StyledLeftMenu>
    </>
  )
});

export default LeftMenu;