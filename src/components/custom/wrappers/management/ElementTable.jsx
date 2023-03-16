import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { PlantsTableItem } from "../../../../partials/custom";
import ElementTableItem from "./ElementTableItem";

const ElementTable = ({
  data,
  redux,
  filters,
  translation,
  startActionFilter,
  tableData,
  dataStructure,
  startSearching,
}) => {
  //
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isError, setIsError] = useState(false);
  //

  const [list, setList] = useState([]);

  // const { isLoading, isSuccess, isError, refetch } = useGetPlantsQuery();

  // const plantsIds = useSelector(selectPlantsIds);
  //const plants = useSelector(selectAllPlants);

  useEffect(() => {
    setList(data);
  }, []);

  useEffect(() => {
    filters();
  }, []);

  let content;
  if (isLoading) {
    content = (
      <section className="justify-center items-center flex my-2">
        <div className="loader"></div>
        <span className="ml-3 text-primary font-semibold">Cargando</span>
      </section>
    );
  } else if (isSuccess) {
    data?.length > 0
      ? (content = (
          <Table
            redux={redux}
            startActionFilter={startActionFilter}
            data={data}
            tableData={tableData}
            dataStructure={dataStructure}
            startSearching={startSearching}
          />
        ))
      : (content = (
          <section className="justify-center items-center flex my-2">
            <span className="ml-3 text-primary font-semibold">
              No existen datos
            </span>
          </section>
        ));
  } else if (isError) {
    content = (
      <section className="justify-center items-center flex my-2">
        <span className="ml-3 text-primary font-semibold">
          Error en el servidor
        </span>
      </section>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4 flex justify-between items-center">
        <h2 className="font-semibold text-slate-800">
          {translation.layoutObs}{" "}
          <span className="text-slate-400 font-medium">{list?.length}</span>
        </h2>
        <button onClick={() => refetch()}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-rotate-clockwise"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#06184a"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
          </svg>
        </button>
      </header>
      {content}
    </div>
  );
};

export default ElementTable;

const Table = ({
  redux,
  startActionFilter,
  data,
  tableData,
  dataStructure,
  startSearching,
}) => {
  const dispatch = useDispatch();
  const { itemsPerPage } = useSelector(redux.selectPagination);
  const filterActive = useSelector(redux.selectFilterActive);
  const search = useSelector(redux.selectSearch);

  const elementsIds = useSelector(redux.selectDataFiltered);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    startActionFilter(false, setFilteredList);
  }, [filterActive]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(data.map((li) => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  useEffect(() => {
    setSelectedItems(isCheck);
  }, [isCheck]);

  // const showData = (data) => {
  //   const result = data.filter((elementId) => {
  //     return search.toLowerCase() === ""
  //       ? elementId
  //       : elementId.name.toLowerCase().includes(search);
  //   });

  //   console.log(result);
  //   useEffect(() => {
  //     dispatch(redux.setPagination({ name: "total", value: data.length }));
  //   }, [result]);
  //   return result;
  // };

  useEffect(() => {
    dispatch(redux.setPagination({ name: "total", value: elementsIds.length }));
  }, [filterActive]);

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, Number(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== Number(id)));
    }
  };

  useEffect(() => {
    // if (search.toLowerCase() !== "") {
    //   const result = filteredList?.filter((elementId) => {
    //     return elementId.name.toLowerCase().includes(search);
    //   });
    //   console.log(result);
    //   dispatch(redux.setDataFiltered(result));
    // } else {
    //   startActionFilter(true, setFilteredList);
    // }
    startSearching(search, filteredList, setFilteredList);
  }, [search, filterActive]);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        {/* Table header */}
        <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
          <tr>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
              <div className="flex items-center">
                <label className="inline-flex">
                  <span className="sr-only">Select all</span>
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </label>
              </div>
            </th>
            {tableData.map((item, index) => (
              <th
                key={index}
                className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
              >
                <div className="font-semibold text-left">{item.title}</div>
              </th>
            ))}
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">
                {t("table.actions")}
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="text-sm divide-y divide-slate-200">
          {elementsIds?.map(
            (elementId, index) =>
              itemsPerPage.includes(index) && (
                // <PlantsTableItem
                //   key={plantId.id}
                //   id={plantId.id}
                //   name={plantId.name}
                //   country={plantId.address.address_country}
                //   state={plantId.address.address_state}
                //   city={plantId.address.address_city}
                //   district={plantId.address.address_district}
                //   street={plantId.address.address_street}
                //   number={plantId.address.address_number}
                //   zipCode={plantId.address.address_zip_code}
                //   handleClick={handleClick}
                //   isChecked={isCheck.includes(plantId.id)}
                // />
                <ElementTableItem
                  element={elementId}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(elementId.id)}
                  tableData={tableData}
                  dataStructure={dataStructure}
                />
              )
          )}
        </tbody>
      </table>
    </div>
  );
};
