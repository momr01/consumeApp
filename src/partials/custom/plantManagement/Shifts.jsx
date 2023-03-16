import { PlantShiftsCard } from "../../../components/custom";
import NothingAssigned from "./NothingAssigned";

// const items = [
//   {
//     id: 12,
//     category: "3",
//     members: [
//       {
//         name: "User 07",
//         image: "",
//         link: "#0",
//       },
//       {
//         name: "User 08",
//         image: "",
//         link: "#0",
//       },
//       {
//         name: "User 09",
//         image: "",
//         link: "#0",
//       },
//     ],
//     title: "Schedule 'Vespertino'",
//     link: "#0",
//     content: "15:00 - 20:00",
//     dates: {
//       from: "Jan 20",
//       to: "Jan 27",
//     },
//     type: "At Risk",
//   },
//   {
//     id: 13,
//     category: "3",
//     members: [
//       {
//         name: "User 07",
//         image: "",
//         link: "#0",
//       },
//       {
//         name: "User 08",
//         image: "",
//         link: "#0",
//       },
//       {
//         name: "User 09",
//         image: "",
//         link: "#0",
//       },
//     ],
//     title: "Schedule 'Vespertino'",
//     link: "#0",
//     content: "15:00 - 20:00",
//     dates: {
//       from: "Jan 20",
//       to: "Jan 27",
//     },
//     type: "At Risk",
//   },
// ];

const items = [
  {
    id: 16,
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
    shift: {
      id: 16,
      name: "Vespertino",
      schedule: "15:30 - 21:30",
    },
  },
  {
    id: 25,
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
    shift: {
      id: 15,
      name: "Matutino",
      schedule: "09:00 - 15:00",
    },
  },
];

const Shifts = ({ setOpenAssignShiftModal }) => {
  return (
    <div className="w-full p-3 rounded-sm text bg-white border border-slate-200">
      <div className="flex h-full">
        <div className="flex flex-col h-full w-full">
          <div className="grow mb-2">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-slate-800 mb-1">SHIFTS</div>
              <button
                className="btn bg-primary hover:bg-indigo-600 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenAssignShiftModal(true);
                }}
              >
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Assign Shift</span>
              </button>
            </div>

            {items.length > 0 ? (
              <div className="flex justify-start">
                {items.map((item) => (
                  <div className="text-sm w-[30%] mr-5">
                    <PlantShiftsCard
                      key={item.id}
                      id={item.shift.id}
                      name={item.shift.name}
                      schedule={item.shift.schedule}
                    />
                  </div>
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

export default Shifts;
