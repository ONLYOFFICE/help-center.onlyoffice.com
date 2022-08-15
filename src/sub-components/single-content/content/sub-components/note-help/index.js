import React, { useState } from "react";
import Text from "../../../../../../components/text";
import StyledNoteHelp from "./styled-note-help";

const NoteHelp = ({ t, label, ...rest }) => {
  return (
    <StyledNoteHelp>
      <Text className="note-text" label={label} />
    </StyledNoteHelp>
  );
};
export default NoteHelp;
