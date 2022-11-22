import React, { useState, useEffect } from "react";
import Box from "../../../../../../components/box";
import GlossarySelector from "../glossary-selector";
import StyledAlphabetContainer from "./styled-alphabet-container";
import Dictionary from "../dictionary";
import Tag from "../../../../../../components/tag";
import Heading from "../../../../../../components/heading";
import FloatSubMenu from "../float-submenu";
import { CSSTransition } from "react-transition-group";

const AlphabetContainer = ({
  t,
  selectorContent,
  pageContent,
  isTagPage,
  onClickFunction,
  ...rest
}) => {
  const [isFloat, setIsFloat] = useState(false);
  const [prodAplh, setProdAlph] = useState(selectorContent);
  const [stateMobile, setStateMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1190) {
        setStateMobile(true);
      }
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClickHandler = (c) => {
    if (c !== "all") {
      const letter = selectorContent.filter((it) => it === c);
      setProdAlph(letter);
    } else {
      setProdAlph(selectorContent);
    }
  };
  
  useEffect(() => {
    setProdAlph(selectorContent);
  }, [selectorContent]);

  const makeTagID = (text) => {
    const tagID = "tag_" + text.toLowerCase().replace(/[\s.'-]/g, "");
    return tagID;
  };

  const scrollTop = () => {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      setIsFloat(true);
    } else {
      setIsFloat(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
  }, []);

  return (
    <StyledAlphabetContainer isTagPage={isTagPage}>
      <GlossarySelector
        t={t}
        content={selectorContent}
        onClickFunc={onClickHandler}
      />
      <Box className="glossContent">
        {prodAplh.map((c) => {
          return (
            <Box className="glossLetter" id={"gloss_" + c + "_block"}>
              <Heading
                fontSize={"25px"}
                fontWeight={"300"}
                textTransform={"uppercase"}
                id={"gcID" + c.toUpperCase()}
              >
                {c}
              </Heading>
              {isTagPage ? (
                <ul className="glossTagsArea">
                  {pageContent
                    .filter((item) => item.title.toLowerCase().startsWith(c))
                    .map((item, index) => (
                      <Tag
                        key={index}
                        t={t}
                        type={"list"}
                        label={item.title}
                        className="tags"
                        onClick={() => onClickFunction(item.title)}
                        id={makeTagID(item.title)}
                      />
                    ))}
                </ul>
              ) : (
                <div>
                  {pageContent
                    .filter((item) => item.title.toLowerCase().startsWith(c))
                    .map((item, index) => (
                      <Dictionary
                        key={index}
                        t={t}
                        title={item.title}
                        subtitle={item.subtitle}
                        definition={item.definition}
                      />
                    ))}
                </div>
              )}
            </Box>
          );
        })}
      </Box>
      {!stateMobile && (
        <CSSTransition
          in={isFloat}
          timeout={400}
          classNames="float"
          unmountOnExit
        >
          <FloatSubMenu content={selectorContent} />
        </CSSTransition>
      )}
    </StyledAlphabetContainer>
  );
};

export default AlphabetContainer;
