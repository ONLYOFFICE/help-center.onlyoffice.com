import Head from "next/head";
import Script from "next/script";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import languages from "@config/languages.json";

const HeadSEO = ({
  metaSiteNameOg,
  metaDescription,
  metaDescriptionOg,
  metaKeywords,
  title,
}) => {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    const path = router.asPath;
    const currentUrl = path.replace(/^.*\/\/[^/]+/, "");
    setCurrentUrl(currentUrl);
  }, [router.asPath]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta
          id="ctl00_MetaSiteNameOG"
          property="og:site_name"
          content={metaSiteNameOg}
        />
        <meta id="ctl00_MetaTitleOG" property="og:title" content={title} />
        <meta
          id="ctl00_MetaDescriptionOG"
          property="og:description"
          content={metaDescriptionOg}
        />
        <meta property="og:url" content="https://helpcenter.onlyoffice.com/" />
        <meta
          id="ctl00_MetaImageOG"
          property="og:image"
          content="https://static.onlyoffice.com/studio/tag/personal.11.5.3/skins/default/images/logo/fb_icon_325x325.jpg"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=3, shrink-to-fit=no, viewport-fit=cover"
        />

        <meta id="ctl00_MetaKeywords" name="keywords" content={metaKeywords} />
        <meta name="description" content={metaDescription} />

        <link rel="shortcut icon" sizes="16x16" href="https://static-www.onlyoffice.com/v9.5.0/images/favicons01/favicon.png" type="image/png" />
        <link rel="shortcut icon" sizes="32x32" href="https://static-www.onlyoffice.com/v9.5.0/images/favicons01/favicon32.png" type="image/png" />
        <link rel="shortcut icon" sizes="64x64" href="https://static-www.onlyoffice.com/v9.5.0/images/favicons01/favicon64.png" type="image/png" />
        <link rel="icon" sizes="96x96" href="https://static-www.onlyoffice.com/v9.5.0/images/favicons01/favicon.ico" type="image/x-icon" />

        <meta name="google" content="notranslate" />
        <link rel="apple-touch-icon" sizes="150x150" href="https://static-www.onlyoffice.com/v9.5.0/images/favicons01/apple150.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="310x310" href="https://static-www.onlyoffice.com/v9.5.0/images/favicons01/apple310.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="325x325" href="https://static-www.onlyoffice.com/v9.5.0/images/favicons01/fb_icon_325x325.png" type="image/png" />

        {languages.map((lng) => {
          const { key, shortKey } = lng;
          return (
            <link
              key={key}
              rel="alternate"
              href={`https://helpcenter.onlyoffice.com/${
                shortKey === "en" ? "" : shortKey
              }${currentUrl === null ? "" : currentUrl}`}
            />
          );
        })}

        <meta name="theme-light" />
      </Head>
      {/* <Script
        id="googletagmanager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-12442749-5']);
          _gaq.push(['_setDomainName', '.onlyoffice.com']);
          _gaq.push(['_trackPageview']);

          (function() {
              var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        `,
        }}
      /> */}
    </>
  );
};

HeadSEO.propTypes = {
  metaSiteNameOg: PropTypes.string,
  /** Description of your web page */
  metaDescriptionOg: PropTypes.string,
  /** Description of your web page */
  metaDescription: PropTypes.string,
  /** Keywords for search engines */
  metaKeywords: PropTypes.string,
  /** Title for your HTML document */
  title: PropTypes.string,
};

HeadSEO.defaultProps = {
  metaSiteNameOg: "ONLYOFFICE",
  metaDescriptionOg: null,
  metaDescription: null,
  metaKeywords: null,
  title: null,
};

export default HeadSEO;
