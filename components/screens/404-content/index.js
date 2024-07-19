import Styled404Content from "./styled-404-content";
import Text from "@components/common/text";
import InternalLink from "@components/common/internal-link";

const Error404 = ({ t }) => {
  return (
    <Styled404Content>
      <img
        src="https://static-helpcenter.onlyoffice.com/images/icons/bg-errors.react.svg"
        className="error-404-image"
        alt="error-404"
      />
      <div className="error-404-container">
        <Text className="error-404-heading" label={t("404Error")} />
        <Text className="error-404-description" label={t("404Description")} />
        <InternalLink className="error-404-btn" href="/" label={t("GoToHomePage")} />
      </div>
    </Styled404Content>
  );
};

export default Error404;
