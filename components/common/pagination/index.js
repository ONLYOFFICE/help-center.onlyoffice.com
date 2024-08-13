import { useState, useEffect, use } from "react";
import StyledPagination from './styled-pagination'
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import InternalLink from "../internal-link";

const Pagination = ({ searchResults, locale, getPaginationGroup, sort, page, countPage }) => {
  const router = useRouter();

  return (
    <div>
      <StyledPagination className="pagination">
        <div className={`pagination-item pagination-item-prev ${page === 1 ? "disabled" : ""}`}></div>
        {getPaginationGroup.map((item, index) => (
          <InternalLink
          className={`pagination-item ${page === item ? "active" : ""}`}
          href={router.pathname === "/searchresult"
            ? `/searchresult?query=${router.query.query}&page=${item}${sort !== undefined && sort !== "asc" ? `&_sort=${sort}` : ""}`
            : ""
          }
          label={item}
          tabIndex={page === item ? -1 : 0}
          key={index}
        />
        
        ))}
        <div className={`pagination-item pagination-item-next ${page === countPage ? "disabled" : ""}`}></div>
    </StyledPagination>
    </div>
  )
};

Pagination.propTypes = {
  page: PropTypes.number,
  countPage: PropTypes.number,
  getPaginationGroup: PropTypes.arrayOf(PropTypes.number),
  locale: PropTypes.string,
  sort: PropTypes.string
};

export default Pagination;
