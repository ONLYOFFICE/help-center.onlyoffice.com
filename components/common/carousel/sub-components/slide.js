import React from "react";
import Box from "@components/common/box";
import StyledSlide from "./styled-slide";
import Link from "@components/common/link";

const Slide = ({ t, currentLanguage, arrayItems, description, ...rest }) => {
  const { name_video, pathName, imgUrlCard } = arrayItems;

  return (
    <StyledSlide {...rest} imgUrlCard={imgUrlCard}>
      <Link href={pathName} className="image-boxshadow-template">
        <div className="video-image"></div>
      </Link>
      <Box
        className="card-template"
        flexDirection="column"
        alignItems="stretch"
      >
        <Link
          className="title-template"
          title={name_video}
          href={pathName}
          label={name_video}
        />
      </Box>
    </StyledSlide>
  );
};


export default Slide;