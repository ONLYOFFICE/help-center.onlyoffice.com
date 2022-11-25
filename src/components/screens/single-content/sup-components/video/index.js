import React from "react";
import StyledVideo from "./styled-video";
import Carousel from "@components/common/carousel"
import Heading from "@components/common/heading";

const Video = ({ t, items }) => {
    return(
        <StyledVideo>
            <Heading textAlign="center" level={2}>{t("Watch video")}</Heading>
            <Carousel items={items}></Carousel>
        </StyledVideo>
    )
}

export default Video;