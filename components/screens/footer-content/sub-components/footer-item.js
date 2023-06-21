import React, { useState, useRef } from "react";
import { ReactSVG } from "react-svg";

import StyledFooterItem from "./styled-footer-item";
import Heading from "@components/common/heading";
import MobileMenu from "@public/images/icons/chevron-down.react.svg";

const FooterItem = ({ dis, children, className, heading }) => {
  const content = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = (e) => {
    e.preventDefault();
    window.innerWidth <= 592 && setIsOpen(!isOpen);
  };

  const footerItemClassName = className
    ? `footer-item-${className}`
    : `footer-item`;

  const footerImageArrow = `footer-item-heading-arrow ${isOpen ? "up" : ""}`;

  return (
    <StyledFooterItem isOpen={isOpen} className={footerItemClassName}>
      <Heading
        className="footer-item-heading"
        level={6}
        onClick={dis && onHandleClick}
        label={heading}
      />
      {/*eslint-disable*/}
      <ReactSVG
        src={MobileMenu.src}
        className={footerImageArrow}
      />
      {/* <img
        className={footerImageArrow}
        src="/images/icons/chevron-down.react.svg"
        height="24px"
        width="24px"
      /> */}
      {/*eslint-enable*/}
      <div ref={content} className="footer-items-group">
        {children}
      </div>
    </StyledFooterItem>
  );
};

export default FooterItem;
