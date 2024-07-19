import StyledAlphabetContainer from "./styled-alphabet-container";
import { useState } from "react";
import GlossarySelector from "./sub-components/glossary-selector";
import Dictionary from "./sub-components/dictionary";
import Heading from "@components/common/heading";

const AlphabetContainer = ({
    t,
    data,
    handleTagModal,
    isTagPage
  }) => {
  const titleStartLetters = new Set(data.data?.map((item) => item.attributes.title[0].toLowerCase()));
  const filteredAlphabet = t("Alphabet").split("").filter((letter) => titleStartLetters.has(letter));

  const [prodAplh, setProdAlph] = useState(filteredAlphabet);

  const onClickHandler = (letter) => {
    if (letter !== "all") {
      setProdAlph(filteredAlphabet.filter((item) => item === letter));
    } else {
      setProdAlph(filteredAlphabet);
    }
  };

  return (
    <StyledAlphabetContainer>
      <GlossarySelector
        t={t}
        selectorContent={filteredAlphabet}
        onClickFunc={onClickHandler}
      />
      <div className="alphabet-content">
        {prodAplh.map((c, index) => {
          return (
            <div className="alphabet-letter" key={index}>
              <Heading className="alphabet-title" label={c} />

              {isTagPage ? (
                <ul className="alphabet-tags">
                  {data.data?.filter((item) => item.attributes.title.toLowerCase().startsWith(c)).map((item, index) => (
                    <li key={index}>
                      <button className="alphabet-tag" onClick={() => handleTagModal(item.attributes.title)}>
                        {item.attributes.title}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                data.data?.filter((item) => item.attributes.title.toLowerCase().startsWith(c)).map((item, index) => (
                  <Dictionary
                    key={index}
                    t={t}
                    title={item.attributes.title}
                    subtitle={item.attributes.subtitle}
                    definition={item.attributes.definition}
                  />
                ))
              )}
            </div>
          );
        })}
      </div>
    </StyledAlphabetContainer>
  );
};

export default AlphabetContainer;