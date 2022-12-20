import React, { useEffect, useRef } from "react";
import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import SearchContent from "./sub-components/search";
import Items from "./data/items";

const LeftMenu = ({ t, ...rest }) => {
  const path = window.location.href.replace(window.location.hash, "").toLowerCase();
  const leftMenuListRef = useRef();

  useEffect(() => {
    const linkSelected = leftMenuListRef.current.querySelector(".external-link.selected");

    linkSelected && linkSelected.closest("ul").classList.add("open");
  }, [Items])

  return (
    <StyledLeftMenu>
      <SearchContent t={t} />
      <div ref={leftMenuListRef}>
        <ul>
          {Items.map((it, idx) => {
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