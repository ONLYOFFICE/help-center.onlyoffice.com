import Link from "next/link";
import StyledBreadcrumb from "./styled-breadcrumbs";

const Breadcrumbs = ({ t, category }) => {
  return (
    <StyledBreadcrumb>
      <Link className="breadcrumb-links" href="/">{t("Home")}</Link>
      <Link className="breadcrumb-links" href={category.data?.[0].attributes.general_category.data.attributes.url || "" }>
        {category.data?.[0].attributes.general_category.data.attributes.name}
      </Link>
      <span className="breadcrumb-links last">{category.data?.[0].attributes.name}</span>
    </StyledBreadcrumb>
  );
};

export default Breadcrumbs;
