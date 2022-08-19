import React from "react";
import { GlossaryInfo } from "../../../../../static/data/alpha-glossary";
import AlphabetContainer from "../sub-components/aplhabet-container";
import Text from "../../../../../components/text";

const GlossaryContent = ({ t, ...rest }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const filteredAlph = (alphabet.split("").map((y) => { return ((GlossaryInfo.filter((item) => (item.title.toLowerCase().startsWith(y)))).length !== 0) ? y : null })).filter(function (el) {
    return (el !== null );
  });
  return (
    <>
      <Text padding={"10px 0"}>Here are the base terms which are used in the online office interface and documentation.</Text>
      <AlphabetContainer selectorContent={filteredAlph} pageContent={GlossaryInfo} isTagPage={false} />
    </>
  );
};
export default GlossaryContent;
