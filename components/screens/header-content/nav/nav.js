import React, { useState, useEffect } from "react";
import StyledNav from "./styled-nav";
import Link from "next/link";
import Heading from "@components/common/heading";

const Nav = ({ onClickPND, t, stateMobilePND, categories, windowWidth, ...rest }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <StyledNav stateMobile={stateMobilePND} {...rest}>
      {isClient && windowWidth <= 1000 && (
        <img
          src="https://static-helpcenter.onlyoffice.com/images/icons/close-icon.react.svg"
          className="close-cross"
          onClick={onClickPND}
        />
      )}
      {categories
        .sort((a, b) => a.attributes.position - b.attributes.position)
        .map((item, index) => {
          return (
            <Link className="nav-item" key={index} href={item.attributes.url}>
              <Heading className="heading-nav-item" label={item.attributes.name} level={2} />
            </Link>
          );
        })}
    </StyledNav>
  );
};

export default Nav;