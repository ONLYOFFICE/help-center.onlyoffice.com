import StyledCategory from "./styled-category";
import InternalLink from "@components/common/internal-link";

const Category = ({ categories }) => {
  return (
    <StyledCategory>
      {categories.data.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity)).map((item, index) => (
        <InternalLink className="category-box" href={item.attributes.url} key={index}>
          <img className="category-box-img" src={item.attributes.card_field_img?.data?.attributes.url} alt={item.attributes.name} />
          <div className="category-box-title">{item.attributes.name}</div>
        </InternalLink>
      ))}
    </StyledCategory>
  );
};

export default Category;