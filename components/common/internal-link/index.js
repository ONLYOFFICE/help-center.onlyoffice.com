import StyledInternalLink from "./styled-internal-link";
import PropTypes from "prop-types";

const InternalLink = ({
  children,
  href,
  style,
  className,
  label,
  tabIndex,
  ...rest
}) => {
  return (
    <StyledInternalLink
      className={className ? className + " internal-link" : "internal-link"}
      href={href ? href : ""}
      tabIndex={tabIndex}
      {...rest}
    >
      {children || label}
    </StyledInternalLink>
  );
};

InternalLink.propTypes = {
  /**  link text color */
  color: PropTypes.string,
  /**  link text font-size */
  fontSize: PropTypes.string,
  /**  link text font-weight */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**  link text text-transform*/
  textTransform: PropTypes.string,
  /** Used as HTML 'href' property */
  href: PropTypes.string,
  /** Used as HTML 'title' property */
  title: PropTypes.string,
  /**  link text-decoration */
  textDecoration: PropTypes.string,
  /**  link hover text-decoration  */
  hoverTextDecoration: PropTypes.string,
  /** What the  link will trigger when clicked */
  onClick: PropTypes.func,
  /**  link tab index */
  tabIndex: PropTypes.number,
  /** The target attribute specifies where the linked document will open when the link is clicked */
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  /** Attribute defines the relationship between a linked resource and the current document */
  rel: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

InternalLink.defaultProps = {
  href: undefined,
  title: undefined,
  rel: "noopener noreferrer",
};

export default InternalLink;
