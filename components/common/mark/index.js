import React from "react";
import PropTypes from "prop-types";
import StyledMark from "./styled-mark";

const Mark = ({
  label,
  type,
  id,
  ...rest
}) => {

  return (
    <StyledMark type={type} id={id} {...rest}>
       {label}
    </StyledMark>
  );
};

Mark.propTypes = {
  /** Text color */
  color: PropTypes.string,
  /** Text font-size */
  fontSize: PropTypes.string,
  /** Text font-weight */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Text line height */
  lineHeight: PropTypes.string,
  /** Text-transform*/
  textTransform: PropTypes.string,
  /** Text decoration */
  textDecoration: PropTypes.string,
  /** Text align */
  textAlign: PropTypes.string,
  /** Text padding */
  padding: PropTypes.string,
  /** Accepts CSS style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Tab index */
  tabIndex: PropTypes.number,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

export default Mark;