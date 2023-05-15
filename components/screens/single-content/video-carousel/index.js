import React from "react";
import StyledVideo from "./styled-video";
import Carousel from "@components/common/carousel";

const VideoCarousel = ({ t, items }) => {
    return(
        <StyledVideo>
            <Carousel isArrows={true} items={items}></Carousel>
        </StyledVideo>
    )
}

export default VideoCarousel;