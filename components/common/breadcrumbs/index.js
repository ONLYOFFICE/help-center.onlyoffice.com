import StyledBreadcrumb from "./styled-breadcrumbs";
import InternalLink from "../internal-link";

const Breadcrumbs = ({
    t,
    categoryName,
    categoryUrl,
    pageName,
    level2CategoryName,
    level2CategoryUrl,
    level3CategoryName,
    level3CategoryUrl
  }) => {
  return (
    <StyledBreadcrumb>
      <InternalLink className="breadcrumb-links" href="/" label={t("Home")} />
      {categoryName &&
        <InternalLink className="breadcrumb-links" href={categoryUrl} label={categoryName} />
      }
      {level2CategoryName &&
        <InternalLink className="breadcrumb-links" href={level2CategoryUrl} label={level2CategoryName} />
      }
      {level3CategoryName &&
        <InternalLink className="breadcrumb-links" href={level3CategoryUrl} label={level3CategoryName} />
      }
      <span className="breadcrumb-links last">{pageName}</span>
    </StyledBreadcrumb>
  );
};

export default Breadcrumbs;
