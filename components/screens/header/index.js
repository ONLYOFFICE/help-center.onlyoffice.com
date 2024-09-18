import StyledHeader from "./styled-header";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LanguageSelector from "@components/common/language-selector";
import InternalLink from "@components/common/internal-link";

const Header = ({ t, locale, categories, isMain, leftMenuMobile, setLeftMenuMobile }) => {
  const menu = t("Menu");
  const [menuName, setMenuName] = useState(menu);
  const [menuMobile, setMenuMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentCategory = categories.data.find((item) => item.attributes.url === `/${router.query.category}`);

    if (currentCategory) {
      setMenuName(currentCategory.attributes.name);
    } else {
      setMenuName(menu);
    }
    setMenuMobile(false);
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuMobile || leftMenuMobile) {
        if (!event.target.closest(".nav") && !event.target.closest(".left-menu") && !event.target.closest(".header-mobile-toggle-btn") && !event.target.closest(".header-mobile-menu-btn")) {
          setMenuMobile(false);
          setLeftMenuMobile(false);
        }
      }
    };

    if (menuMobile || leftMenuMobile) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuMobile, leftMenuMobile]);

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        if (window.innerWidth > 1000) {
          setLeftMenuMobile(false);
        };
      }

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <StyledHeader locale={locale}>
      <div className="header-container">
        <button
          onClick={() => setLeftMenuMobile(true)}
          className={`header-mobile-toggle-btn ${isMain ? "is-main" : ""}`}
        >
        </button>
        <InternalLink className="logo" href="/" />
        <button
          onClick={() => setMenuMobile(!menuMobile)}
          className={`header-mobile-menu-btn ${menuMobile ? "open" : ""} ${menuName === menu ? "" : "active"}`}
        >
          {menuName}
        </button>
        <nav className={`nav ${menuMobile ? "open" : ""}`}>
          <ul className="nav-list">
            {categories.data.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity)).map((item, index) => (
              <li className="nav-item" key={index}>
                <InternalLink
                  className={`nav-link ${`/${router.query.category}` === item.attributes.url ? "active" : ""}`}
                  href={item.attributes.url}
                  label={item.attributes.name}
                />
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSelector locale={locale} />
        <div className={`overlay ${leftMenuMobile ? "active" : ""}`}></div>
      </div>
    </StyledHeader>
  );
};

export default Header;