const url = {
  backend: {
    main: "http://sfws01.syncronik.com:8085/",
    userRegister: "/auth/register/",
    login: "/auth/login/",
    logout: "/auth/logout/",
    updateProfile: (id) => `/auth/update-profile/${id}/`,
    getAllUsers: "/auth/get-users/",
    disableUser: (id) => `/auth/disable-user/${id}/`,
    enableUser: (id) => `/auth/enable-user/${id}/`,
    changePwd: (id) => `/auth/change-password/${id}/`,
    getAllNotifications: "/auth/get-notifications-auth-user/",
    getCountNotifications: "/auth/count-recent-notifications-auth-user/",
    getRecentNotifications: "/auth/get-recent-notifications-auth-user/",
    languages: "/auth/get-available-languages/",
    selectLanguage: "/auth/select-language/",
    getRoles: "/auth/get-roles/",
    getPlants: "/plants/get-plants/",
    plantRegister: "/plants/register/",
    updatePlant: (id) => `/plants/update/${id}/`,
    deletePlant: (id) => `/plants/delete/${id}/`,
    getShifts: "/plants/shift/get-shifts/",
    shiftRegister: "/plants/shift/register/",
    updateShift: (id) => `/plants/shift/update/${id}/`,
    deleteShift: (id) => `/plants/shift/delete/${id}/`,
    getEquipments: "/plants/equipment/get-equipments/",
    equipmentRegister: "/plants/equipment/register/",
    updateEquipment: (id) => `/plants/equipment/update/${id}/`,
    deleteEquipment: (id) => `/plants/equipment/delete/${id}/`,
    getEqTypes: "/plants/equipment/get-equipment-types/",
    shiftAssignRegister: (idPlant, id) =>
      `/plants/${idPlant}/assignment/shift/${id}/`,
    getShiftAssign: (id) => `/plants/${id}/get-shifts-by-plant/`,
    deleteShiftAssign: (idPlant, id) =>
      `/plants/${idPlant}/delete-assignment/shift/${id}/`,
  },
};

export default url;
