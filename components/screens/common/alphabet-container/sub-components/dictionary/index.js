import StyledDictionary from "./styled-dictionary";
import ReactHtmlParser from "react-html-parser";

const Dictionary = ({ t, title, subtitle, definition, locale, ...rest }) => {
  const isMultiply = Array.isArray(definition);
  return (
    <StyledDictionary id={title.replace(/ /g, "")}>
        <b>{title}</b>
        {subtitle && <>&nbsp;({subtitle})</>}
        {isMultiply ? (
          <ol>
            {definition.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ol>
        ) : (
          <>
          {locale !== "es" && locale !== "it" ? <>&nbsp;–&nbsp;</> : <>&nbsp;</>}
          {ReactHtmlParser(definition)}</>
        )}
    </StyledDictionary>
  );
};
export default Dictionary;