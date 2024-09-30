import StyledCookieNotify from "./styled-cookie-notify";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const CookieNotify = () => {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("cookie-notify") === undefined) {
      setIsShow(true);
    }
  }, []);

  const hideCookieNotify = () => {
    setIsShow(false);

    const currentDate = new Date();
    const nextYear = new Date();

    nextYear.setFullYear(currentDate.getFullYear() + 1);

    cookies.set("cookie-notify", true, {
      path: "/",
      expires: nextYear
    });
  };

  return (
    isShow && (
      <StyledCookieNotify>
        <div className="cookie-notify">
          <span className="cookie-text">
            {t("ONLYOFFICE Help Center uses cookies so that we can provide you with the best user experience. By continuing to use this website you agree that we can store cookies in your browser.")}
          </span>
          <button className="cookie-btn" onClick={() => hideCookieNotify()}>{t("Got it!")}</button>
        </div>
      </StyledCookieNotify>
    )
  );
};

export default CookieNotify;
