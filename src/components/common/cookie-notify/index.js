import React, { useState } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Cookies from 'universal-cookie';
import StyledCookieNotify from "./styled-cookie-notify";

const CookieNotify = () => {
  const { t } = useTranslation();

  const [isShow, setIsShow] = useState(true);
  const cookies = new Cookies();

  const hideCookieNotify = () => {
    setIsShow(false);

    const currentDate = new Date();
    const nextYear = new Date();

    nextYear.setFullYear(currentDate.getFullYear() + 1);

    cookies.set("cookie-notify", true, {
      expires: nextYear
    });
  };

  return (
    <StyledCookieNotify className={isShow && !cookies.get("cookie-notify") ? "" : "hide"}>
      <div className="cookie-notify">
        <span className="cookie-text">
          {t("ONLYOFFICE Help Center uses cookies so that we can provide you with the best user experience. By continuing to use this website you agree that we can store cookies in your browser.")}
        </span>
        <button className="cookie-btn" onClick={() => hideCookieNotify()}>{t("Got it!")}</button>
      </div>
    </StyledCookieNotify>
  );
};

export default CookieNotify;
