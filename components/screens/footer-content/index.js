import React, { useState } from "react";

import StyledFooter from "./styled-footer";
import Items from "./data/footer-items-site";
import Social from "./data/social-items";
import FooterItem from "./sub-components/footer-item";
import ExternalLink from "@components/common/link";
import Text from "@components/common/text";
import IconButton from "@components/common/icon-button";

const date = new Date();
const currentYear = date.getFullYear();

const Footer = ({ t, language }) => {
  const POSITION_ELEMENTS_ITEM = [1, 2, 3, 4];

  const onlyoffice = `https://www.onlyoffice.com${language === "en" ? "" : `/${language}`
    }`;
  return (
    <StyledFooter>
      {POSITION_ELEMENTS_ITEM.map((elements_in_div, id) => (
        <div className="footer-item-group" key={id}>
          {Items.map((it, idx) => {
            if (elements_in_div === it.position) {
              if (it.className != 'follow') {
                return (
                  <FooterItem
                    dis
                    heading={t(it.heading)}
                    className={it.className}
                    key={`${it.className}-${idx}`}
                  >
                    {it.link.map((item_link, idx_link) =>
                      item_link.isContact ? (
                        <Text className="contact-text" key={idx_link}>
                          {t(item_link.label)}
                          &nbsp;
                          <ExternalLink
                            className="footer-link-contact"
                            label={item_link.mail}
                            href={item_link.href}
                            alt={item_link.mail}
                          />
                        </Text>
                      ) : (
                        <ExternalLink
                          className="footer-link"
                          label={t(item_link.label)}
                          alt={item_link.label}
                          href={
                            item_link.localize
                              ? onlyoffice + item_link.href
                              : item_link.href
                          }
                          key={`${item_link.label}-${idx_link}`}
                        />
                      )
                    )}
                  </FooterItem>)
              } else {
                return (
                  <>
                    <FooterItem
                      heading={t(it.heading)}
                      className={it.className}
                      key={`${it.className}-${idx}`}>
                      <div className="footer-social-links">
                        {Social.map((item) => (
                          <ExternalLink
                            className="footer-social"
                            href={item.href}
                            title={item.title}
                            rel={item.rel}
                            alt={item.title}
                            target="_blank"
                            key={item.title}
                          >
                            <IconButton
                              className={item.className}
                              iconName={item.src}
                              size={item.size}
                              grayed={item.filter}
                              key={item.title}
                            />
                          </ExternalLink>
                        ))}
                      </div>
                    </FooterItem>
                    <div className="footer-copyright-block">
                      <Text
                        className="footer-copyright"
                        label={t("FooterCopyright", { currentYear })}
                      />
                    </div></>)
              }
            }
            else {
              return null;
            }
          })}
        </div>
      ))}
    </StyledFooter>
  );
};

export default Footer;
