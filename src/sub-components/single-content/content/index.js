import React from "react";
import Heading from "../../../../components/heading";
import Video from "../video";
import StyledContent from "./styled-content";

const CenterContent = ({}) => {
    return (
        <StyledContent>
            <Heading
                level={1}
                label="Installation Guides"
            />
            <Video/>
        </StyledContent>
        
    );
}
export default CenterContent;