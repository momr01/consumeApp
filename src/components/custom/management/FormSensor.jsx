import { t } from "i18next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import routes from "../../../helpers/routes";

const plants = [
  {
    id: 3,
    name: "Plant 1",
    address: {
      address_id: 11,
      address_country: "Mexico",
      address_state: "Veracruz",
      address_city: "Orizaba",
      address_district: "Coatzacoalcos",
      address_street: "La soledad",
      address_number: "19",
      address_zip_code: "96390",
    },
  },
  {
    id: 9,
    name: "Plant 2",
    address: {
      address_id: 17,
      address_country: "Mexico",
      address_state: "Veracruz",
      address_city: "Orizaba",
      address_district: "Coatzacoalcos",
      address_street: "La soledad",
      address_number: "20",
      address_zip_code: "96390",
    },
  },
];

const consume_types = [
  {
    id: 1,
    type_name: "Electricity",
  },
  {
    id: 2,
    type_name: "Oil",
  },
  {
    id: 3,
    type_name: "Water",
  },
  {
    id: 4,
    type_name: "Gas",
  },
];

const FormSensor = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // useGetPlantsQuery();

  // const plant = useSelector((state) => selectPlantById(state, id));
  // console.log(plant);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const [addPlant, { isLoading }] = useAddPlantMutation();
  // const [updatePlant, { isLoading: isLoadingEdit }] = useUpdatePlantMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);

  useEffect(() => {
    let defaultValues = {};
    defaultValues.name = id ? sensor?.name : "";
    defaultValues.consume_type = id ? sensor?.consume_type?.id : 1;
    defaultValues.plant = id ? sensor?.plant?.id : 3;
    reset({ ...defaultValues });
  }, [reset]);

  const submitForm = async (data) => {
    console.log(data);

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("consume_type", data.consume_type);
    formData.append("plant", data.plant);

    // if (id) {
    //   try {
    //     await updatePlant({ id, body: formData }).unwrap();
    //     console.log("actualizado");
    //     navigate(routes.plants);
    //   } catch (error) {
    //     console.log(`No se pudo actualizar la planta`);
    //   }
    // } else {
    //   try {
    //     await addPlant(formData).unwrap();
    //     console.log("creado");
    //     navigate(routes.plants);
    //   } catch (error) {
    //     console.log("no se pudo crear la planta");
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="space-y-4">
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              {t("form.name")} <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              className="form-input w-full h-12"
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: t("form.inputRequired"),
                },
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>
        {/* 3rd row */}
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="consume_type"
            >
              Consume Type <span className="text-rose-500">*</span>
            </label>
            <select
              id="consume_type"
              className="form-select w-full h-12"
              {...register("consume_type", {
                required: {
                  value: true,
                  message: t("form.inputRequired"),
                },
              })}
            >
              {consume_types?.map((con, i) => (
                <option key={i} value={con.id}>
                  {con.type_name}
                </option>
              ))}
            </select>
            {errors.consume_type && (
              <span className="text-red-500 text-sm">
                {errors.consume_type.message}
              </span>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="plant">
              Plant <span className="text-rose-500">*</span>
            </label>
            <select
              id="plant"
              className="form-select w-full h-12"
              {...register("plant", {
                required: {
                  value: true,
                  message: t("form.inputRequired"),
                },
              })}
            >
              {plants?.map((plant, i) => (
                <option key={i} value={plant.id}>
                  {plant.name}
                </option>
              ))}
            </select>
            {errors.plant && (
              <span className="text-red-500 text-sm">
                {errors.plant.message}
              </span>
            )}
          </div>
        </div>

        <div className="h-[3rem] flex justify-end">
          <Link to={routes.sensors}>
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
      </div>
    </form>
  );
};

export default FormSensor;
