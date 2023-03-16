import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import images from "../images/custom";
import routes from "../helpers/routes";

import SidebarLinkGroup from "./SidebarLinkGroup";
import { useSelector } from "react-redux";
import { selectCurrentRole } from "../features/auth/authSlice";
import { useTranslation } from "react-i18next";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { t } = useTranslation();

  const monitoringLinks = [
    {
      id: 1,
      name: "TicTac",
      url: "/tictac",
    },
    {
      id: 2,
      name: "Chocolate",
      url: "/chocolate",
    },
    {
      id: 3,
      name: "Plastic",
      url: "/plastic",
    },
    {
      id: 4,
      name: "F&U",
      url: "/f-u",
    },
  ];

  const managementLinks = [
    {
      id: 1,
      name: t("sidebar.users"),
      url: routes.users,
    },
    {
      id: 2,
      name: t("sidebar.plants"),
      url: routes.plants,
    },
    {
      id: 3,
      name: t("sidebar.shifts"),
      url: routes.shifts,
    },
    {
      id: 4,
      name: t("sidebar.equipments"),
      url: routes.equipments,
    },
    {
      id: 5,
      name: "Sensors",
      url: routes.sensors,
    },
  ];

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const role = useSelector(selectCurrentRole);
  console.log(role);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  console.log(sidebarExpanded)

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } ${sidebarExpanded ? "px-5" : "px-0"}`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
        </div>

        <div className="space-y-8">
          <div>
            {sidebarExpanded && (
              <div className="px-5 py-3 w-36 mb-5">
                <img src={images.EMSLogo} alt="logo" />
              </div>
            )}

            <ul className={`${!sidebarExpanded && "mt-14"}`}>
              {/** Dashboard */}
              <li
                className={`px-6 py-4 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("dashboard") && "bg-hover text-primary"
                }`}
              >
                <NavLink
                  end
                  to={routes.dashboard}
                  className={`block text-slate-500 hover:text-primary truncate transition duration-150 ${
                    pathname.includes("dashboard") && "text-primary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current text-slate-400 ${
                            (pathname === "/" ||
                              pathname.includes("dashboard")) &&
                            "!text-primary"
                          }`}
                          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                        />
                        <path
                          className={`fill-current text-slate-600 ${
                            (pathname === "/" ||
                              pathname.includes("dashboard")) &&
                            "text-primary"
                          }`}
                          d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            (pathname === "/" ||
                              pathname.includes("dashboard")) &&
                            "text-hover"
                          }`}
                          d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                        />
                      </svg>

                      <span
                        className={`text-sm ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${
                          pathname === "/" || pathname.includes("dashboard")
                            ? "text-primary font-bold"
                            : "font-medium"
                        }`}
                      >
                        {t("sidebar.dashboard")}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>

              {/* Monitoring */}
              <SidebarLinkGroup
                activecondition={pathname.includes("monitoring")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-500 hover:text-primary truncate transition duration-150 ${
                          pathname.includes("monitoring") &&
                          "hover:text-primary"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes("monitoring") &&
                                  "text-indigo-300"
                                }`}
                                d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                              />
                              <path
                                className={`fill-current text-slate-700 ${
                                  pathname.includes("monitoring") &&
                                  "!text-indigo-600"
                                }`}
                                d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes("monitoring") &&
                                  "text-primary"
                                }`}
                                d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                              />
                            </svg>
                            <span
                              className={`text-sm ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${
                                pathname.includes("monitoring") ?
                                "text-primary font-bold" : "font-medium"
                              }`}
                            >
                              {t("sidebar.monitoring")}
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                open && "transform rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <ListItems links={monitoringLinks} open={open} />
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/** Maintenance */}
              <li
                className={`px-6 py-4 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("maintenance") && "bg-hover"
                }`}
              >
                <NavLink
                  end
                  to={routes.maintenance}
                  className={`block text-slate-500 hover:text-primary truncate transition duration-150 ${
                    pathname.includes("maintenance") && "hover:text-primary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname.includes("maintenance") && "text-primary"
                          }`}
                          d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname.includes("maintenance") && "text-secondary"
                          }`}
                          d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        {t("sidebar.maintenance")}
                      </span> */}
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname.includes("maintenance") && "text-primary"
                          }`}
                          d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname.includes("maintenance") && "text-primary"
                          }`}
                          d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                        />
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname.includes("maintenance") && "text-primary"
                          }`}
                          d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname.includes("maintenance") && "text-primary"
                          }`}
                          d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                        />
                      </svg>
                      <span
                        className={`text-sm ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${
                          (pathname === "/" ||
                            pathname.includes("maintenance")) ?
                          "text-primary font-bold" : "font-medium"
                        }`}
                      >
                        {t("sidebar.maintenance")}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>

              {/** Reports */}
              <li
                className={`px-6 py-4 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("reports") && "bg-hover"
                }`}
              >
                <NavLink
                  end
                  to={routes.reports}
                  className={`block text-slate-500 hover:text-primary truncate transition duration-150 ${
                    pathname.includes("reports") && "hover:text-primary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      {/* <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname.includes("reports") && "text-primary"
                          }`}
                          d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname.includes("reports") && "text-secondary"
                          }`}
                          d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        {t("sidebar.reports")}
                      </span> */}
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname.includes("reports") && "text-primary"
                          }`}
                          d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                        />
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname.includes("reports") && "text-primary"
                          }`}
                          d="M1 1h22v23H1z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname.includes("reports") && "text-primary"
                          }`}
                          d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        {t("sidebar.reports")}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>

              {/* Security */}
              <SidebarLinkGroup activecondition={pathname.includes("security")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-500 hover:text-primary truncate transition duration-150 ${
                          pathname.includes("security") &&
                          "hover:text-primary"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {/* <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current text-slate-700 ${
                                  pathname.includes("security") &&
                                  "!text-indigo-600"
                                }`}
                                d="M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z"
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes("security") &&
                                  "!text-primary"
                                }`}
                                d="M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z"
                              />
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes("security") &&
                                  "!text-indigo-300"
                                }`}
                                d="M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              {t("sidebar.security")}
                            </span> */}
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className="fill-current text-slate-600"
                                d="M8.07 16H10V8H8.07a8 8 0 110 8z"
                              />
                              <path
                                className="fill-current text-slate-400"
                                d="M15 12L8 6v5H0v2h8v5z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              {t("sidebar.security")}
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                open && "transform rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul
                          className={`pl-9 mt-1 ml-3 ${
                            !open && "hidden"
                          } border-l border-slate-300`}
                        >
                          <li className="mb-1 last:mb-0 py-5">
                            <NavLink
                              end
                              to="/job/company-profile"
                              className={({ isActive }) =>
                                "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " +
                                (isActive ? "!text-primary" : "")
                              }
                            >
                              <span className={`text-sm lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200  ${
                          pathname.includes("security") ?
                          "text-primary font-bold" : "font-medium"
                        }`}>
                                {t("sidebar.forgotPwd")}
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Management */}
              {role === "Administrador" && (
                <SidebarLinkGroup
                  activecondition={pathname.includes("management/management")}
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <a
                          href="#0"
                          className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                            pathname.includes("management") &&
                            "hover:text-slate-200"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {/* <svg
                                className="shrink-0 h-6 w-6"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  className={`fill-current text-slate-700 ${
                                    pathname.includes("management") &&
                                    "!text-indigo-600"
                                  }`}
                                  d="M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z"
                                />
                                <path
                                  className={`fill-current text-slate-600 ${
                                    pathname.includes("management") &&
                                    "!text-primary"
                                  }`}
                                  d="M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z"
                                />
                                <path
                                  className={`fill-current text-slate-400 ${
                                    pathname.includes("management") &&
                                    "!text-indigo-300"
                                  }`}
                                  d="M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z"
                                />
                              </svg>
                              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                {t("sidebar.management")}
                              </span> */}
                              <svg
                                className="shrink-0 h-6 w-6"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  className="fill-current text-slate-600"
                                  d="M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z"
                                />
                                <path
                                  className="fill-current text-slate-400"
                                  d="M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                                />
                              </svg>
                              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                {t("sidebar.management")}
                              </span>
                            </div>
                            {/* Icon */}
                            <div className="flex shrink-0 ml-2">
                              <svg
                                className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                  open && "transform rotate-180"
                                }`}
                                viewBox="0 0 12 12"
                              >
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                              </svg>
                            </div>
                          </div>
                        </a>
                        <ListItems links={managementLinks} open={open} />
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
              )}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}

        <div //className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto"
          className="pt-3 hidden lg:inline-flex 2xl:hidden justify-between mt-auto"
        >
          {sidebarExpanded && (
            <div className="ml-5 flex flex-col">
              <p className="text-center text-xs text-white">
                {" "}
                {t("sidebar.powered")}
              </p>
              <p className="text-center text-xs text-white">
                {" "}
                {t("sidebar.syncronik")}
              </p>
            </div>
          )}

          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItems = ({ links, open }) => {
  return (
    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
      <ul
        className={`pl-0 mt-1 ml-3 ${
          !open && "hidden"
        } border-l border-slate-300`}
      >
        {links.map((link, index) => (
          <li className="mb-1 last:mb-0 py-2" key={index}>
            <NavLink
              end
              to={link.url}
              className={({ isActive }) =>
                "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " +
                (isActive ? "!text-green" : "")
              }
            >
              {({ isActive }) => (
                <span
                  className={`text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pl-9 ${
                    isActive &&
                    "font-bolder text-base underline underline-offset-4"
                  }`}
                >
                  {link.name}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
