import { PlantUsersCard } from "../../../components/custom";
import NothingAssigned from "./NothingAssigned";

const items = [
  {
    id: 1,
    name: "admin",
    email: "admin@admin.com",
    role: "Administrador",
  },
];

const Users = ({ setOpenAssignUsersModal }) => {
  return (
    <div className="w-full p-3 rounded-sm text bg-white border border-slate-200">
      <div className="flex h-full">
        <div className="flex flex-col h-full w-full">
          <div className="grow mb-2">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-slate-800 mb-1">USERS</div>
              <button
                className="btn bg-primary hover:bg-indigo-600 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenAssignUsersModal(true);
                }}
              >
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Assign Users</span>
              </button>
            </div>
            {items.length > 0 ? (
              <div className="flex justify-start">
                {items.map((item, i) => (
                  <PlantUsersCard item={item} />
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

export default Users;
