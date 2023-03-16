import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import routes from "../../../helpers/routes";
import { useForm } from "react-hook-form";
import {
  selectUserById,
  useAddUserMutation,
  useGetRolesQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../../features/users/usersApiSlice";
import { useSelector } from "react-redux";
import icons from "../../../images/custom/icons";

const FormUser = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const {data: roles } = useGetRolesQuery()

  console.log(roles)

  useGetUsersQuery();

  const user = useSelector((state) => selectUserById(state, id));
  console.log(user);

  const [addUser, { isLoading }] = useAddUserMutation();

  const [updateUser, { isLoading: isLoadingUpdate }] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.username = id ? user?.username : "";
    defaultValues.password = id ? user?.password : "";
    defaultValues.first_name = id ? user?.first_name : "";
    defaultValues.last_name = id ? user?.last_name : "";
    defaultValues.email = id ? user?.email : "";
    defaultValues.id_role = id ? user?.role?.role_id : 1;
    defaultValues.profile_image = id ? user?.profile_image : "";
    reset({ ...defaultValues });
  }, [reset]);

  const submitForm = async (data) => {
    let formData = new FormData();
    formData.set("first_name", data.first_name);
    formData.set("last_name", data.last_name);
    formData.set("email", data.email);

    if (data.profile_image.length > 0) {
      formData.append("profile_image", data.profile_image[0]);
    }

    if (id) {
      await editUser(id, formData);
    } else {
      formData.append("username", data.username);
      formData.append("password", data.password);
      formData.append("id_role", data.id_role);

      try {
        await addUser(formData).unwrap();
        console.log("creado");
        navigate(routes.users);
      } catch (err) {
        console.log(`No se pudo crear el user`);
      }
    }
  };

  const editUser = async (id, data) => {
    try {
      await updateUser({ id, body: data }).unwrap();
      console.log("actualizado");
      navigate(routes.users);
    } catch (err) {
      console.log(`No se pudo actualizar el user`);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="space-y-4">
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className={`flex-1`}>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username <span className="text-rose-500">*</span>
            </label>
            <input
              id="username"
              className={`form-input w-full h-12 ${
                id && "hover:cursor-not-allowed"
              }`}
              type="text"
              {...register("username", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: "The format is not correct",
                },
              })}
              disabled={id ? true : false}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>
          {!id && (
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password <span className="text-rose-500">*</span>
              </label>
              <div>
                <input
                  id="password"
                  className="form-input w-full h-12"
                  type={eye ? "text" : "password"}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                      message: "The format is not correct",
                    },
                  })}
                />

                <section className="relative">
                  <button
                    type="button"
                    className="absolute inset-2 -top-10 left-auto flex items-center mr-2"
                  >
                    {eye ? (
                      <img
                        onClick={() => setEye(false)}
                        src={icons.closedEye}
                        alt="Ojo cerrado"
                      />
                    ) : (
                      <img
                        onClick={() => setEye(true)}
                        src={icons.openedEye}
                        alt="Ojo abierto"
                      />
                    )}
                  </button>
                </section>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
          )}
        </div>
        {/* 2nd row */}
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="first_name"
            >
              First name <span className="text-rose-500">*</span>
            </label>
            <input
              id="first_name"
              className="form-input w-full h-12"
              type="text"
              {...register("first_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: "The format is not correct",
                },
              })}
            />
            {errors.first_name && (
              <span className="text-red-500 text-sm">
                {errors.first_name.message}
              </span>
            )}
          </div>
          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="last_name"
            >
              Last name <span className="text-rose-500">*</span>
            </label>
            <input
              id="last_name"
              className="form-input w-full h-12"
              type="text"
              {...register("last_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: "The format is not correct",
                },
              })}
            />
            {errors.last_name && (
              <span className="text-red-500 text-sm">
                {errors.last_name.message}
              </span>
            )}
          </div>
        </div>
        {/* 3rd row */}
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              className="form-input w-full h-12"
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: "The format is not correct",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="id_role">
              ID role <span className="text-rose-500">*</span>
            </label>
            <select
              id="id_role"
              className={`form-select w-full h-12 ${
                id && "hover:cursor-not-allowed"
              }`}
              {...register("id_role", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: "The format is not correct",
                },
              })}
              disabled={id ? true : false}
            >
              {roles?.map((role, i) => (
                <option key={i} value={role.id}>{role.name_role}</option>

              ))}
            </select>
            {errors.id_role && (
              <span className="text-red-500 text-sm">
                {errors.id_role.message}
              </span>
            )}
          </div>
        </div>

        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-2">
            <label
              //className="block text-sm font-medium mb-1"
              className="text-sm font-medium mb-1 flex items-center cursor-pointer hover:text-primary"
              htmlFor="profile_image"
            >
              Profile image{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-upload"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#06184a"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 9 12 4 17 9" />
                <line x1="12" y1="4" x2="12" y2="16" />
              </svg>
            </label>
            <input
              id="profile_image"
              className="form-input w-[640pxs] h-12"
              type="file"
              accept="image/*"
              //accept="image/png, image/gif, image/jpeg"
              style={{ display: "none" }}
              {...register("profile_image")}
            />
          </div>
        </div>
        <div className="h-[3rem] flex justify-end">
          <Link to={routes.users}>
            <button
              type="button"
              className="btn bg-gray-500 border-slate-200 hover:border-slate-300 text-white mr-5 h-[100%]"
            >
              Cancel
            </button>
          </Link>

          <button className="btn bg-primary border-slate-200 hover:border-slate-300 text-white h-[100%]">
            {isLoading || isLoadingUpdate ? (
              <section className="justify-center items-center flex">
                <div className="loader"></div>
                <span className="ml-3 text-white font-semibold">Cargando</span>
              </section>
            ) : (
              <span>{id ? "Update" : "Create"}</span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormUser;
