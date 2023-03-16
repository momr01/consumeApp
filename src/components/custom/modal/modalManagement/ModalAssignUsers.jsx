import { useState } from "react";
import ModalBasic from "../ModalBasic";

const ModalAssignUsers = ({ openModal, setOpenModal }) => {
  const [selected, setSelected] = useState(0);

  const items = [
    {
      id: 1,
      name: "Vespertino",
      schedule: "15:00 - 20: 00",
    },
    {
      id: 2,
      name: "Mañana",
      schedule: "15:00 - 20: 00",
    },
    {
      id: 3,
      name: "Noche",
      schedule: "15:00 - 20: 00",
    },
  ];

  return (
    <ModalBasic
      id="feedback-modal"
      modalOpen={openModal}
      setModalOpen={setOpenModal}
      title="Users to Plant Assignment"
    >
      <div className="px-5 pt-4 pb-1">
        <div className="text-sm">
          <div className="mb-4">Stablish an user to plant assignment</div>

          <ul className="space-y-2 mb-4">
            {items.map((item, i) => (
              <li key={i}>
                <button
                  className={`w-full h-full text-left py-3 px-4 rounded bg-white ${
                    i === selected && "border-2 border-indigo-400"
                  } shadow-sm duration-150 ease-in-out`}
                  onClick={() => setSelected(i)}
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-4 border-primary rounded-full mr-3"></div>
                    <div className="grow">
                      <div className="flex flex-wrap items-center justify-between mb-0.5">
                        <span className="font-medium text-slate-800">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-sm">15:00 - 20:00</div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="flex flex-wrap justify-end space-x-2">
          <button
            className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
            onClick={(e) => {
              e.stopPropagation();
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
          <button className="btn-sm bg-primary hover:bg-indigo-600 text-white">
            Assign User
          </button>
        </div>
      </div>
    </ModalBasic>
  );
};

export default ModalAssignUsers;
