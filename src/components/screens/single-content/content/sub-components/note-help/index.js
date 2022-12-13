import React from "react";
import Text from "@components/common/text";
import StyledNoteHelp from "./styled-note-help";

const NoteHelp = ({ t, label, className, ...rest }) => {
  return (
    <StyledNoteHelp className={className}>
      <Text className="note-text" label={label} />
    </StyledNoteHelp>
  );
};
export default NoteHelp;
