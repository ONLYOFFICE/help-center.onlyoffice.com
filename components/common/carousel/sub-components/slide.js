import StyledSlide from "./styled-slide";
import Link from "@components/common/external-link";

const Slide = ({ t, locale, arrayItems, description, ...rest }) => {
  const { name_video, pathName, imgUrlCard } = arrayItems;

  return (
    <StyledSlide {...rest} imgUrlCard={imgUrlCard}>
      <Link href={pathName} className="image-boxshadow-template">
        <div className="video-image"></div>
      </Link>
      <div className="card-template">
        <Link
          className="title-template"
          title={name_video}
          href={pathName}
          label={name_video}
        />
      </div>
    </StyledSlide>
  );
};


export default Slide;