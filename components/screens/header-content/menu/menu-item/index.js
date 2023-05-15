import React, { useState, useEffect } from "react";

import Heading from "@components/common/heading";
import Link from "@components/common/internal-link";
import Box from "../nav/sub-components/box";

import { StyledNavMenu, StyledMenuItemsWrapper } from "./styled-navmenu";

const MenuItem = ({ heading, link, ...rest }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleHoverMenu = () => {
    setShowMenu(true);
  };

  const handleLeaveMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const windowCheck =
    typeof window !== "undefined" && window.innerWidth <= 1190;

  useEffect(() => {
    if (window.innerWidth <= 1190) {
      setShowMenu(false);
    }
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <StyledNavMenu
      className="nav-item"
      {...rest}
    >
      <Link href={link}>
        <Heading
          className="heading-nav-item"
          label={heading}
          level={2}
        />
      </Link>
    </StyledNavMenu>
  );
};

export default MenuItem;
