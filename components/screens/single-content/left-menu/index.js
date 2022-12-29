import React, { useEffect, useRef} from "react";
import { useRouter } from "next/router";
import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import Items from "./data/items";

const LeftMenu = ({ t, ...rest }) => {
  const router = useRouter();
  const leftMenu = useRef();

  useEffect(() => {
    const selectedLink = leftMenu.current.querySelector(".external-link.selected");

    if (selectedLink) {
      selectedLink.closest("ul")?.classList.add("open");
      selectedLink.closest(".expanded-menu-first")?.classList.add("open");
      selectedLink.closest(".expanded-menu-second")?.classList.add("open");
      selectedLink.closest(".expanded-menu-second")?.closest("li")?.classList.add("active");
      selectedLink.closest(".expanded-menu-third")?.closest("li")?.classList.add("active");
    }
  }, []);

  return (
    <StyledLeftMenu ref={leftMenu}>
      {Items.map((it, idx) => {
        return (
          <li className={`${it.className ? it.className : ""}`} key={`${it.label}-${idx}`}>
            <InternalLink
              href={it.href}
              label={t(it.label)}
              className={`item ${router.route.includes(it.label.toLowerCase()) ? "selected" : ""}`}
            />
            {
              it.items &&
              <ul className={`expanded-menu expanded-menu-first ${router.route.includes(it.label.toLowerCase()) ? "open" : ""}  ${it.items ? "no-subitems" : ""}`}>
                {
                  it.items.map((item, idx_item) =>
                  <li className={`${router.route.includes(item.label.toLowerCase()) ? "active" : ""}`} key={idx_item}>
                    <InternalLink
                      href={item.href}
                      label={t(item.label)}
                      className={`expanded-item ${router.route.includes(item.label.toLowerCase()) ? "selected" : ""}`}
                    />
                    {
                      item.subitems &&
                      <ul className={`expanded-menu expanded-menu-second ${router.route.includes(item.label.toLowerCase()) ? "open" : ""}`}>
                        {
                          item.subitems.map((subitem, idx_subitem) =>
                          <li className={`${router.route.includes(subitem.label.toLowerCase()) ? "active" : ""}`} key={idx_subitem}>
                            <InternalLink
                              href={subitem.href}
                              label={t(subitem.label)}
                              className={`expanded-subitem ${router.route.includes(subitem.label.toLowerCase()) ? "selected" : ""}`}
                            />
                            {
                              subitem.subsubitems &&
                              <ul className={`expanded-menu expanded-menu-third ${router.route.includes(subitem.label.toLowerCase()) ? "open" : ""}`}>
                                {
                                  subitem.subsubitems.map((subsubitem, idx_subsubitem) =>
                                  <li key={idx_subsubitem}>
                                    <InternalLink
                                      href={subsubitem.href}
                                      label={t(subsubitem.label)}
                                      className={`expanded-subsubitem ${router.route.includes(subsubitem.label.toLowerCase()) ? "selected" : ""}`}
                                    />
                                  </li>
                                )}
                              </ul>
                            }
                          </li>
                        )}
                      </ul>
                    }
                  </li>
                )}
              </ul>
            }
          </li>
        )
      })}
    </StyledLeftMenu>
  )
}

export default LeftMenu;