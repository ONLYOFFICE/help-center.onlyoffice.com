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

        <link
          rel="apple-touch-icon"
          href="https://static-oforms.teamlab.info/images/logo/ONLYOFFICE-logo.png"
        />

        <meta name="google" content="notranslate" />

        <link
          rel="icon"
          href="https://static-oforms.teamlab.info/images/logo/favicon_general.png"
          type="image/x-icon"
        />

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
      <Script
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
      />
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
