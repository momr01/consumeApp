import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";
import Transition from "../utils/Transition";

const recentNot = {
  recent_notifications: 2,
  authenticated_user: {
    id: 25,
    username: "delia90",
    first_name: "Delia",
    last_name: "Larousse Del Alivio",
    email: "alma.sala80@email.com",
    role: {
      role_id: 2,
      role_name: "Empleado de mantenimiento",
    },
    is_active: true,
    data_entry: "2023-01-19T22:12:26.567460Z",
  },
};

const notification_data = [
  {
    id: 20,
    user: {
      id: 25,
      username: "delia90",
      first_name: "Delia",
      last_name: "Larousse Del Alivio",
      email: "alma.sala80@email.com",
      role: {
        role_id: 2,
        role_name: "Empleado de mantenimiento",
      },
      is_active: true,
      data_entry: "2023-01-19T22:12:26.567460Z",
    },
    notification: {
      id: 4,
      hour: "14:39:31",
      description:
        "error: 400 description: Error causado por falla de lectura en sensor classification: Critico",
      sensor_error: {
        id: 20,
        date: "2023-02-21",
        hour: "14:39:31",
        error: {
          code: "400",
          description: "Error causado por falla de lectura en sensor",
          error_classification: {
            id: 1,
            classification: "Critico",
          },
        },
        sensor: {
          id: 2,
          name: "sensor-83jwp",
          consume_type: {
            id: 1,
            type_name: "Electricity",
          },
          plant: {
            id: 9,
            name: "Plant 2",
            address: {
              id: 17,
              country: "Mexico",
              state: "Veracruz",
              city: "Orizaba",
              district: "Coatzacoalcos",
              street: "La soledad",
              number: "139",
              zip_code: "96390",
            },
          },
        },
      },
    },
    is_checked: false,
  },
  {
    id: 8,
    user: {
      id: 25,
      username: "delia90",
      first_name: "Delia",
      last_name: "Larousse Del Alivio",
      email: "alma.sala80@email.com",
      role: {
        role_id: 2,
        role_name: "Empleado de mantenimiento",
      },
      is_active: true,
      data_entry: "2023-01-19T22:12:26.567460Z",
    },
    notification: {
      id: 2,
      hour: "14:34:36",
      description:
        "error: 323 description: Error de conexion en el sensor classification: Critico",
      sensor_error: {
        id: 18,
        date: "2023-02-21",
        hour: "14:34:36",
        error: {
          code: "323",
          description: "Error de conexion en el sensor",
          error_classification: {
            id: 1,
            classification: "Critico",
          },
        },
        sensor: {
          id: 2,
          name: "sensor-83jwp",
          consume_type: {
            id: 1,
            type_name: "Electricity",
          },
          plant: {
            id: 9,
            name: "Plant 2",
            address: {
              id: 17,
              country: "Mexico",
              state: "Veracruz",
              city: "Orizaba",
              district: "Coatzacoalcos",
              street: "La soledad",
              number: "139",
              zip_code: "96390",
            },
          },
        },
      },
    },
    is_checked: false,
  },
];

function DropdownNotifications({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${
          dropdownOpen && "bg-slate-200"
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        {/* <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current text-slate-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
          <path className="fill-current text-slate-400" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-bell"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
        </svg>
        <div className="absolute top-0 right-0 w-4 h-4 bg-rose-500 border-2 border-white rounded-full text-[9px] text-white">
          {recentNot?.recent_notifications}
        </div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === "right" ? "right-0" : "left-0"
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
            Notifications
          </div>
          <ul>
            {notification_data?.map((not, i) => (
              <li key={i} className="border-b border-slate-200 last:border-0">
                <Link
                  className="block py-2 px-4 hover:bg-slate-50"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span className="block text-sm mb-2">
                    📣{" "}
                    <span className="font-medium text-slate-800">
                      {not.notification.sensor_error.error.description}
                    </span>
                    {" - "}
                    {not.notification.description}
                  </span>
                  <span className="block text-xs font-medium text-slate-400">
                    {not.notification.sensor_error.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4 text-right">
            <Link to={routes.notifications}>See all</Link>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownNotifications;
