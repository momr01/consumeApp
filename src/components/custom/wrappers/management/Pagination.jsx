import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Pagination = ({ redux, translation }) => {
  const dispatch = useDispatch();

  const { itemsPerPage, page, total } = useSelector(redux.selectPagination);
  const search = useSelector(redux.selectSearch);
  const filterBtn = useSelector(redux.selectFilterBtn);
  const filterActive = useSelector(redux.selectFilterActive);
  const filterData = useSelector(redux.selectDataFiltered);

  const number = 2;
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const calcTotal =
      search?.length > 0
        ? Math.round(filterData?.length / number)
        : Math.round(filterBtn[filterActive] / number);
    setTotalPages(calcTotal);
  }, [filterActive, number, filterData, page]);

  useEffect(() => {
    const changeItems = () => {
      const lastIndex = page * number;
      const firstIndex = lastIndex - number;

      const arrayIndexes = [];

      for (let i = firstIndex; i < lastIndex; i++) {
        arrayIndexes.push(i);
      }

      dispatch(
        redux.setPagination({ name: "itemsPerPage", value: arrayIndexes })
      );
    };

    changeItems();
  }, [page, number]);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="mb-4 sm:mb-0 sm:order-1"
        role="navigation"
        aria-label="Navigation"
      >
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <button
              className={`btn bg-white border-slate-200 ${
                page === 1
                  ? "text-slate-300 cursor-not-allowed"
                  : "hover:border-slate-300 text-primary"
              }`}
              onClick={() =>
                dispatch(redux.setPagination({ name: "page", value: page - 1 }))
              }
              disabled={page === 1}
            >
              &lt;- {translation.table.tablePrev}
            </button>
          </li>
          <li className="ml-3 first:ml-0">
            <button
              className={`btn bg-white border-slate-200 ${
                page === totalPages
                  ? "text-slate-300 cursor-not-allowed"
                  : "hover:border-slate-300 text-primary"
              }`}
              onClick={() =>
                dispatch(redux.setPagination({ name: "page", value: page + 1 }))
              }
              disabled={page === totalPages}
            >
              {translation.table.tableNext} -&gt;
            </button>
          </li>
        </ul>
      </nav>

      <div className="text-sm text-slate-500 text-center sm:text-left">
        {translation.table.showing}{" "}
        <span className="font-medium text-slate-600">
          {filterData?.length > 0 ? itemsPerPage[0] + 1 : "0"}
        </span>{" "}
        {translation.table.to}{" "}
        <span className="font-medium text-slate-600">
          {filterData?.length > 0
            ? page === totalPages
              ? filterBtn[filterActive] > filterData.length
                ? filterData.length
                : filterBtn[filterActive]
              : itemsPerPage[itemsPerPage.length - 1] + 1
            : "0"}
        </span>{" "}
        {translation.table.of}{" "}
        <span className="font-medium text-slate-600">{filterData.length}</span>{" "}
        {translation.table.results}
      </div>
    </div>
  );
};

export default Pagination;
