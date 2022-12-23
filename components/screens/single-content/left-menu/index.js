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
              className={`item ${router.route === it.href ? "selected" : ""}`}
            />
            {
              it.items &&
              <ul className={`expanded-menu expanded-menu-first ${router.route === it.href ? "open" : ""}`}>
                {
                  it.items.map((item, idx_item) =>
                  <li className={`${router.route === item.href ? "active" : ""}`} key={idx_item}>
                    <InternalLink
                      href={item.href}
                      label={t(item.label)}
                      className={`expanded-item ${router.route === item.href ? "selected" : ""}`}
                    />
                    {
                      item.subitems &&
                      <ul className={`expanded-menu expanded-menu-second ${router.route === item.href ? "open" : ""}`}>
                        {
                          item.subitems.map((subitem, idx_subitem) =>
                          <li className={`${router.route === subitem.href ? "active" : ""}`} key={idx_subitem}>
                            <InternalLink
                              href={subitem.href}
                              label={t(subitem.label)}
                              className={`expanded-subitem ${router.route === subitem.href ? "selected" : ""}`}
                            />
                            {
                              subitem.subsubitems &&
                              <ul className={`expanded-menu expanded-menu-third ${router.route === subitem.href ? "open" : ""}`}>
                                {
                                  subitem.subsubitems.map((subsubitem, idx_subsubitem) =>
                                  <li key={idx_subsubitem}>
                                    <InternalLink
                                      href={subsubitem.href}
                                      label={t(subsubitem.label)}
                                      className={`expanded-subsubitem ${router.route === subsubitem.href ? "selected" : ""}`}
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