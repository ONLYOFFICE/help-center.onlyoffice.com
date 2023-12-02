import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { StyledItem, StyledPanelView } from "./styled-language-selector";
import Link from 'next/link'
import languages from "@config/languages";
import Text from "../text";

export default function LangsList(props) {
  const { t, isOpen, currentLanguage, onCloseSelector } = props;
  const query = useRouter();
  const pagePath = query.asPath;

  let path = "";
  if (typeof window !== "undefined") {
    const {
      location: { pathname, search },
    } = window;

    path = `${pathname}${search ? search : ""}`;
  }

  const renderItemList = () => {
    return languages.map((language) => {
      const { shortKey, iconName, key } = language;
      let localizedPath;
      if (currentLanguage === "en") {
        if (path.includes("en")) {
          localizedPath = path.replace(currentLanguage, shortKey);
        } else {
          localizedPath = `/${shortKey}${path}`;
        }
      } else {
        localizedPath = path.replace(currentLanguage, shortKey);
      }

      return (
        <StyledItem key={key}>
          <Link href={pagePath} locale={language.shortKey} className="language-item-link">
            <img
              src={`https://static-helpcenter.onlyoffice.com/images/flags/${iconName}`}
              alt={key}
              width="24px"
              height="24px"
              className="language-item-image"
            />
            <Text className="language-item-title">{language.name}</Text>
          </Link>
        </StyledItem>
      );
    });
  };

  const renderPanelView = () => {
    const itemsList = renderItemList();
    return (
      <StyledPanelView
        isOpen={isOpen}
        countLanguages={languages.length}
        className="lng-selector"
      >
        {itemsList}
      </StyledPanelView>
    );
  };

  const panelView = renderPanelView();

  return panelView;
}
