import { appWithTranslation } from "next-i18next";
import "../styles/global-styles.css";

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(App)