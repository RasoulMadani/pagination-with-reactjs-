import _ from "lodash";
const Pagination = ({ pages, setPage, activePage }) => {
  return (
    <nav>
      <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
        <li className="page-item">
          <a href="#" className="page-link">
            قبلی
          </a>
        </li>
        {_.times(pages, (index) => (
          <li
            key={`pagination-` + index}
            className={`page-item ${index + 1 === activePage ? "active" : ""}`}
            onClick={() => setPage(index + 1)}
          >
            <a href="#" className="page-link">
              {index + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a href="#" className="page-link">
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
