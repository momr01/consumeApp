import { t } from "i18next";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPlants,
  selectPlantById,
  selectPlantsIds,
  useGetPlantsQuery,
} from "../../../features/management/plants/plantsApiSlice";
import {
  selectDataFiltered,
  selectFilterActive,
  selectFilterBtn,
  selectPagination,
  selectSearch,
  setDataFiltered,
  setFilterBtn,
  setPagination,
} from "../../../features/management/plants/plantsSlice";
import { PlantsTableItem } from "../index";

const plants = [
  {
    id: 9,
    name: "maxi",
    address: {
      address_id: 17,
      address_country: "Mexico",
      address_state: "Veracruz",
      address_city: "Orizaba",
      address_district: "Coatzacoalcos",
      address_street: "La soledad",
      address_number: "139",
      address_zip_code: "96390",
    },
  },
  {
    id: 29,
    name: "planta",
    address: {
      address_id: 17,
      address_country: "Argentina",
      address_state: "Veracruz",
      address_city: "Orizaba",
      address_district: "Coatzacoalcos",
      address_street: "La soledad",
      address_number: "139",
      address_zip_code: "96391",
    },
  },
  {
    id: 19,
    name: "nuevo",
    address: {
      address_id: 17,
      address_country: "Chile",
      address_state: "Veracruz",
      address_city: "Orizaba",
      address_district: "Coatzacoalcos",
      address_street: "La soledad",
      address_number: "139",
      address_zip_code: "96392",
    },
  },
  {
    id: 39,
    name: "friend",
    address: {
      address_id: 17,
      address_country: "Mexico",
      address_state: "Veracruz",
      address_city: "Orizaba",
      address_district: "Coatzacoalcos",
      address_street: "La soledad",
      address_number: "139",
      address_zip_code: "96393",
    },
  },
  {
    id: 339,
    name: "nadapues",
    address: {
      address_id: 17,
      address_country: "Guatemala",
      address_state: "Veracruz",
      address_city: "Orizaba",
      address_district: "Coatzacoalcos",
      address_street: "La soledad",
      address_number: "139",
      address_zip_code: "96394",
    },
  },
];

