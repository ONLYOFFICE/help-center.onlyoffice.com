import StyledPagination from './styled-pagination'
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import InternalLink from "../internal-link";

const Pagination = ({ getPaginationGroup, sort, page, countPage }) => {
  const router = useRouter();

  return (
    <div>
      <StyledPagination className="pagination">
        <InternalLink
          className={`pagination-item pagination-item-prev ${page === 1 ? "disabled" : ""}`}
          href={router.pathname === "/searchresult"
            ? `/searchresult?query=${router.query.query}&page=${page - 1}${sort !== undefined && sort !== "asc" ? `&_sort=${sort}` : ""}`
            : ""
          }
          tabIndex={page === 1 ? -1 : 0}
        />

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
        <InternalLink
          className={`pagination-item pagination-item-next ${page === countPage ? "disabled" : ""}`}
          href={router.pathname === "/searchresult"
            ? `/searchresult?query=${router.query.query}&page=${page + 1}${sort !== undefined && sort !== "asc" ? `&_sort=${sort}` : ""}`
            : ""
          }
          tabIndex={page === countPage ? -1 : 0}
        />
    </StyledPagination>
    </div>
  )
};

Pagination.propTypes = {
  page: PropTypes.number,
  countPage: PropTypes.number,
  getPaginationGroup: PropTypes.arrayOf(PropTypes.number),
  sort: PropTypes.string
};

export default Pagination;
