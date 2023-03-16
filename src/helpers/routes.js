const routes = {
  index: "/",
  login: "/login",
  dashboard: "/dashboard",
  maintenance: "/maintenance",
  resetPwd: "/reset-password",
  reports: "/reports",
  users: "/management/users",
  addUser: "/management/users/add-user",
  updateUser: (id) =>
    id
      ? `/management/users/update-user/${id}`
      : "/management/users/update-user/:id",
  plants: "/management/plants",
  addPlant: "/management/plants/add-plant",
  updatePlant: (id) =>
    id
      ? `/management/plants/update-plant/${id}`
      : "/management/plants/update-plant/:id",
  managePlant: (id) =>
    id
      ? `/management/plants/manage-plant/${id}`
      : "/management/plants/manage-plant/:id",
  shifts: "/management/shifts",
  addShift: "/management/shifts/add-shift",
  updateShift: (id) =>
    id
      ? `/management/shifts/update-shift/${id}`
      : "/management/shifts/update-shift/:id",
  equipments: "/management/equipments",
  addEquipment: "/management/equipments/add-equipment",
  updateEquipment: (id) =>
    id
      ? `/management/equipments/update-equipment/${id}`
      : "/management/equipments/update-equipment/:id",
  sensors: "/management/sensors",
  addSensor: "/management/sensors/add-sensor",
  updateSensor: (id) =>
    id
      ? `/management/sensors/update-sensor/${id}`
      : "/management/sensors/update-sensor/:id",
  profile: "/profile",
  notifications: "/notifications",
};

export default routes;
