import React from "react";

export default function useDeviceDetect() {
  const [whichBrowser, setBrowser] = React.useState(false);

  React.useEffect(() => {
    let isBrowser = "";

    if (navigator.userAgent.search(/Safari/) > 0) {
      isBrowser = "Safari";
    }
    if (navigator.userAgent.search(/Firefox/) > 0) {
      isBrowser = "MozillaFirefox";
    }
    if (navigator.userAgent.search(/Chrome/) > 0) {
      isBrowser = "Google Chrome";
    }
    if (navigator.userAgent.search(/OPR/) > 0) {
      isBrowser = "Opera";
    }
    if (navigator.userAgent.search(/Edge/) > 0) {
      isBrowser = "Microsoft Edge";
    }
    return setBrowser(isBrowser);
  }, []);

  return { whichBrowser };
}