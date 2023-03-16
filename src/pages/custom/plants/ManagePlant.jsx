import { useState } from "react";
import {
  Layout,
  ModalAssignShift,
  ModalBasic,
  ModalDefault,
} from "../../../components/custom";
import {
  PlantConsumeTypes,
  PlantEquipments,
  PlantShifts,
  PlantUsers,
} from "../../../partials/custom";

const ManagePlant = () => {
  const [openAssignShiftModal, setOpenAssignShiftModal] = useState(false);
  const [openAssignConsumeTypeModal, setOpenAssignConsumeTypeModal] =
    useState(false);
  const [openAssignEquipmentsModal, setOpenAssignEquipmentsModal] =
    useState(false);
  const [openAssignUsersModal, setOpenAssignUsersModal] = useState(false);

  return (
    <Layout section="Management" obs="Manage Plant">
      <div>
        <div className="mb-5">
          <h2 className="text-xl text-slate-800 font-bold">Plants Module</h2>
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-1 gap-6 mb-6">
          {/* Item */}

          <PlantShifts setOpenAssignShiftModal={setOpenAssignShiftModal} />

          <PlantConsumeTypes
            setOpenAssignConsumeTypeModal={setOpenAssignConsumeTypeModal}
          />

          <PlantEquipments
            setOpenAssignEquipmentsModal={setOpenAssignEquipmentsModal}
          />

          <PlantUsers setOpenAssignUsersModal={setOpenAssignUsersModal} />
        </div>
      </div>
      <ModalDefault
        openAssignShiftModal={openAssignShiftModal}
        setOpenAssignShiftModal={setOpenAssignShiftModal}
        openAssignConsumeTypeModal={openAssignConsumeTypeModal}
        setOpenAssignConsumeTypeModal={setOpenAssignConsumeTypeModal}
        openAssignEquipmentsModal={openAssignEquipmentsModal}
        setOpenAssignEquipmentsModal={setOpenAssignEquipmentsModal}
        openAssignUsersModal={openAssignUsersModal}
        setOpenAssignUsersModal={setOpenAssignUsersModal}
      />
    </Layout>
  );
};

export default ManagePlant;


