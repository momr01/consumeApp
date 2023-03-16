import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import ElementTable from "./ElementTable";
import Pagination from "./Pagination";
import Search from "./Search";

const Element = ({
  redux,
  dataStructure,
  translation,
  data,
  filters,
  startActionFilter,
  tableData,
  startSearching
}) => {
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const filterActive = useSelector(redux.selectFilterActive);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <Layout section={translation.layoutSection} obs={translation.layoutObs}>
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div className="sm:flex sm:justify-between sm:items-center mb-5">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                {dataStructure.name}
              </h1>
            </div>

            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* {data.search()} */}
              {/* <SearchPlants placeholder={translation.searchPlaceholder} /> */}
              <Search
                placeholder={translation.searchPlaceholder}
                redux={redux}
              />

              <Link to={dataStructure.addLink}>
                <button className="btn bg-primary hover:bg-indigo-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">
                    {dataStructure.addTitle}
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="sm:flex sm:justify-between sm:items-center mb-5">
            <div className="mb-4 sm:mb-0">
              <ul className="flex flex-wrap -m-1">
                {dataStructure.filters?.map((filter, i) => (
                  <li key={i} className="m-1">
                    <button
                      className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border shadow-sm duration-150 ease-in-out ${
                        filterActive === filter.name.toLowerCase()
                          ? "border-transparent bg-primary text-white"
                          : "border-slate-200 hover:border-slate-300 bg-white text-slate-500"
                      }`}
                      onClick={() => {
                        dispatch(
                          redux.setPagination({ name: "page", value: 1 })
                        );
                        dispatch(
                          redux.setFilterActive(filter.name.toLowerCase())
                        );
                      }}
                    >
                      {filter.title}
                      <span className="ml-1 text-indigo-200">
                        {filter.value}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Delete button */}

              {/* {data.deleteBtn(selectedItems)}
                <DeleteButton selectedItems={selectedItems} /> */}
              {/* Dropdown */}
              {/* <UsersDateSelect /> */}

              {/* Filter button */}
              {/* {data.filterBtn()} */}
              {/* <PlantsFilterButton align="right" /> */}
            </div>
          </div>

          {/* Table */}
          {/* {data.table(handleSelectedItems)} */}
          {/* <PlantsTable selectedItems={handleSelectedItems} /> */}
          <ElementTable
            redux={redux}
            data={data}
            translation={translation}
            filters={filters}
            startActionFilter={startActionFilter}
            tableData={tableData}
            dataStructure={dataStructure}
            startSearching={startSearching}
          />

          {/* Pagination */}

          <div className="mt-8">
            {/* {data.pagination()} */}
            {/* <PlantsPagination /> */}
            <Pagination redux={redux} translation={translation} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Element;
