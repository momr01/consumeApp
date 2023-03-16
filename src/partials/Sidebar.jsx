import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import FactoryIcon from "@mui/icons-material/Factory";
import SensorsIcon from "@mui/icons-material/Sensors";
import ConstructionIcon from "@mui/icons-material/Construction";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
import images from "../images/custom";
import routes from "../helpers/routes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentRole } from "../features/auth/authSlice";
import { Tooltip } from "@mui/material";
//import { t } from "i18next";
import { useTranslation } from "react-i18next";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { pathname } = location;

  const role = useSelector(selectCurrentRole);

  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  console.log(pathname.includes("dashboard"));

  const sidebarLinks = [
    {
      id: 1,
      title: t("sidebar.main").toUpperCase(),
      show: true,
      links: [
        {
          id: 1,
          name: t("sidebar.dashboard"),
          includes: "dashboard",
          path: routes.dashboard,
          icon: () => <DashboardIcon className="icon" />,
        },
        {
          id: 2,
          name: t("sidebar.maintenance"),
          includes: "maintenance",
          path: routes.maintenance,
          icon: () => <EngineeringIcon className="icon" />,
        },
        {
          id: 3,
          name: t("sidebar.reports"),
          includes: "reports",
          path: routes.reports,
          icon: () => <TextSnippetIcon className="icon" />,
        },
      ],
    },
    {
      id: 2,
      title: t("sidebar.monitoring").toUpperCase(),
      show: true,
      links: [
        {
          id: 1,
          name: "TicTac",
          includes: "tictac",
          path: "/nth",
          icon: () => <FactoryIcon className="icon" />,
        },
        {
          id: 2,
          name: "Chocolate",
          includes: "chocolate",
          path: "/nth",
          icon: () => <FactoryIcon className="icon" />,
        },
        {
          id: 3,
          name: "Plastic",
          includes: "plastic",
          path: "/nth",
          icon: () => <FactoryIcon className="icon" />,
        },
        {
          id: 4,
          name: "F&U",
          includes: "f&u",
          path: "/nth",
          icon: () => <FactoryIcon className="icon" />,
        },
      ],
    },
    {
      id: 3,
      title: t("sidebar.security").toUpperCase(),
      show: true,
      links: [
        {
          id: 1,
          name: t("sidebar.forgotPwd"),
          includes: "forgot-password",
          path: "/nth",
          icon: () => <VpnKeyIcon className="icon" />,
        },
      ],
    },
    {
      id: 4,
      title: t("sidebar.management").toUpperCase(),
      show: role === "Administrador",
      links: [
        {
          id: 1,
          name: t("sidebar.users"),
          includes: "users",
          path: routes.users,
          icon: () => <PersonOutlineIcon className="icon" />,
        },
        {
          id: 2,
          name: t("sidebar.plants"),
          includes: "plants",
          path: routes.plants,
          icon: () => <FactoryIcon className="icon" />,
        },
        {
          id: 3,
          name: t("sidebar.shifts"),
          includes: "shifts",
          path: routes.shifts,
          icon: () => <CalendarMonthIcon className="icon" />,
        },
        {
          id: 4,
          name: t("sidebar.equipments"),
          includes: "equipments",
          path: routes.equipments,
          icon: () => <ConstructionIcon className="icon" />,
        },
        {
          id: 5,
          name: t("sidebar.sensors"),
          includes: "sensors",
          path: routes.sensors,
          icon: () => <SensorsIcon className="icon" />,
        },
      ],
    },
    {
      id: 5,
      title: t("sidebar.user").toUpperCase(),
      show: true,
      links: [
        {
          id: 1,
          name: t("sidebar.profile"),
          includes: "profile",
          path: routes.profile,
          icon: () => <AccountCircleOutlinedIcon className="icon" />,
        },
        {
          id: 2,
          name: t("navbar.logout"),
          includes: "logout",
          path: "/",
          icon: () => <ExitToAppIcon className="icon" />,
        },
      ],
    },
  ];

  //const { dispatch } = useContext(DarkModeContext);
  return (
    <div
      className={`sidebar ${
        openSidebar
          ? "w-[17%] transition-all duration-500"
          : "w-[6%] transition-all duration-500"
      }`}
    >
      <div className="top">
        <Link to={routes.dashboard} style={{ textDecoration: "none" }}>
          <div>
            <img
              src={images.EMSLogoIcon}
              alt="logo"
              className={`${openSidebar ? "p-12" : "w-16"}`}
            />
          </div>
          {/* <span className="logo">lamadmin</span> */}
        </Link>
      </div>
      <hr />
      <div className={`center ${openSidebar ? "pl-[10px]" : "pl-0"}`}>
        <ul>
          {sidebarLinks.map(
            (link, i) =>
              link.show && (
                <>
                  {openSidebar && <p className="title">{link.title}</p>}

                  {link.links.map((each, i) => (
                    <Tooltip title={each.name} placement="right" arrow>
                      <Link to={each.path}>
                        {" "}
                        <li
                          className={`${
                            pathname.includes(each.name.toLowerCase()) &&
                            "liActive"
                          }`}
                        >
                          <div
                            className={`${
                              !openSidebar && "flex mx-auto items-center pb-1"
                            }`}
                          >
                            {each.icon()}
                          </div>

                          {openSidebar && (
                            <span
                              className={`${
                                pathname.includes(each.name.toLowerCase()) &&
                                "spanActive"
                              }`}
                            >
                              {each.name}
                            </span>
                          )}
                        </li>
                      </Link>
                    </Tooltip>
                  ))}
                </>
              )
          )}
          {/* {openSidebar && <p className="title">MAIN</p>}

          <Link to={routes.dashboard}>
            {" "}
            <li className={`${pathname.includes("dashboard") && "liActive"}`}>
              <DashboardIcon className="icon" />
              {openSidebar && (
                <span
                  className={`${
                    pathname.includes("dashboard") && "spanActive"
                  }`}
                >
                  Dashboard
                </span>
              )}
            </li>
          </Link> */}
          {/* <Link to={routes.maintenance}>
            {" "}
            <li>
              <EngineeringIcon className="icon" />
              <span>Maintenance</span>
            </li>
          </Link>
          <Link to={routes.reports}>
            {" "}
            <li>
              <TextSnippetIcon className="icon" />
              <span>Reports</span>
            </li>
          </Link> */}

          {/* <p className="title">MONITORING</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <FactoryIcon className="icon" />
              <span>TicTac</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <FactoryIcon className="icon" />
              <span>Chocolate</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <FactoryIcon className="icon" />
              <span>Plastic</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <FactoryIcon className="icon" />
              <span>F&U</span>
            </li>
          </Link> */}

          {/* <p className="title">SECURITY</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <VpnKeyIcon className="icon" />
              <span>Forgot Password</span>
            </li>
          </Link> */}
          {/* <p className="title">MANAGEMENT</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <FactoryIcon className="icon" />
              <span>Plants</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthIcon className="icon" />
              <span>Shifts</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <ConstructionIcon className="icon" />
              <span>Equipments</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <SensorsIcon className="icon" />
              <span>Sensors</span>
            </li>
          </Link> */}

          {/* <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          {/* <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
      <div className="bottom">
        {openSidebar && (
          <div>
            <p>{t("sidebar.powered")}</p>
            <p>Syncronik</p>
          </div>
        )}

        <div
          className={`cursor-pointer hover:text-primary ${
            !openSidebar && "mx-auto"
          }`}
          onClick={toggleSidebar}
        >
          {openSidebar ? <ArrowBackIcon /> : <ArrowForwardIcon />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
