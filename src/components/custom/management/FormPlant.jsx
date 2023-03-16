import { Link, useNavigate, useParams } from "react-router-dom";
import routes from "../../../helpers/routes";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  selectPlantById,
  useAddPlantMutation,
  useGetPlantsQuery,
  useUpdatePlantMutation,
} from "../../../features/management/plants/plantsApiSlice";
import { useSelector } from "react-redux";
import { t } from "i18next";

const FormPlant = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useGetPlantsQuery();

  const plant = useSelector((state) => selectPlantById(state, id));
  console.log(plant);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addPlant, { isLoading }] = useAddPlantMutation();
  const [updatePlant, { isLoading: isLoadingEdit }] = useUpdatePlantMutation();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.name = id ? plant?.name : "";
    defaultValues.country = id ? plant?.address.address_country : "";
    defaultValues.state = id ? plant?.address.address_state : "";
    defaultValues.city = id ? plant?.address.address_city : "";
    defaultValues.district = id ? plant?.address.address_district : "";
    defaultValues.street = id ? plant?.address.address_street : "";
    defaultValues.number = id ? plant?.address.address_number : "";
    defaultValues.zip_code = id ? plant?.address.address_zip_code : "";
    reset({ ...defaultValues });
  }, [reset]);

  const submitForm = async (data) => {
    console.log(data);

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("country", data.country);
    formData.append("state", data.state);
    formData.append("city", data.city);
    formData.append("district", data.district);
    formData.append("street", data.street);
    formData.append("number", data.number);
    formData.append("zip_code", data.zip_code);

    if (id) {
      try {
        await updatePlant({ id, body: formData }).unwrap();
        console.log("actualizado");
        navigate(routes.plants);
      } catch (error) {
        console.log(`No se pudo actualizar la planta`);
      }
    } else {
      try {
        await addPlant(formData).unwrap();
        console.log("creado");
        navigate(routes.plants);
      } catch (error) {
        console.log("no se pudo crear la planta");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="space-y-4">
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              {t("plants.table.name")} <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              className="form-input w-full h-12"
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: t("plants.form.inputRequired"),
                },
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="country">
              {t("plants.table.country")}{" "}
              <span className="text-rose-500">*</span>
            </label>
            <input
              id="country"
              className="form-input w-full h-12"
              type="text"
              {...register("country", {
                required: {
                  value: true,
                  message: t("plants.form.inputRequired"),
                },
              })}
            />
            {errors.country && (
              <span className="text-red-500 text-sm">
                {errors.country.message}
              </span>
            )}
          </div>
        </div>
        {/* 2nd row */}
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="state">
              {t("plants.table.state")} <span className="text-rose-500">*</span>
            </label>
            <input
              id="state"
              className="form-input w-full h-12"
              type="text"
              {...register("state", {
                required: {
                  value: true,
                  message: t("plants.form.inputRequired"),
                },
              })}
            />
            {errors.state && (
              <span className="text-red-500 text-sm">
                {errors.state.message}
              </span>
            )}
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="city">
              {t("plants.table.city")} <span className="text-rose-500">*</span>
            </label>
            <input
              id="city"
              className="form-input w-full h-12"
              type="text"
              {...register("city", {
                required: {
                  value: true,
                  message: t("plants.form.inputRequired"),
                },
              })}
            />
            {errors.city && (
              <span className="text-red-500 text-sm">
                {errors.city.message}
              </span>
            )}
          </div>
        </div>
        {/* 3rd row */}
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="district"
            >
              {t("plants.table.district")}{" "}
              <span className="text-rose-500">*</span>
            </label>
            <input
              id="district"
              className="form-input w-full h-12"
              type="text"
              {...register("district", {
                required: {
                  value: true,
                  message: t("plants.form.inputRequired"),
                },
              })}
            />
            {errors.district && (
              <span className="text-red-500 text-sm">
                {errors.district.message}
              </span>
            )}
          </div>
          {/* <div className="flex-1">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="card-country"
          >
            ID role <span className="text-rose-500">*</span>
          </label>
          <select id="card-country" className="form-select w-full h-12">
            <option>Administrador</option>
            <option>Empleado de mantenimiento</option>
            <option>Líder de mantenimiento</option>
          </select>
        </div> */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="street">
              {t("plants.table.street")}{" "}
              <span className="text-rose-500">*</span>
            </label>
            <input
              id="street"
              className="form-input w-full h-12"
              type="text"
              {...register("street", {
                required: {
                  value: true,
                  message: t("plants.form.inputRequired"),
                },
              })}
            />
            {errors.street && (
              <span className="text-red-500 text-sm">
                {errors.street.message}
              </span>
            )}
          </div>
        </div>
        {/* 4th row */}
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="number">
              {t("plants.table.number")}{" "}
              <span className="text-rose-500">*</span>
            </label>
            <input
              id="number"
              className="form-input w-full h-12"
              type="text"
              {...register("number", {
                required: {
                  value: true,
                  message: t("plants.form.inputRequired"),
                },
              })}
            />
            {errors.number && (
              <span className="text-red-500 text-sm">
                {errors.number.message}
              </span>
            )}
          </div>
          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="zip_code"
            >
              {t("plants.table.zipCode")}{" "}
              <span className="text-rose-500">*</span>
            </label>
            <input
              id="zip_code"
              className="form-input w-full h-12"
              type="text"
              {...register("zip_code", {
                required: {
                  value: true,
                  message: t("plants.form.inputRequired"),
                },
              })}
            />
            {errors.zip_code && (
              <span className="text-red-500 text-sm">
                {errors.zip_code.message}
              </span>
            )}
          </div>
        </div>

        <div className="h-[3rem] flex justify-end">
          <Link to={routes.plants}>
            <button
              type="button"
              className="btn bg-gray-500 border-slate-200 hover:border-slate-300 text-white mr-5 h-[100%]"
            >
              {t("plants.form.cancel")}
            </button>
          </Link>

          <button className="btn bg-primary border-slate-200 hover:border-slate-300 text-white h-[100%]">
            {isLoading || isLoadingEdit ? (
              <section className="justify-center items-center flex">
                <div className="loader"></div>
                <span className="ml-3 text-white font-semibold">
                  {" "}
                  {t("plants.form.loading")}
                </span>
              </section>
            ) : (
              <span>
                {id ? t("plants.form.update") : t("plants.form.create")}
              </span>
            )}
          </button>
        </div>

        {/* <div className="h-[3rem] flex justify-end">
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
        </div> */}
      </div>
    </form>
  );
};

export default FormPlant;
