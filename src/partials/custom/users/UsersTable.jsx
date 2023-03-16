import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersTableItem } from "..";
import {
  selectAllUsers,
  selectUserById,
  selectUsersIds,
  useGetUsersQuery,
} from "../../../features/users/usersApiSlice";
import {
  selectDataFiltered,
  selectFilterActive,
  selectPagination,
  selectSearch,
  setDataFiltered,
  setFilterActive,
  setFilterBtn,
  setPagination,
} from "../../../features/users/usersSlice";

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

function UsersTable() {
  const dispatch = useDispatch();

  const filterActive = useSelector(selectFilterActive);

  //
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isError, setIsError] = useState(false);
  //

  const [list, setList] = useState([]);

  //const { isLoading, isSuccess, isError, error, isFetching } =
  //  useGetUsersQuery();

  // const usersIds = useSelector(selectUsersIds);
  // const users = useSelector(selectAllUsers);

  useEffect(() => {
    setList(users);
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

    dispatch(setFilterBtn({ name: "all", value: users.length }));
    // dispatch(setFilterBtn({ name: "mexico", value: mexico.length }));
    // dispatch(setFilterBtn({ name: "96390", value: zipCode96390.length }));
    // dispatch(setFilterBtn({ name: "veracruz", value: veracruz.length }));
  }, []);

  useEffect(() => {
    switch (filterActive) {
      case "all": {
        dispatch(setDataFiltered(users));
        break;
      }
      // case "mexico": {
      //   dispatch(
      //     setDataFiltered(
      //       plants.filter((plantId) => {
      //         return plantId.address.address_country.toLowerCase() === "mexico";
      //       })
      //     )
      //   );
      //   break;
      // }
      // case "96390": {
      //   dispatch(
      //     setDataFiltered(
      //       plants.filter((plantId) => {
      //         return plantId.address.address_zip_code == "96390";
      //       })
      //     )
      //   );
      //   break;
      // }
      // case "veracruz": {
      //   dispatch(
      //     setDataFiltered(
      //       plants.filter((plantId) => {
      //         return plantId.address.address_state.toLowerCase() === "veracruz";
      //       })
      //     )
      //   );
      //   break;
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
    users?.length > 0
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
          Users{" "}
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

export default UsersTable;

const Table = () => {
  const dispatch = useDispatch();
  const { itemsPerPage } = useSelector(selectPagination);
  const filterActive = useSelector(selectFilterActive);
  const search = useSelector(selectSearchUser);

  const usersIds = useSelector(selectDataFiltered);
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(users.map((li) => li.id));
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
    const result = data.filter((userId) => {
      return search.toLowerCase() === ""
        ? userId
        : userId.first_name.toLowerCase().includes(search);
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
    dispatch(setPagination({ name: "total", value: usersIds.length }));
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
              <div className="font-semibold text-left">Username</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">First name</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">Last name</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">Email</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">Role</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">State</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">Data entry</div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <div className="font-semibold text-left">Actions</div>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm divide-y divide-slate-200">
          {usersIds
            ?.filter((userId) => {
              const result =
                search.toLowerCase() === ""
                  ? userId
                  : userId.first_name.toLowerCase().includes(search);

              console.log(result);

              // useEffect(()=> {
              //   dispatch(setPagination({ name: "total", value: result }));

              // }, [result])

              return result;
            })
            .map(
              (user, index) =>
                itemsPerPage.includes(index) && (
                  <UsersTableItem
                    key={user.id}
                    id={user.id}
                    username={user.username}
                    firstName={user.first_name}
                    lastName={user.last_name}
                    email={user.email}
                    role={user.role.role_name}
                    isActive={user.is_active}
                    dataEntry={user.data_entry}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(user.id)}
                  />
                )
            )}
        </tbody>
      </table>
    </div>
  );
};
