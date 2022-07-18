import React from "react";
import PropTypes from "prop-types";
import StyledTag from "./styled-tag";

const Tag = ({
  label,
  level,
  children,
  type,
  ...rest

}) => {

  return (
    <StyledTag type={type} {...rest}>
       {label || children}
    </StyledTag>
  );
};

Tag.propTypes = {
  /** The tag type */
  type: PropTypes.oneOf(["letter", "page", "heading", "list"]),
  /** The list-tag type */
  listType: PropTypes.oneOf(["saas", "videoGuide", "controlPanel", "onlineEditors", 
  "iOSApp", "androidApp", "serverDocker", "serverAll", "serverWindows", "serverLinux", 
  "desktopAll", "iOSWeb", "androidWeb", "integration", "faq"]),
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
  level: 1,
  tabIndex: -1,
};

export default Tag;