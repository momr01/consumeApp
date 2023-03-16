import { useState } from "react";
import { useParams } from "react-router-dom";
import ModalBasic from "../ModalBasic";

const items = [
  {
    id: 15,
    name: "Matutino",
    schedule: "09:00 - 15:00",
  },
  {
    id: 16,
    name: "Vespertino",
    schedule: "15:30 - 21:30",
  },
];

const ModalAssignShift = ({ openModal, setOpenModal }) => {
  const { id } = useParams();
  const [selected, setSelected] = useState(items[0].id);

  const handleAssignment = () => {
    console.log("asignar ", selected, id);
  };

  return (
    <ModalBasic
      id="feedback-modal"
      modalOpen={openModal}
      setModalOpen={setOpenModal}
      title="  Shift to Plant Assignment"
    >
      <div className="px-5 pt-4 pb-1">
        <div className="text-sm">
          <div className="mb-4">Stablish a shift to plant assignment</div>

          <ul className="space-y-2 mb-4">
            {items.map((item, i) => (
              <li key={i}>
                <button
                  className={`w-full h-full text-left py-3 px-4 rounded bg-white ${
                    item.id === selected && "border-2 border-indigo-400"
                  } shadow-sm duration-150 ease-in-out`}
                  onClick={() => setSelected(item.id)}
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-4 border-primary rounded-full mr-3"></div>
                    <div className="grow">
                      <div className="flex flex-wrap items-center justify-between mb-0.5">
                        <span className="font-medium text-slate-800">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-sm">{item.schedule}</div>
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
          <button
            className="btn-sm bg-primary hover:bg-indigo-600 text-white"
            onClick={handleAssignment}
          >
            Assign Shift
          </button>
        </div>
      </div>
    </ModalBasic>
  );
};

export default ModalAssignShift;
