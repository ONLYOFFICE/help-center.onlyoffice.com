import StyledBreadcrumbs from "./styled-breadcrumbs";
import { forwardRef } from "react";
import InternalLink from "../../../common/internal-link";

const Breadcrumbs = forwardRef(({
    t,
    categoryName,
    categoryUrl,
    subCategoryName,
    subCategoryUrl,
    pageName,
    level2CategoryName,
    level2CategoryUrl,
    level3CategoryName,
    level3CategoryUrl,
    level4CategoryName,
    level4CategoryUrl
  }, ref) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
  
    const words = text.split(' ');
    let start = [], end = [], length = 0;
  
    for (let word of words) {
      if (length + word.length + 1 > Math.floor(maxLength / 2)) break;
      start.push(word);
      length += word.length + 1;
    }
  
    length = 0;
    for (let i = words.length - 1; i >= 0; i--) {
      if (length + words[i].length + 1 > Math.floor(maxLength / 2)) break;
      end.unshift(words[i]);
      length += words[i].length + 1;
    }
  
    return `${start.join(' ')}...${end.join(' ')}`;
  };

  return (
    <StyledBreadcrumbs ref={ref}>
      <li><InternalLink className="breadcrumb-link" href="/" label={t("Home")} /></li>
      {categoryUrl &&
        <li><InternalLink className="breadcrumb-link" href={categoryUrl} label={categoryName} /></li>
      }
      {subCategoryName &&
        <li><InternalLink className="breadcrumb-link" href={subCategoryUrl} label={subCategoryName} /></li>
      }
      {level2CategoryUrl &&
        <li><InternalLink className="breadcrumb-link" href={level2CategoryUrl} label={level2CategoryName} /></li>
      }
      {level3CategoryUrl &&
        <li><InternalLink className="breadcrumb-link" href={level3CategoryUrl} label={level3CategoryName} /></li>
      }
      {level4CategoryUrl &&
        <li><InternalLink className="breadcrumb-link" href={level4CategoryUrl} label={level4CategoryName} /></li>
      }
      <li><span className="breadcrumb-link last">{truncateText(pageName, 32)}</span></li>
    </StyledBreadcrumbs>
  );
});

export default Breadcrumbs;
