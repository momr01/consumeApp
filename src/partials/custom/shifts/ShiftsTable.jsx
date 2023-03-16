import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllShifts,
  selectShiftById,
  selectShiftsIds,
  useGetShiftsQuery,
} from "../../../features/management/shifts/shiftsApiSlice";
import {
  selectDataFiltered,
  selectFilterActive,
  selectPagination,
  selectSearchShift,
  setDataFiltered,
  setFilterBtn,
  setPagination,
} from "../../../features/management/shifts/shiftsSlice";
import { ShiftsTableItem } from "../index";

const shifts = [
  {
    id: 15,
    name: "Matutino",
    schedule: "09:00 - 15:00",
  },
  {
    id: 16,
    name: "Vespertino",
    schedule: "15:30 - 21:30",
  },
];

function ShiftsTable() {
  const dispatch = useDispatch();

  const filterActive = useSelector(selectFilterActive);

  //
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isError, setIsError] = useState(false);

  //

  const [list, setList] = useState([]);

  //const { isLoading, isSuccess, isError, error } = useGetShiftsQuery();

  //const shiftsIds = useSelector(selectShiftsIds);
  //const shifts = useSelector(selectAllShifts);

  useEffect(() => {
    setList(shifts);
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

    dispatch(setFilterBtn({ name: "all", value: shifts.length }));
    // dispatch(setFilterBtn({ name: "mexico", value: mexico.length }));
    // dispatch(setFilterBtn({ name: "96390", value: zipCode96390.length }));
    // dispatch(setFilterBtn({ name: "veracruz", value: veracruz.length }));
  }, []);

  useEffect(() => {
    switch (filterActive) {
      case "all":
        {
          dispatch(setDataFiltered(shifts));
        }
        break;
      // case "mexico": {
      //   return plants.filter((plantId) => {
      //     return plantId.address.address_country.toLowerCase() === "mexico";
      //   });
      // }
      // case "96390": {
      //   return plants.filter((plantId) => {
      //     return plantId.address.address_zip_code == "96390";
      //   });
      // }
      // case "veracruz": {
      //   return plants.filter((plantId) => {
      //     return plantId.address.address_state.toLowerCase() === "veracruz";
      //   });
      // }

      default:
        break;
    }
  }, [filterActive]);

  let content;
  if (isLoading) {
    content = (
      <section className="justify-center items-center flex my-2">
        <div className="loader"></div>
        <span className="ml-3 text-primary font-semibold">Cargando</span>
      </section>
    );
  } else if (isSuccess) {
    shifts?.length > 0
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
          Shifts{" "}
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
}

export default ShiftsTable;

const Table = () => {
  const dispatch = useDispatch();
  const { itemsPerPage } = useSelector(selectPagination);
  const filterActive = useSelector(selectFilterActive);
  const search = useSelector(selectSearchShift);

  const shiftsIds = useSelector(selectDataFiltered);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(shifts.map((li) => li.id));
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
    dispatch(setPagination({ name: "total", value: shiftsIds.length }));
  }, [filterActive]);

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, Number(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== Number(id)));
    }
  };

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
        {/* Table body */}
        <tbody className="text-sm divide-y divide-slate-200">
          {shiftsIds
            ?.filter((shiftId) => {
              const result =
                search.toLowerCase() === ""
                  ? shiftId
                  : shiftId.name.toLowerCase().includes(search);
              return result;
            })
            .map(
              (shiftId, index) =>
                itemsPerPage.includes(index) && (
                  <ShiftsTableItem
                    // key={shift.id}
                    // id={shift.id}
                    // name={shift.name}
                    // schedule={shift.schedule}
                    // handleClick={handleClick}
                    // isChecked={isCheck.includes(shift.id)}
                    key={shiftId.id}
                    id={shiftId.id}
                    name={shiftId.name}
                    schedule={shiftId.schedule}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(shiftId.id)}
                  />
                )
            )}
        </tbody>
      </table>
    </div>
  );
};
