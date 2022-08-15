import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledGlossarySelect from "./styled-glossary-select";

const GlossarySelect = ({ id, label, isDisabled, active, ...rest }) => {
  return (
    <StyledGlossarySelect
      isDisabled={isDisabled}
      active={active}
      id={"gloss_" + id}
      {...rest}
    >
      {label}
    </StyledGlossarySelect>
  );
};

GlossarySelect.propTypes = {
  /** The glossary state */
  isActive: PropTypes.bool,
  /** The glossary type */
  isDisabled: PropTypes.bool,
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
  /** Label */
  label: PropTypes.string,
};

GlossarySelect.defaultProps = {
  tabIndex: -1,
  isDisabled: false,
};

export default GlossarySelect;
