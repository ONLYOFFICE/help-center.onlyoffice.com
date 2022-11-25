import React, { useEffect, useRef } from "react";
import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import SearchContent from "./sub-components/search";
import LeftMenuItems from "./data/left-menu-items";

const LeftMenu = ({ t, items, ...rest }) => {
  const path = window.location.href.replace(window.location.hash, "").toLowerCase();
  const leftMenuListRef = useRef();

  useEffect(() => {
    const linkSelected = leftMenuListRef.current.querySelector(".external-link.selected").parentElement;

    linkSelected.nextElementSibling && linkSelected.nextElementSibling.classList.add("open");
    linkSelected && linkSelected.closest("ul").classList.add("open");
  }, [items])

  return (
    <StyledLeftMenu>
      <SearchContent t={t} />
      <div ref={leftMenuListRef}>
        <ul>
          {items.map((it, idx) => {
            return (
              <li key={`${it.label}-${idx}`}>
                <InternalLink
                  href={it.href}
                  label={t(it.label)}
                  className={`external-link ${path.includes(it.href) ? "selected" : ""}`}
                />
                {it.subitems &&
                <ul className={`expanded-menu ${it}`}>
                  {it.subitems.map((subitem, idx_item) =>
                    <li key={idx_item}>
                      <InternalLink
                        href={subitem.href}
                        label={t(subitem.label)}
                        className={`external-link ${path.includes(subitem.href) ? "selected" : ""}`}
                      />
                    </li>
                  )}
                </ul>}
              </li>
            )
          })}
        </ul>
        <ul>
          {LeftMenuItems.map((it, idx) => {
            return (
              <li key={`${it.label}-${idx}`}>
                <InternalLink
                  href={it.href}
                  label={t(it.label)}
                  className={`external-link ${path.includes(it.href) ? "selected" : ""}`}
                />
                {it.subitems &&
                <ul className="expanded-menu">
                  {it.subitems.map((subitem, idx_item) =>
                    <li key={idx_item}>
                      <InternalLink
                        href={subitem.href}
                        label={t(subitem.label)}
                        className={`external-link ${path.includes(subitem.href) ? "selected" : ""}`}
                      />
                    </li>
                  )}
                </ul>}
              </li>
            )
          })}
        </ul>
      </div>
    </StyledLeftMenu>
  )
}

export default LeftMenu;