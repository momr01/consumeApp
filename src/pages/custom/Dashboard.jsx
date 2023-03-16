//import { t } from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Kpis, Layout, DateSelectDashboard } from "../../components/custom";
// import DateSelect from "../../components/DateSelect";
import {
  // getPlanningList,
  selectCurrentToken, selectLang,
} from "../../features/auth/authSlice";
import {
  selectAllUsers,
  selectUserById,
  useGetLanguagesQuery,
  useGetRolesQuery,
  // selectUsersResult,
  useGetUsersQuery,
} from "../../features/users/usersApiSlice";
//import i18n from "../../i18n";
import { DashboardCard08 } from "../../partials/custom";
// import DashboardCard08 from "../../partials/dashboard/DashboardCard08";

const Dashboard = () => {
  // useEffect(() => {
  //   const lng = navigator.language;
  //   i18n.changeLanguage(lng);
  // }, []);

  // const lng = navigator.language;

  //   useEffect(() => {
  //   const lng = useSelector(selectLang);
  //   i18n.changeLanguage(lng);
  // }, []);

  const { t } = useTranslation();

  const [companySetting, setCompanySetting] = useState(true);

  // const {data} = useGetRolesQuery()

  // console.log(data)

  // const token = useSelector(selectCurrentToken);
  // console.log(token);

  // const { data, isLoading, isSuccess, isError, error, refetch } =
  //   useGetUsersQuery();

  // console.log(data);

  // console.log(useSelector(selectAllUsers));

  // const user = useSelector((state) => selectUserById(state, Number(4)));

  // console.log(user);

  // dispatch(getPlanningList());

  // const { data } = useGetLanguagesQuery();
  // console.log(data);

  const dateNow = () => {
    const now = new Date().toISOString().slice(0, 10);
    return now;
  };

  return (
    <Layout section={t("sidebar.dashboard")} obs={t("dashboard.overview")}>
      <section className="mb-5 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row">
          <div className="md:mr-5 mb-2 md:mb-0">
            <label
              className="block text-base font-medium mb-1 text-black"
              htmlFor="card-country"
            >
              {t("dashboard.plant")}
            </label>
            <select
              id="card-country"
              className="form-select h-10 bg-slate-300 text-black w-full md:w-auto"
            >
              <option>TicTac</option>
              <option>Chocolate</option>
              <option>Plastic</option>
              <option>F&U</option>
            </select>
          </div>
          <div className="md:mr-5 mb-2 md:mb-0">
            <p className="mb-1 font-medium text-base text-black">
              {t("dashboard.period")}
            </p>
            {/* <DateSelectDashboard /> */}
            <div>
              <input type="date" value={dateNow()} />
              <input type="date" value={dateNow()} />
            </div>
          </div>
          <div className="relative mb-2 md:mb-0">
            <button className="bg-primary md:absolute md:bottom-0 h-10 text-white px-5 text-base flex items-center w-full md:w-auto justify-center">
              <span className="mr-1">{t("dashboard.update")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-rotate-clockwise"
                width="14"
                height="14"
                viewBox="0 0 20 20"
                strokeWidth="2"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative">
          <select
            id="card-country"
            className="form-select md:absolute md:right-0 md:bottom-0 h-10 bg-slate-300 text-black w-full md:w-auto"
          >
            <option>{t("dashboard.export")}</option>
            <option>CSV</option>
            <option>Excel</option>
          </select>
        </div>
      </section>
      {/* <button onClick={refetch}>refetch</button> */}
      <Kpis />

      <div className="grid grid-cols-12 gap-6">
        <DashboardCard08 />
        <div className="flex flex-col col-span-full sm:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 p-5">
          <h2 className="text-black text-lg font-bold mb-2">
            {" "}
            {t("dashboard.filtersTitle")}
          </h2>
          <section>
            <h3 className="mb-2"> {t("dashboard.sensors")}</h3>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting
                  ? `${t("dashboard.sensor")} M11`
                  : `${t("dashboard.sensor")} M11`}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting
                  ? `${t("dashboard.sensor")} M11`
                  : `${t("dashboard.sensor")} M11`}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {/* {companySetting ? "On" : "Off"} */}
                {companySetting
                  ? `${t("dashboard.sensor")} M11`
                  : `${t("dashboard.sensor")} M11`}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting
                  ? `${t("dashboard.sensor")} M11`
                  : `${t("dashboard.sensor")} M11`}
              </div>
            </div>
          </section>
          <section>
            <h3 className="mb-2">{t("sidebar.shifts")}</h3>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting ? "06:00 / 14:00" : "06:00 / 14:00"}
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting ? "14:00 / 20:00" : "14:00 / 20:00"}
              </div>
            </div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400" htmlFor="company-toggle">
                  <span
                    className="bg-white shadow-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Company Culture</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 italic ml-2">
                {companySetting ? "20:00 / 06:00" : "20:00 / 06:00"}
              </div>
            </div>
          </section>
          <button className="bg-primary mt-3 h-10 text-white font-medium rounded-md">
            {t("dashboard.apply")}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
