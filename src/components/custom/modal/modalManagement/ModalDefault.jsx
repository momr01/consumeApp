import ModalAssignConsumeType from "./ModalAssignConsumeType";
import ModalAssignEquipments from "./ModalAssignEquipments";
import ModalAssignShift from "./ModalAssignShift";
import ModalAssignUsers from "./ModalAssignUsers";

const ModalDefault = (props) => {
  return (
    <>
      <ModalAssignShift
        openModal={props.openAssignShiftModal}
        setOpenModal={props.setOpenAssignShiftModal}
      />
      <ModalAssignConsumeType
        openModal={props.openAssignConsumeTypeModal}
        setOpenModal={props.setOpenAssignConsumeTypeModal}
      />
      <ModalAssignEquipments
        openModal={props.openAssignEquipmentsModal}
        setOpenModal={props.setOpenAssignEquipmentsModal}
      />
      <ModalAssignUsers
        openModal={props.openAssignUsersModal}
        setOpenModal={props.setOpenAssignUsersModal}
      />
    </>
  );
};

export default ModalDefault;
