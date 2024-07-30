import React, { useState, useRef } from "react";
import StyledFooterItem from "./styled-footer-item";
import Heading from "@components/common/heading";

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
      {heading && <Heading
        className="footer-item-heading"
        level={6}
        onClick={dis && onHandleClick}
        label={heading}
      />}
      <img
        src="https://static-helpcenter.onlyoffice.com/images/icons/arrowup.react.png"
        className={footerImageArrow}
      />
      <div ref={content} className="footer-items-group">
        {children}
      </div>
    </StyledFooterItem>
  );
};

export default FooterItem;