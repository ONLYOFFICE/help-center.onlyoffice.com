import { StyledLeftMenu, StyledOverlay } from "./styled-left-menu";
import { forwardRef, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const timeoutRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const scrollTopTimeoutRef = useRef(null);
  const treeViewRef = useRef(null);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [scrollTopHeight, setScrollTopHeight] = useState(undefined);

  const handleVisibility = () => {
    setScrollVisible(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setScrollVisible(false), 2000);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = setTimeout(() => setIsTransition(true), 50);
        setLeftMenuIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    if (treeViewRef.current) {
      const offsetTop = treeViewRef.current.querySelector(".left-menu-level-link.active")?.offsetTop - treeViewRef.current.offsetTop;
      setScrollTopHeight(offsetTop - window.innerHeight / 5);
      clearTimeout(scrollTopTimeoutRef.current);
      scrollTopTimeoutRef.current = setTimeout(() => setScrollTopHeight(undefined), 50);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(transitionTimeoutRef.current);
      clearTimeout(scrollTopTimeoutRef.current);
    };
  }, [router.asPath]);

  return (
    <>
      <StyledLeftMenu
        ref={ref}
        onMouseEnter={handleVisibility}
        onMouseLeave={() => setScrollVisible(false)}
        isTransition={isTransition}
        className={`left-menu ${leftMenuIsOpen ? "active" : ""}`}
      >
        <div className="left-menu-wrapper">
          <SearchArea
            className="left-menu-search"
            placeholder={t("Search in Help Center")}
            isLeftMenu={true}
          />
          <Scrollbar scrollTop={scrollTopHeight} onScroll={handleVisibility} className={scrollVisible ? "scroll-visible" : ""}>
            {headings && headings.length !== 0 && pageName && (
              <Heading className="left-menu-title" level={6} label={pageName} />
            )}
            {headings?.length > 1 ? (
              <ul className="left-menu-items left-menu-articles">
                {headings.map((item, index) => (
                  <li className={index === 0 ? "active" : ""} key={index}>
                    <InternalLink onClick={() => setLeftMenuIsOpen(false)} href={`#${item.id}`} label={item.text} />
                  </li>
                ))}
              </ul>
            ) : leftMenuData?.data?.length > 0 ? (
              <TreeView ref={treeViewRef} data={leftMenuData} setIsTransition={setIsTransition} />
            ) : null}
            <ul className="left-menu-info">
              <li><InternalLink href="/glossary.aspx" className={`glossary ${router.pathname === "/glossary.aspx" ? "active" : ""}`} label={t("Glossary")} /></li>
              <li><InternalLink href="/video.aspx" className={`video ${router.pathname === "/video.aspx" ? "active" : ""}`} label={t("Video")} /></li>
              <li><InternalLink href="/faq/faq.aspx" className={`faq ${`/faq/${router.query.faq}` === "/faq/faq.aspx" ? "active" : ""}`} label={t("FAQ")} /></li>
            </ul>
          </Scrollbar>
        </div>
      </StyledLeftMenu>
      <StyledOverlay leftMenuIsOpen={leftMenuIsOpen} isTransition={isTransition} />
    </>
  );
});

export default LeftMenu;