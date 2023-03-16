import { PlantConsumeTypesCard } from "../../../components/custom";
import NothingAssigned from "./NothingAssigned";

const items = [
  {
    id: 2,
    plant: {
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
    consume_type: {
      id: 3,
      type_name: "Water",
    },
  },
  {
    id: 4,
    plant: {
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
    consume_type: {
      id: 1,
      type_name: "Electricity",
    },
  },
];

const ConsumeTypes = ({ setOpenAssignConsumeTypeModal }) => {
  return (
    <div className="w-full p-3 rounded-sm text bg-white border border-slate-200">
      <div className="flex h-full">
        <div className="flex flex-col h-full w-full">
          <div className="grow mb-2">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-slate-800 mb-1">
                CONSUME TYPES
              </div>
              <button
                className="btn bg-primary hover:bg-indigo-600 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenAssignConsumeTypeModal(true);
                }}
              >
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">
                  Assign Consume Type
                </span>
              </button>
            </div>
            {items.length > 0 ? (
              <div className="flex justify-start">
                {items.map((item, i) => (
                  <PlantConsumeTypesCard key={i} item={item} />
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

export default ConsumeTypes;
