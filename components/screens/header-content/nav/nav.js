import React, { useState, useRef, useEffect } from "react";
import Box from "@components/common/box";
import StyledNav from "./styled-nav";
import MenuItem from "../menu-item";
import Link from "next/link";

const Nav = ({ onClick, t, stateMobilePND, categories, ...rest }) => {
  return (
    <StyledNav stateMobile={stateMobilePND} {...rest}>
      {categories.map((item, index) => {
        return <MenuItem t={t} key={index} heading={item.attributes.name} link={item.attributes.url} ></MenuItem>
      })}
    </StyledNav>
  );
};

export default Nav;