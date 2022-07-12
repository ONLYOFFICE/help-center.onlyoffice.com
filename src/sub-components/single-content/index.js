import React, { useState } from "react";
import StyledSingleContent from "./styled-single-content";
import LeftMenu from "./left-menu";
import CenterContent from "./content";
import MailPopup from "./article-popup";
import Text from "../../../components/text";

const SingleContent = ({ t, ...rest }) => {
    const [modalActive, setModalActive] = useState(false);
    const handlerSetModal = (active) => {
      setModalActive(active);
    };
    return (
        <StyledSingleContent>
            <LeftMenu t={t}  />
            <CenterContent t={t} />
            <Text t={t} onClick={() => handlerSetModal(true)}>click</Text>
            <MailPopup t={t} active={modalActive} setActive={setModalActive} />
        </StyledSingleContent>
    )
}

export default SingleContent;
