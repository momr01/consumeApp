import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Element, WithRole } from "../../../components/custom";
import {
  selectFilterActive,
  selectFilterBtn,
  setFilterActive,
  setPagination,
  selectPagination,
  selectSearch,
  setSearch,
  selectDataFiltered,
  setDataFiltered,
  setFilterBtn
} from "../../../features/users/usersSlice";
import routes from "../../../helpers/routes";

const Users = () => {
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
    name: t("sidebar.users"),
    addLink: routes.addUser,
    updateLink: (id)=> routes.updateUser(id),
    addTitle: "Create User",
    filters: [
      {
        id: 1,
        title: "All",
        name: "All",
        value: filterBtn.all,
      },
    ],
    manage: {
        edit: true,
        enable: true,
        disable: true,
        delete: false,
        manage: false,
    }
   
  };

  const translation = {
    layoutSection: t("sidebar.management"),
    layoutObs: t("sidebar.users"),
    searchPlaceholder: t("users.placeholder"),
    table: {
      tablePrev: t("table.previous"),
      tableNext: t("table.next"),
      showing: t("table.showing"),
      to: t("table.to"),
      of: t("table.of"),
      results: t("table.results"),
    },
  };

  const users = [
    {
      id: 1,
      username: "roman123",
      first_name: "Roman",
      last_name: "Marquez",
      email: "roman.martinez@syncronik.team",
      role: {
        role_id: 1,
        role_name: "Administrador",
      },
      is_active: true,
      data_entry: "2023-01-18T22:48:04.815361Z",
    },
    {
      id: 18,
      username: "angel1234",
      first_name: "Angel Ezequiel",
      last_name: "Jorge Valdes",
      email: "43angelgonzalo@email.com",
      role: {
        role_id: 3,
        role_name: "Lider de mantenimiento",
      },
      is_active: true,
      data_entry: "2023-01-19T18:35:03.349944Z",
    },
  ];

  const filters = () => {
    dispatch(setFilterBtn({ name: "all", value: users.length }));
  }

  const startActionFilter = (redux, setFilteredList) => {
    switch (filterActive) {
      case "all":
        {
          redux ? dispatch(setDataFiltered(users)) : setFilteredList(users);
        }
        break;
      default:
        break;
    }
  };

  const tableData = [
    {
        id: 1,
        name: "username",
        title: t("form.username"),
        tag: ["username"]
    },
    {
        id: 2,
        name: "first name",
        title: t("form.firstName"),
        tag: ["first_name"]
    },
    {
        id: 3,
        name: "last name",
        title: t("form.lastName"),
        tag: ["last_name"]
    },
    {
        id: 4,
        name: "email",
        title: t("form.email"),
        tag: ["email"]
    },
    {
        id: 5,
        name: "role",
        title: t("form.role"),
        tag: ["role", "role_name"]
    },
    {
        id: 6,
        name: "state",
        title: t("form.state"),
        tag: ["is_active"]
    },
    {
        id: 7,
        name: "data_entry",
        title: t("form.dataEntry"),
        tag: ["data_entry"]
    },
  ]

  const startSearching = (search, filteredList, setFilteredList) => {
    if (search.toLowerCase() !== "") {
      const result = filteredList?.filter((elementId) => {
        return elementId.first_name.toLowerCase().includes(search);
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
      data={users}
      filters={filters}
      startActionFilter={startActionFilter}
      tableData={tableData}
      startSearching={startSearching}
    />
  );
};

export default WithRole(Users, "admin");
