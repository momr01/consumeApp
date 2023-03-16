import { PlantEquipmentsCard } from "../../../components/custom";
import NothingAssigned from "./NothingAssigned";

const items = [
  {
    id: 1,
    plant: {
      id: 9,
      name: "Plant 2",
      address: {
        id: 17,
        country: "Mexico",
        state: "Veracruz",
        city: "Orizaba",
        district: "Coatzacoalcos",
        street: "La soledad",
        number: "139",
        zip_code: "96390",
      },
    },
    equipment: {
      id: 1,
      brand: "Samsung",
      equipment_type: {
        id: 1,
        type_name: "Indoor",
      },
    },
  },
  {
    id: 2,
    plant: {
      id: 9,
      name: "Plant 2",
      address: {
        id: 17,
        country: "Mexico",
        state: "Veracruz",
        city: "Orizaba",
        district: "Coatzacoalcos",
        street: "La soledad",
        number: "139",
        zip_code: "96390",
      },
    },
    equipment: {
      id: 2,
      brand: "Samsung",
      equipment_type: {
        id: 2,
        type_name: "Outdoor",
      },
    },
  },
];

const Equipments = ({ setOpenAssignEquipmentsModal }) => {
  return (
    <div className="w-full p-3 rounded-sm text bg-white border border-slate-200">
      <div className="flex h-full">
        <div className="flex flex-col h-full w-full">
          <div className="grow mb-2">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-slate-800 mb-1">
                EQUIPMENTS
              </div>
              <button
                className="btn bg-primary hover:bg-indigo-600 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenAssignEquipmentsModal(true);
                }}
              >
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Assign Equipments</span>
              </button>
            </div>
            {items.length > 0 ? (
              <div className="flex justify-start">
                {items.map((item, i) => (
                  <PlantEquipmentsCard key={i} item={item} />
                ))}
              </div>
            ) : (
              <NothingAssigned />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
