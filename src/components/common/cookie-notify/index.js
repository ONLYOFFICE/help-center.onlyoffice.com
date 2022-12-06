import React from "react";
import CookieConsent from "react-cookie-consent";
import StyledCookieNotify from "./styled-cookie-notify";

const CookieNotify = ({ t }) => {
  return (
    <StyledCookieNotify>
      <CookieConsent
        cookieName="helpcenter-cookie-message"
        disableStyles={true}
        expires={365}
        containerClasses="cookie-notify"
        contentClasses="cookie-wrapper-text"
        buttonWrapperClasses="cookie-wrapper-btn"
        buttonClasses="cookie-btn"
        buttonText="Got it!"
        >
        <span className="cookie-text">ONLYOFFICE Help Center uses cookies so that we can provide you with the best user experience. By continuing to use this website you agree that we can store cookies in your browser.</span>
      </CookieConsent>
    </StyledCookieNotify>
  );
};

export default CookieNotify;
