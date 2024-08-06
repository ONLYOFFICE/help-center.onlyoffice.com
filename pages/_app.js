import { appWithTranslation } from "next-i18next";
import "../styles/global-styles.css";
import React from 'react';
import App from 'next/app';
import Cookies from 'universal-cookie';
import CookieNotify from '@components/common/cookie-notify';

const MyApp = ({ Component, pageProps, cookieValue }) => {
  return (
    <>
      <Component {...pageProps} cookieValue={cookieValue} />
      <CookieNotify cookieValue={cookieValue} />
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, res } = appContext.ctx;
  let cookieValue;

  if (req && res) {
    const cookies = new Cookies(req.headers.cookie, { path: '/' });;
    cookieValue = cookies.get('cookie-notify'); 
  }

  return { ...appProps, cookieValue };
};

export default appWithTranslation(MyApp)