function PlantsTable() {
  const dispatch = useDispatch();

  const filterActive = useSelector(selectFilterActive);

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
    setList(plants);
  }, []);

  useEffect(() => {
    const mexico = plants.filter((plantId) => {
      return plantId.address.address_country.toLowerCase() === "mexico";
    });

    const zipCode96390 = plants.filter((plantId) => {
      return plantId.address.address_zip_code == "96390";
    });

    const veracruz = plants.filter((plantId) => {
      return plantId.address.address_state.toLowerCase() === "veracruz";
    });

    dispatch(setFilterBtn({ name: "all", value: plants.length }));
    dispatch(setFilterBtn({ name: "mexico", value: mexico.length }));
    dispatch(setFilterBtn({ name: "96390", value: zipCode96390.length }));
    dispatch(setFilterBtn({ name: "veracruz", value: veracruz.length }));
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
    plants?.length > 0
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
          {t("sidebar.plants")}{" "}
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

export default PlantsTable;

const Table = () => {
  const dispatch = useDispatch();
  const { itemsPerPage } = useSelector(selectPagination);
  const filterActive = useSelector(selectFilterActive);
  const search = useSelector(selectSearchPlant);

  const plantsIds = useSelector(selectDataFiltered);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const startActionFilter = (redux) => {
    switch (filterActive) {
      case "all":
        {
          redux ? dispatch(setDataFiltered(plants)) : setFilteredList(plants);
        }
        break;
      case "mexico":
        {
          const data = plants.filter((plantId) => {
            return plantId.address.address_country.toLowerCase() === "mexico";
          });
          redux ? dispatch(setDataFiltered(data)) : setFilteredList(data);
        }
        break;
      case "96390":
        {
          const data = plants.filter((plantId) => {
            return plantId.address.address_zip_code == "96390";
          });
          redux ? dispatch(setDataFiltered(data)) : setFilteredList(data);
        }
        break;
      case "veracruz":
        {
          const data = plants.filter((plantId) => {
            return plantId.address.address_state.toLowerCase() === "veracruz";
          });
          redux ? dispatch(setDataFiltered(data)) : setFilteredList(data);
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    // switch (filterActive) {
    //   case "all": {

    //     setFilteredList(plants);
    //     break;
    //   }
    //   case "mexico": {

    //     setFilteredList(
    //       plants.filter((plantId) => {
    //         return plantId.address.address_country.toLowerCase() === "mexico";
    //       })
    //     );
    //     break;
    //   }
    //   case "96390": {

    //     setFilteredList(
    //       plants.filter((plantId) => {
    //         return plantId.address.address_zip_code == "96390";
    //       })
    //     );

    //     break;
    //   }
    //   case "veracruz": {

    //     setFilteredList(
    //       plants.filter((plantId) => {
    //         return plantId.address.address_state.toLowerCase() === "veracruz";
    //       })
    //     );

    //     break;
    //   }

    //   default:
    //     break;
    // }
    startActionFilter(false);
  }, [filterActive]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(plants.map((li) => li.id));
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

  const showData = (data) => {
    const result = data.filter((plantId) => {
      return search.toLowerCase() === ""
        ? plantId
        : plantId.name.toLowerCase().includes(search);
    });

    console.log(result);

    // useEffect(() => {
    //   dispatch(setTotalPlants(result.length));
    // }, [result]);

    // return result;
    useEffect(() => {
      dispatch(setPagination({ name: "total", value: data.length }));
    }, [result]);
    return result;
  };

  useEffect(() => {
    dispatch(setPagination({ name: "total", value: plantsIds.length }));
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
      const result = filteredList?.filter((plantId) => {
        return plantId.name.toLowerCase().includes(search);
      });
      console.log(result);
      dispatch(setDataFiltered(result));
    } else {
      // switch (filterActive) {
      //   case "all": {
      //     dispatch(setDataFiltered(plants));
      //     break;
      //   }
      //   case "mexico": {
      //     dispatch(
      //       setDataFiltered(
      //         plants.filter((plantId) => {
      //           return (
      //             plantId.address.address_country.toLowerCase() === "mexico"
      //           );
      //         })
      //       )
      //     );
      //     break;
      //   }
      //   case "96390": {
      //     dispatch(
      //       setDataFiltered(
      //         plants.filter((plantId) => {
      //           return plantId.address.address_zip_code == "96390";
      //         })
      //       )
      //     );
      //     break;
      //   }
      //   case "veracruz": {
      //     dispatch(
      //       setDataFiltered(
      //         plants.filter((plantId) => {
      //           return (
      //             plantId.address.address_state.toLowerCase() === "veracruz"
      //           );
      //         })
      //       )
      //     );
      //     break;
      //   }

      //   default:
      //     break;
      // }
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
              <div className="font-semibold text-left">{t("form.country")}</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">{t("form.state")}</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">{t("form.city")}</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">
                {t("form.district")}
              </div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">{t("form.street")}</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">{t("form.number")}</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">{t("form.zipCode")}</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">
                {t("table.actions")}
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="text-sm divide-y divide-slate-200">
          {/* {plantsIds
            ?.filter((plantId) => {
              const result =
                search.toLowerCase() === ""
                  ? plantId
                  : plantId.name.toLowerCase().includes(search);

              console.log(result);

              return result;
            }) */}
          {plantsIds?.map(
            (plantId, index) =>
              itemsPerPage.includes(index) && (
                <PlantsTableItem
                  key={plantId.id}
                  id={plantId.id}
                  name={plantId.name}
                  country={plantId.address.address_country}
                  state={plantId.address.address_state}
                  city={plantId.address.address_city}
                  district={plantId.address.address_district}
                  street={plantId.address.address_street}
                  number={plantId.address.address_number}
                  zipCode={plantId.address.address_zip_code}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(plantId.id)}
                />
              )
          )}
        </tbody>
      </table>
    </div>
  );
};
