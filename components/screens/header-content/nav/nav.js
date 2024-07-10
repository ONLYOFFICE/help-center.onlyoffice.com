import React, { useState, useEffect, useRef  } from "react";
import StyledNav from "./styled-nav";
import Link from "next/link";
import Heading from "@components/common/heading";

const Nav = ({ onClickPND, t, stateMobilePND, categories, isOpen, setCat, cat, ...rest }) => {
  return (
    <StyledNav stateMobile={stateMobilePND} isOpen={isOpen} {...rest}>
      <img
        src="https://static-helpcenter.onlyoffice.com/images/icons/close-icon.react.svg"
        className="close-cross"
        onClick={onClickPND}
      />
      {categories
        .sort((a, b) => a.attributes.position - b.attributes.position)
        .map((item, index) => (
          <Link className="nav-item" key={index} href={item.attributes.url}>
            <Heading className={`heading-nav-item ${cat === item.attributes.name.toLowerCase() ? "active" : ""} `} label={item.attributes.name} level={2} />
          </Link>
        ))}
     
    </StyledNav>
  );
};

export default Nav;