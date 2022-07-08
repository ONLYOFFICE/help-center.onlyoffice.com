import React from "react";
import StyledVideo from "./styled-video";
import Carousel from "../../../../components/carousel"
import PrivateRooms from "../../../../static/images/video-preview/private_rooms.png"
import ConnectSeafile from "../../../../static/images/video-preview/desktop_connect_seafile.png"

const Video = ({}) => {

    const items = [{
        name_video: "Private Rooms in ONLYOFFICE Workspace for Secure Collaboration on Documents",
        pathName: "",
        imgUrlCard: `${PrivateRooms}`,
        description_card: ""
    },
    {
        name_video: "How to connect ONLYOFFICE Desktop Editors to Seafile",
        pathName: "",
        imgUrlCard: `${ConnectSeafile}`,
        description_card: ""
    },
    {
        name_video: "Private Rooms in ONLYOFFICE Workspace for Secure Collaboration on Documents",
        pathName: "",
        imgUrlCard: `${PrivateRooms}`,
        description_card: ""
    },
    {
        name_video: "How to connect ONLYOFFICE Desktop Editors to Seafile",
        pathName: "",
        imgUrlCard: `${ConnectSeafile}`,
        description_card: ""
    },]

    return(
        <StyledVideo>
            <Carousel items={items}></Carousel>
        </StyledVideo>
    )
}

export default Video;