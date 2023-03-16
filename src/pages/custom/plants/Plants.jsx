import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Element, WithRole } from "../../../components/custom";
import {
  selectFilterActive,
  selectFilterBtn,
  selectSearch,
  setFilterActive,
  setFilterBtn,
  setPagination,
  setSearch,
  selectPagination,
  selectDataFiltered,
  setDataFiltered,
} from "../../../features/management/plants/plantsSlice";
import routes from "../../../helpers/routes";

const Plants = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filterBtn = useSelector(selectFilterBtn);
  const filterActive = useSelector(selectFilterActive);

  const redux = {
    selectFilterActive,
    selectPagination,
    selectSearch,
    selectFilterBtn,
    selectDataFiltered,
    setPagination,
    setFilterActive,
    setSearch,
    setDataFiltered,
  };

  const structure = {
    id: 1,
    name: t("sidebar.plants"),
    addLink: routes.addPlant,
    updateLink: (id)=> routes.updatePlant(id),
    addTitle: t("plants.create"),
    filters: [
      {
        id: 1,
        title: t("plants.filter.all"),
        name: "All",
        value: filterBtn.all,
      },
      {
        id: 2,
        title: "Mexico",
        name: "Mexico",
        value: filterBtn.mexico,
      },
      {
        id: 3,
        title: "96390",
        name: "96390",
        value: filterBtn["96390"],
      },
      {
        id: 4,
        title: "Veracruz",
        name: "Veracruz",
        value: filterBtn.veracruz,
      },
    ],
    manage: {
        edit: true,
        enable: false,
        disable: false,
        delete: true,
        manage: true,
    }
  };

  const translation = {
    layoutSection: t("sidebar.management"),
    layoutObs: t("sidebar.plants"),
    searchPlaceholder: t("plants.placeholder"),
    table: {
      tablePrev: t("table.previous"),
      tableNext: t("table.next"),
      showing: t("table.showing"),
      to: t("table.to"),
      of: t("table.of"),
      results: t("table.results"),
    },
  };

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

  const filters = () => {
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
  };

  const startActionFilter = (redux, setFilteredList) => {
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

  const tableData = [
    {
        id: 1,
        name: "name",
        title: t("form.name"),
        tag: ["name"]
    },
    {
        id: 2,
        name: "country",
        title: t("form.country"),
        tag: ["address", "address_country"]
    },
    {
        id: 3,
        name: "state",
        title: t("form.state"),
        tag: ["address", "address_state"]
    },
    {
        id: 4,
        name: "city",
        title: t("form.city"),
        tag: ["address", "address_city"]
    },
    {
        id: 5,
        name: "district",
        title: t("form.district"),
        tag: ["address", "address_district"]
    },
    {
        id: 6,
        name: "street",
        title: t("form.street"),
        tag: ["address", "address_street"]
    },
    {
        id: 7,
        name: "number",
        title: t("form.number"),
        tag: ["address", "address_number"]
    },
    {
        id: 8,
        name: "zipCode",
        title: t("form.zipCode"),
        tag: ["address", "address_zip_code"]
    },
  ]

  const startSearching = (search, filteredList, setFilteredList) => {
    if (search.toLowerCase() !== "") {
      const result = filteredList?.filter((elementId) => {
        return elementId.name.toLowerCase().includes(search);
      });
      console.log(result);
      dispatch(setDataFiltered(result));
    } else {
      startActionFilter(true, setFilteredList);
    }

  }


  return (
    <Element
      redux={redux}
      dataStructure={structure}
      translation={translation}
      data={plants}
      filters={filters}
      startActionFilter={startActionFilter}
      tableData={tableData}
      startSearching={startSearching}
    />
  );
};

export default WithRole(Plants, "admin");
