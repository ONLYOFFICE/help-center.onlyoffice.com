import React, { useState, useRef } from "react";

import StyledNav from "./styled-nav";
import MenuItem from "../menu-item";
import Box from "./sub-components/box";
import ExternalLink from "@components/common/link";
import Link from "@components/common/internal-link";
import Text from "@components/common/text";
import { AccordionItem } from "@components/common/accordion";

const Nav = ({ onClick, t, stateMobilePND, categories, ...rest }) => {
  return (
    <StyledNav stateMobile={stateMobilePND} categories={categories} {...rest}>
      {categories.map((item, index) => {
         return <MenuItem t={t} key={index} heading={item.attributes.name} link={item.attributes.url} ></MenuItem>
      })}
    </StyledNav>
  );
};

export default Nav;
