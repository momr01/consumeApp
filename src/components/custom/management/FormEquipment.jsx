import { Link, useNavigate, useParams } from "react-router-dom";
import routes from "../../../helpers/routes";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  selectShiftById,
  useAddShiftMutation,
  useGetShiftsQuery,
  useUpdateShiftMutation,
} from "../../../features/management/shifts/shiftsApiSlice";
import { useSelector } from "react-redux";

const equipment_types_data = [
  {
    id: 1,
    type_name: "Indoor",
  },
  {
    id: 2,
    type_name: "Outdoor",
  },
];

const equipment = {
  id: 1,
  brand: "Samsung",
  equipment_type: {
    id: 1,
    type_name: "Indoor",
  },
};

const FormEquipment = () => {
  //
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);

  //

  const navigate = useNavigate();
  const { id } = useParams();

  // useGetShiftsQuery();

  // const shift = useSelector((state) => selectShiftById(state, id));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const [addShift, { isLoading }] = useAddShiftMutation();
  // const [updateShift, { isLoading: isLoadingEdit }] = useUpdateShiftMutation();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.brand = id ? equipment?.brand : "";
    defaultValues.equipment_type = id ? equipment?.equipment_type?.id : 1;
    reset({ ...defaultValues });
  }, [reset]);

  const submitForm = async (data) => {
    console.log(data);

    let formData = new FormData();
    formData.append("brand", data.brand);
    formData.append("equipment_type", data.equipment_type);

    // if (id) {
    //   try {
    //     await updateShift({ id, body: formData }).unwrap();
    //     console.log("actualizado");
    //     navigate(routes.shifts);
    //   } catch (error) {
    //     console.log("error al actualizar");
    //   }
    // } else {
    //   try {
    //     await addShift(formData).unwrap();
    //     console.log("creado");
    //     navigate(routes.shifts);
    //   } catch (error) {
    //     console.log("No se pudo cargar el horario");
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="space-y-4">
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <div className={`flex-1`}>
            <label className="block text-sm font-medium mb-1" htmlFor="brand">
              Brand <span className="text-rose-500">*</span>
            </label>
            <input
              id="brand"
              className={`form-input w-full h-12`}
              type="text"
              {...register("brand", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.brand && (
              <span className="text-red-500 text-sm">
                {errors.brand.message}
              </span>
            )}
          </div>

          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="equipment_type"
            >
              Equipment type <span className="text-rose-500">*</span>
            </label>
            <select
              id="equipment_type"
              className={`form-select w-full h-12 `}
              {...register("equipment_type", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            >
              {equipment_types_data?.map((type, i) => (
                <option key={i} value={type.id}>
                  {type.type_name}
                </option>
              ))}
            </select>
            {errors.equipment_type && (
              <span className="text-red-500 text-sm">
                {errors.equipment_type.message}
              </span>
            )}
          </div>
        </div>

        {/* 3rd row */}

        <div className="h-[3rem] flex justify-end">
          <Link to={routes.equipments}>
            <button
              type="button"
              className="btn bg-gray-500 border-slate-200 hover:border-slate-300 text-white mr-5 h-[100%]"
            >
              Cancel
            </button>
          </Link>

          <button className="btn bg-primary border-slate-200 hover:border-slate-300 text-white h-[100%]">
            {isLoading || isLoadingEdit ? (
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

export default FormEquipment;
