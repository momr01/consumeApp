import { t } from "i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDataFiltered,
  selectFilterActive,
  selectFilterBtn,
  selectPagination,
  selectSearchShift,
  setPagination,
} from "../../../features/management/shifts/shiftsSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  const { itemsPerPage, page, total } = useSelector(selectPagination);
  const search = useSelector(selectSearchShift);
  const filterBtn = useSelector(selectFilterBtn);
  const filterActive = useSelector(selectFilterActive);
  const filterData = useSelector(selectDataFiltered);

  const number = 2;
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const calcTotal =
      search?.length > 0
        ? Math.round(total / number)
        : Math.round(filterBtn[filterActive] / number);
    setTotalPages(calcTotal);
  }, [filterActive, number, total, page]);

  useEffect(() => {
    const changeItems = () => {
      const lastIndex = page * number;
      const firstIndex = lastIndex - number;

      const arrayIndexes = [];

      for (let i = firstIndex; i < lastIndex; i++) {
        arrayIndexes.push(i);
      }

      dispatch(setPagination({ name: "itemsPerPage", value: arrayIndexes }));
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
                dispatch(setPagination({ name: "page", value: page - 1 }))
              }
              disabled={page === 1}
            >
              &lt;- {t("table.previous")}
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
                dispatch(setPagination({ name: "page", value: page + 1 }))
              }
              disabled={page === totalPages}
            >
              {t("table.next")} -&gt;
            </button>
          </li>
        </ul>
      </nav>

      <div className="text-sm text-slate-500 text-center sm:text-left">
        {t("table.showing")}{" "}
        <span className="font-medium text-slate-600">
          {/* {total === 0 ? "0" : itemsPerPage[0] + 1} */}
          {itemsPerPage[0] + 1}
        </span>{" "}
        {t("table.to")}{" "}
        <span className="font-medium text-slate-600">
          {/* {total === 0
            ? "0"
            : page === totalPages
            ? filterBtn[filterActive] > total
              ? total
              : filterBtn[filterActive]
            : itemsPerPage[itemsPerPage.length - 1] + 1} */}
          {page === totalPages
            ? filterBtn[filterActive]
            : itemsPerPage[itemsPerPage.length - 1] + 1}
        </span>{" "}
        {t("table.of")}{" "}
        <span className="font-medium text-slate-600">
          {/* {filterBtn[filterActive]} */}
          {filterData.length}
          {/* {total} */}
        </span>{" "}
        {t("table.results")}
      </div>
    </div>
    //  <div>hola</div>
  );
};

export default Pagination;
