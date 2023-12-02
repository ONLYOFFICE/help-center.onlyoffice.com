import React, { useState, useEffect } from "react";
import StyledHeader from "./styled-header";

const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <StyledHeader className={`n ${scrolled ? 'scrolled' : ''}`}>{props.children} </StyledHeader>;
};

Header.displayName = "PageHeader";

export default Header;
