import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.scss";
// import "./charts/ChartjsConfig";
import "./charts/custom/ChartjsConfig";

import {
  AddEquipment,
  AddPlant,
  AddSensor,
  AddShift,
  AddUser,
  Dashboard,
  Equipments,
  Login,
  Maintenance,
  ManagePlant,
  NotFound,
  Notifications,
  Plants,
  ProfilePanel,
  Reports,
  ResetPassword,
  Sensors,
  Shifts,
  UpdateEquipment,
  UpdatePlant,
  UpdateSensor,
  UpdateShift,
  UpdateUser,
  Users,
} from "./pages/custom";
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";
import routes from "./helpers/routes";
import { useDispatch, useSelector } from "react-redux";
import { selectLang } from "./features/auth/authSlice";
import i18n from "./i18n";

function App() {
  const dispatch = useDispatch()

  const lang = useSelector(selectLang);

  useEffect(() => {
    // dispatch(setLanguage(languages[selected].abbreviation));
    //dispatch(setLanguage(selected));
    i18n.changeLanguage(lang);
  }, [lang]);

  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Suspense fallback="wait">
        <Routes>
          <Route element={<PublicRoute />}>
            <Route exact path={routes.index} element={<Login />} />
            <Route exact path={routes.login} element={<Login />} />
            <Route exact path={routes.resetPwd} element={<ResetPassword />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route exact path={routes.dashboard} element={<Dashboard />} />
            <Route exact path={routes.maintenance} element={<Maintenance />} />
            <Route exact path={routes.reports} element={<Reports />} />
            <Route exact path={routes.users} element={<Users />} />
            <Route exact path={routes.addUser} element={<AddUser />} />
            <Route exact path={routes.updateUser()} element={<UpdateUser />} />
            <Route exact path={routes.plants} element={<Plants />} />
            <Route exact path={routes.addPlant} element={<AddPlant />} />
            <Route
              exact
              path={routes.updatePlant()}
              element={<UpdatePlant />}
            />
            <Route
              exact
              path={routes.managePlant()}
              element={<ManagePlant />}
            />
            <Route exact path={routes.shifts} element={<Shifts />} />
            <Route exact path={routes.addShift} element={<AddShift />} />
            <Route
              exact
              path={routes.updateShift()}
              element={<UpdateShift />}
            />
            <Route exact path={routes.equipments} element={<Equipments />} />
            <Route
              exact
              path={routes.addEquipment}
              element={<AddEquipment />}
            />
            <Route
              exact
              path={routes.updateEquipment()}
              element={<UpdateEquipment />}
            />
            <Route exact path={routes.sensors} element={<Sensors />} />
            <Route exact path={routes.addSensor} element={<AddSensor />} />
            <Route
              exact
              path={routes.updateSensor()}
              element={<UpdateSensor />}
            />
            <Route exact path={routes.profile} element={<ProfilePanel />} />
            {/* <Route
              exact
              path={routes.notifSettings}
              element={<ProfileNotifications />}
            /> */}
            <Route
              exact
              path={routes.notifications}
              element={<Notifications />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
