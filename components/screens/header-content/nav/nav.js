import React from "react";
import StyledNav from "./styled-nav";
import Link from "next/link";
import Heading from "@components/common/heading";

const Nav = ({ onClickPND, t, stateMobilePND, categories, windowWidth, ...rest }) => {
  return (
    <StyledNav stateMobile={stateMobilePND} {...rest}>
      {/* {typeof window !== 'undefined' && windowWidth <= 1000 && (<img
        src="https://static-helpcenter.onlyoffice.com/images/icons/close-icon.react.svg"
        className="close-cross"
        onClick={onClickPND}
      />)} */}
      {categories?.map((item, index) => {
        return <Link className="nav-item" key={index} href={item.attributes.url}>
          <Heading className="heading-nav-item" label={item.attributes.name} level={2} />
        </Link>
      })}
    </StyledNav>
  );
};

export default Nav;