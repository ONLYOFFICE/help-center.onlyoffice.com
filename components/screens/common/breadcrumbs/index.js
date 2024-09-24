import StyledBreadcrumbs from "./styled-breadcrumbs";
import { forwardRef } from "react";
import InternalLink from "../../../common/internal-link";

const Breadcrumbs = forwardRef(({
    t,
    categoryName,
    categoryUrl,
    pageName,
    level2CategoryName,
    level2CategoryUrl,
    level3CategoryName,
    level3CategoryUrl,
    level4CategoryName,
    level4CategoryUrl
  }, ref) => {
  return (
    <StyledBreadcrumbs ref={ref}>
      <li><InternalLink className="breadcrumb-link" href="/" label={t("Home")} /></li>
      {categoryUrl &&
        <li><InternalLink className="breadcrumb-link" href={categoryUrl} label={categoryName} /></li>
      }
      {level2CategoryUrl &&
        <li><InternalLink className="breadcrumb-link" href={level2CategoryUrl} label={level2CategoryName} /></li>
      }
      {level3CategoryUrl && !level3CategoryUrl.includes("#") &&
        <li><InternalLink className="breadcrumb-link" href={level3CategoryUrl} label={level3CategoryName} /></li>
      }
      {level4CategoryUrl && !level4CategoryUrl.includes("#") &&
        <li><InternalLink className="breadcrumb-link" href={level4CategoryUrl} label={level4CategoryName} /></li>
      }
      <li><span className="breadcrumb-link last">{pageName}</span></li>
    </StyledBreadcrumbs>
  );
});

export default Breadcrumbs;
