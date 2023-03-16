import { useSelector } from "react-redux";
import { PaginationBase } from "../../../components/custom";
import {
  selectDataFiltered,
  selectFilterActive,
  selectFilterBtn,
  selectPagination,
  selectSearchEq,
  setPagination,
} from "../../../features/management/equipment/equipmentSlice";

const Pagination = () => {
  const { itemsPerPage, page, total } = useSelector(selectPagination);
  const search = useSelector(selectSearchEq);
  const filterBtn = useSelector(selectFilterBtn);
  const filterActive = useSelector(selectFilterActive);
  const filterData = useSelector(selectDataFiltered);

  return (
    <PaginationBase
      itemsPerPage={itemsPerPage}
      page={page}
      total={total}
      search={search}
      filterBtn={filterBtn}
      filterActive={filterActive}
      filterData={filterData}
      setPagination={setPagination}
    />
  );
};

export default Pagination;
