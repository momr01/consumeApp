import { t } from "i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDataFiltered,
  selectFilterActive,
  selectPagination,
  selectSearchSensor,
  setDataFiltered,
  setFilterBtn,
  setPagination,
} from "../../../features/management/sensors/sensorsSlice";
import SensorsTableItem from "./SensorsTableItem";

const sensors = [
  {
    id: 2,
    name: "sensor_t34",
    consume_type: {
      id: 1,
      type_name: "Electricity",
    },
    plant: {
      id: 2,
      name: "Plant 2",
      address: {
        id: 2,
        country: "Mexico",
        state: "Veracruz",
        city: "Orizaba",
        district: "Coatzacoalcos",
        street: "La soledad",
        number: "20",
        zip_code: "96390",
      },
    },
  },
  {
    id: 3,
    name: "sensor_x12",
    consume_type: {
      id: 1,
      type_name: "Electricity",
    },
    plant: {
      id: 2,
      name: "Plant 2",
      address: {
        id: 2,
        country: "Mexico",
        state: "Veracruz",
        city: "Orizaba",
        district: "Coatzacoalcos",
        street: "La soledad",
        number: "20",
        zip_code: "96390",
      },
    },
  },
];

const SensorsTable = () => {
  const dispatch = useDispatch();

  const filterActive = useSelector(selectFilterActive);

  //
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isError, setIsError] = useState(false);
  //

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(sensors);
  }, []);

  useEffect(() => {
    dispatch(setFilterBtn({ name: "all", value: sensors.length }));
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
    sensors?.length > 0
      ? (content = <Table />)
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
          {t("sidebar.sensors")}{" "}
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

export default SensorsTable;

const Table = () => {
  const dispatch = useDispatch();
  const { itemsPerPage } = useSelector(selectPagination);
  const filterActive = useSelector(selectFilterActive);
  const search = useSelector(selectSearchSensor);

  const sensorsIds = useSelector(selectDataFiltered);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const startActionFilter = (redux) => {
    switch (filterActive) {
      case "all":
        {
          redux ? dispatch(setDataFiltered(sensors)) : setFilteredList(sensors);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    startActionFilter(false);
  }, [filterActive]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(sensors.map((li) => li.id));
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

  useEffect(() => {
    dispatch(setPagination({ name: "total", value: sensorsIds.length }));
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
    if (search.toLowerCase() !== "") {
      const result = filteredList?.filter((sensorId) => {
        return sensorId.name.toLowerCase().includes(search);
      });
      console.log(result);
      dispatch(setDataFiltered(result));
    } else {
      startActionFilter(true);
    }
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
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">{t("form.name")}</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">Consume Type</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">Plant</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">
                {t("table.actions")}
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="text-sm divide-y divide-slate-200">
          {sensorsIds?.map(
            (sensorId, index) =>
              itemsPerPage.includes(index) && (
                <SensorsTableItem
                  key={sensorId.id}
                  id={sensorId.id}
                  name={sensorId.name}
                  consumeType={sensorId.consume_type.type_name}
                  plant={sensorId.plant.name}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(sensorId.id)}
                />
              )
          )}
        </tbody>
      </table>
    </div>
  );
};
