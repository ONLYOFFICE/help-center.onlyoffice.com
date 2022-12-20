import React, { useEffect, useState } from "react";
import Heading from "@components/common/heading";
import Video from "../video";
import StyledContent from "./styled-content";
import Text from "@components/common/text";
import ReactHtmlParser from 'react-html-parser';

const CenterContent = ({ t }) => {
    return (
        <StyledContent>
            <div className="wrapper-content">
                <Heading
                    level={1}
                    label="Installation Guides"
                />
            </div>
            <Video t={t} />
        </StyledContent>
    );
}

export default CenterContent;