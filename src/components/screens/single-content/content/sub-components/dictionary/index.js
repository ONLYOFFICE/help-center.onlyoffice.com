import React, { useState } from "react";
import Text from "@components/common/text";
import StyledDictionary from "./styled-dictionary";

const Dictionary = ({ t, title, subtitle, definition, ...rest }) => {
  const isMultiply = Array.isArray(definition);
  return (
    <StyledDictionary>
      <Text>
        <b>{title}</b>
        {subtitle && <>&nbsp;({subtitle})</>}
        {isMultiply ? (
          <ol>
            {definition.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ol>
        ) : (
          <>&nbsp;–&nbsp; {definition}</>
        )}
      </Text>
    </StyledDictionary>
  );
};
export default Dictionary;
