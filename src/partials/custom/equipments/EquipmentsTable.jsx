import { t } from "i18next";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EqTableItem } from "..";
import {
  selectDataFiltered,
  selectFilterActive,
  selectPagination,
  selectSearchEq,
  setDataFiltered,
  setFilterBtn,
  setPagination,
} from "../../../features/management/equipment/equipmentSlice";

const equipments = [
  {
    id: 1,
    brand: "Samsung",
    equipment_type: {
      id: 1,
      type_name: "Indoor",
    },
  },
  {
    id: 2,
    brand: "Samsung",
    equipment_type: {
      id: 2,
      type_name: "Outdoor",
    },
  },
];

function EquipmentsTable() {
  const dispatch = useDispatch();

  //
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isError, setIsError] = useState(false);
  //

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(equipments);
  }, []);

  useEffect(() => {
    // const mexico = plants.filter((plantId) => {
    //   return plantId.address.address_country.toLowerCase() === "mexico";
    // });

    // const zipCode96390 = plants.filter((plantId) => {
    //   return plantId.address.address_zip_code == "96390";
    // });

    // const veracruz = plants.filter((plantId) => {
    //   return plantId.address.address_state.toLowerCase() === "veracruz";
    // });

    dispatch(setFilterBtn({ name: "all", value: equipments.length }));
    // dispatch(setFilterBtn({ name: "mexico", value: mexico.length }));
    // dispatch(setFilterBtn({ name: "96390", value: zipCode96390.length }));
    // dispatch(setFilterBtn({ name: "veracruz", value: veracruz.length }));
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
    equipments?.length > 0
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
          {t("sidebar.equipments")}{" "}
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
      {/* <div>
       
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
          
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
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Schedule</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Actions</div>
                </th>
              </tr>
            </thead>
           
            <tbody className="text-sm divide-y divide-slate-200">
              {content}
            </tbody>
          </table>
        </div>
      </div> */}
      {content}
    </div>
  );
}

export default EquipmentsTable;

const Table = () => {
  const dispatch = useDispatch();
  const { itemsPerPage } = useSelector(selectPagination);
  const filterActive = useSelector(selectFilterActive);
  const search = useSelector(selectSearchEq);

  const eqIds = useSelector(selectDataFiltered);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    switch (filterActive) {
      case "all": {
        //dispatch(setDataFiltered(plants));
        setFilteredList(equipments);
        break;
      }

      default:
        break;
    }
  }, [filterActive]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(plants.map((li) => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  useEffect(() => {
    setSelectedItems(isCheck);
  }, [isCheck]);

  useEffect(() => {
    dispatch(setPagination({ name: "total", value: eqIds.length }));
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
      const result = filteredList?.filter((eqId) => {
        return eqId.brand.toLowerCase().includes(search);
      });
      console.log(result);
      dispatch(setDataFiltered(result));
    } else {
      switch (filterActive) {
        case "all": {
          dispatch(setDataFiltered(equipments));
          break;
        }
        default:
          break;
      }
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
              <div className="font-semibold text-left">Brand</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">Equipment Type</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">
                {t("table.actions")}
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="text-sm divide-y divide-slate-200">
          {eqIds?.map(
            (eqId, index) =>
              itemsPerPage.includes(index) && (
                <EqTableItem
                  key={eqId.id}
                  id={eqId.id}
                  name={eqId.brand}
                  equipmentType={eqId.equipment_type.type_name}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(eqId.id)}
                />
              )
          )}
        </tbody>
      </table>
    </div>
  );
};
