import { t } from "i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Layout } from "../../../components/custom";
import {
  selectFilterActive,
  selectFilterBtn,
  setFilterActive,
  setPagination,
} from "../../../features/management/sensors/sensorsSlice";
import routes from "../../../helpers/routes";
import {
  SearchSensors,
  SensorsPagination,
  SensorsTable,
} from "../../../partials/custom";

const Sensors = () => {
  const dispatch = useDispatch();

  const filterBtn = useSelector(selectFilterBtn);
  const [selectedItems, setSelectedItems] = useState([]);

  const filterActive = useSelector(selectFilterActive);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const sensors = {
    id: 1,
    name: t("sidebar.sensors"),
    addLink: routes.addSensor,
    addTitle: t("plants.create"),
    filters: [
      {
        id: 1,
        title: t("plants.filter.all"),
        name: "All",
        value: filterBtn.all,
      },
    ],
  };

  return (
    <Layout section={t("sidebar.management")} obs={t("sidebar.sensors")}>
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div className="sm:flex sm:justify-between sm:items-center mb-5">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                {sensors.name}
              </h1>
            </div>

            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              <SearchSensors placeholder="Search sensor by name..." />

              <Link to={sensors.addLink}>
                <button className="btn bg-primary hover:bg-indigo-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">
                    {sensors.addTitle}
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="sm:flex sm:justify-between sm:items-center mb-5">
            <div className="mb-4 sm:mb-0">
              <ul className="flex flex-wrap -m-1">
                {sensors.filters?.map((filter, i) => (
                  <li key={i} className="m-1">
                    <button
                      className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border shadow-sm duration-150 ease-in-out ${
                        filterActive === filter.name.toLowerCase()
                          ? "border-transparent bg-primary text-white"
                          : "border-slate-200 hover:border-slate-300 bg-white text-slate-500"
                      }`}
                      onClick={() => {
                        dispatch(setPagination({ name: "page", value: 1 }));
                        dispatch(setFilterActive(filter.name.toLowerCase()));
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
              {/* Delete button 
            <DeleteButton selectedItems={selectedItems} /> */}

              {/* Dropdown */}
              {/* <UsersDateSelect /> */}

              {/* Filter button */}
              {/* <PlantsFilterButton align="right" /> */}
            </div>
          </div>

          {/* Table */}
          {/* <PlantsTable selectedItems={handleSelectedItems} /> */}
          <SensorsTable selectedItems={handleSelectedItems} />

          {/* Pagination */}

          <div className="mt-8">
            {/* {data.pagination()} */}
            {/* <PlantsPagination /> */}
            <SensorsPagination />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Sensors;
