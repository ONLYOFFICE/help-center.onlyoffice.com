import PropTypes from "prop-types";
import StyledScrollToTop from "./styled-scroll-to-top-button";

const ScrollToTopButton = ({ showButton, ...rest }) => {
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

  return <StyledScrollToTop showButton={showButton} title="Scroll up" {...rest} onClick={() => topFunction()}><span></span></StyledScrollToTop>;
};

ScrollToTopButton.propTypes = {
  /** Accepts CSS style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Tab index */
  tabIndex: PropTypes.number,
  /** Accepts class */
  className: PropTypes.string,
};

ScrollToTopButton.defaultProps = {
  tabIndex: -1,
};

export default ScrollToTopButton;
