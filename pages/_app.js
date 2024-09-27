import { appWithTranslation } from "next-i18next";
import "../styles/global-styles.css";
import App from "next/app";
import Cookies from "universal-cookie";
import CookieNotify from "@components/common/cookie-notify";

const MyApp = ({ Component, pageProps, cookieValue }) => {
  return (
    <>
      <Component {...pageProps} />
      {!cookieValue &&
        <CookieNotify />
      }
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req } = appContext.ctx;
  let cookieValue;

  if (req) {
    const cookies = new Cookies(req.headers.cookie);
    cookieValue = cookies.get("cookie-notify");
  } else {
    const cookies = new Cookies();
    cookieValue = cookies.get("cookie-notify");
  }

  return { ...appProps, cookieValue };
};

export default appWithTranslation(MyApp);
