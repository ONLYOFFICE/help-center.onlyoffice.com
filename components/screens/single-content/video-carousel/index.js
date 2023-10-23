import React from "react";
import StyledVideo from "./styled-video";
import Carousel from "@components/common/carousel";

const VideoCarousel = ({ t, items }) => {
    return(
        <StyledVideo>
            <Carousel isArrows={items.length > 2 ? true : false} items={items}></Carousel>
        </StyledVideo>
    )
}

export default VideoCarousel;