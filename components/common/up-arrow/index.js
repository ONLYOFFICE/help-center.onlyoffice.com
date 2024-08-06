import PropTypes from "prop-types";
import StyledUpArrow from "./styled-up-arrow";

const UpArrow = ({ ...rest }) => {
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

  return <StyledUpArrow title="Scroll up" {...rest} onClick={() => topFunction()} />;
};

UpArrow.propTypes = {
  /** Accepts CSS style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Tab index */
  tabIndex: PropTypes.number,
  /** Accepts class */
  className: PropTypes.string,
};

UpArrow.defaultProps = {
  tabIndex: -1,
};

export default UpArrow;
