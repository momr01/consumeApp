import { useState } from "react";

const notification_data = [
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
    is_checked: true,
  },
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
    is_checked: true,
  },
  {
    id: 2,
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
      id: 1,
      hour: "14:25:56",
      description:
        "error: 323 description: Error de conexion en el sensor classification: Critico",
      sensor_error: {
        id: 17,
        date: "2023-02-21",
        hour: "14:25:56",
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
    is_checked: true,
  },
  {
    id: 14,
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
      id: 3,
      hour: "14:37:00",
      description:
        "error: 400 description: Error causado por falla de lectura en sensor classification: Critico",
      sensor_error: {
        id: 19,
        date: "2023-02-21",
        hour: "14:37:00",
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
    is_checked: true,
  },
];

function MyNotifications() {
  const [comments, setComments] = useState(true);
  const [messages, setMessages] = useState(true);
  const [mentions, setMentions] = useState(false);

  return (
    <div className="grow">
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 font-bold mb-5">
          My Notifications
        </h2>

        <section>
          {/* <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">
            General
          </h3> */}
          <ul>
            {notification_data?.map((not, i) => (
              <li
                key={i}
                className="flex justify-between items-center py-3 border-b border-slate-200"
              >
                <div>
                  <div className="text-slate-800 font-semibold">
                    {not.notification.description}
                  </div>
                  <div className="text-sm">
                    {`${not.notification.sensor_error.date} - ${not.notification.hour}`}
                  </div>
                  <div className="text-sm">
                    {`Error ${not.notification.sensor_error.error.code}= ${not.notification.sensor_error.error.description}`}
                  </div>

                  <div className="text-sm">
                    {
                      not.notification.sensor_error.error.error_classification
                        .classification
                    }
                  </div>
                  <div className="text-sm">
                    {`${not.notification.sensor_error.sensor.name} - ${not.notification.sensor_error.sensor.consume_type.type_name}`}
                  </div>
                  <div className="text-sm">
                    {not.notification.sensor_error.sensor.plant.name}
                  </div>
                </div>
                {/* Right */}
                <div className="flex items-center ml-4">
                  <div className="text-sm text-slate-400 italic mr-2">
                    {comments ? "On" : "Off"}
                  </div>
                  <div className="form-switch">
                    <input
                      type="checkbox"
                      id="comments"
                      className="sr-only"
                      checked={comments}
                      onChange={() => setComments(!comments)}
                    />
                    <label className="bg-slate-400" htmlFor="comments">
                      <span
                        className="bg-white shadow-sm"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Enable smart sync</span>
                    </label>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200">
          <div className="flex self-end">
            <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
              Cancel
            </button>
            <button className="btn bg-primary hover:bg-indigo-600 text-white ml-3">
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyNotifications;
