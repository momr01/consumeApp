import { useParams } from "react-router-dom";

const PlantConsEqCard = ({ item }) => {
  const { id } = useParams();
  const handleDelete = () => {
    console.log("assign ", id, item.equipment.id);
  };
  return (
    <div className="border w-[30%] flex items-center p-5 justify-between mr-5">
      <div className="col-span-6 order-2 sm:order-none sm:col-span-3 text-left sm:text-center lg:sidebar-expanded:hidden xl:sidebar-expanded:block">
        <div className="text-base font-medium text-slate-800 truncate mb-3">
          {item.equipment.brand}
        </div>
        <div className="text-sm font-medium text-slate-400 truncate flex">
          {item.equipment.equipment_type.type_name}
        </div>
      </div>

      <button
        className="col-span-6 order-2 sm:order-none sm:col-span-2 text-right lg:sidebar-expanded:hidden xl:sidebar-expanded:block"
        onClick={handleDelete}
      >
        <div className="text-xs inline-flex font-medium bg-red-100 text-red-600 rounded-full text-center px-2.5 py-1">
          Delete
        </div>
      </button>
    </div>
  );
};

export default PlantConsEqCard;
