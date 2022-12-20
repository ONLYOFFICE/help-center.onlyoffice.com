import React from "react";
import { GlossaryInfo } from "@public/data/alpha-glossary";
import AlphabetContainer from "../sub-components/aplhabet-container";
import Text from "@components/common/text";

const GlossaryContent = ({ t, content, ...rest }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const filteredAlph = (alphabet.split("").map((y) => { return ((content.filter((item) => (item.title.toLowerCase().startsWith(y)))).length !== 0) ? y : null })).filter(function (el) {
    return (el !== null );
  });
  console.log(content);
  return (
    <>
      <Text padding={"10px 0"}>Here are the base terms which are used in the online office interface and documentation.</Text>
      <AlphabetContainer selectorContent={filteredAlph} pageContent={content} isTagPage={false} />
    </>
  );
};
export default GlossaryContent;
