import React from "react";
import PropTypes from "prop-types";
import StyledTag from "./styled-tag";

const Tag = ({
  label,
  type,
  id,
  ...rest

}) => {

  return (
    <StyledTag type={type} id={id} {...rest}>
       {label}
    </StyledTag>
  );
};

Tag.propTypes = {
  /** The tag type: page - in article, popup - in popup heading, list - in all tags page */
  type: PropTypes.oneOf(["page", "popup", "list"]),
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

Tag.defaultProps = {
  tabIndex: -1,
};

export default Tag;