import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
// import LineChart from "../../charts/LineChart02";
import LineChart from "../../../charts/custom/LineChart02";

// Import utilities
// import { tailwindConfig } from "../../utils/Utils";
import { tailwindConfig } from "../../../utils/custom/Utils";

const data = {
  consumes_records: [
    {
      id: 81,
      consume: 256,
      date: "2023-02-20",
      hour: "17:14:25",
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
      shift: {
        id: 16,
        name: "Vespertino",
        schedule: "15:30 - 21:30",
      },
    },
    {
      id: 82,
      consume: 349,
      date: "2023-02-20",
      hour: "17:14:26",
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
      shift: {
        id: 16,
        name: "Vespertino",
        schedule: "15:30 - 21:30",
      },
    },
    {
      id: 83,
      consume: 38,
      date: "2023-02-20",
      hour: "17:14:43",
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
      shift: {
        id: 16,
        name: "Vespertino",
        schedule: "15:30 - 21:30",
      },
    },
    {
      id: 84,
      consume: 44,
      date: "2023-02-20",
      hour: "17:14:44",
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
      shift: {
        id: 16,
        name: "Vespertino",
        schedule: "15:30 - 21:30",
      },
    },
    {
      id: 86,
      consume: 185,
      date: "2023-02-20",
      hour: "17:15:03",
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
      shift: {
        id: 19,
        name: "Nocturno",
        schedule: "21:30 - 24:00",
      },
    },
    {
      id: 85,
      consume: 70,
      date: "2023-02-20",
      hour: "17:15:01",
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
      shift: {
        id: 19,
        name: "Nocturno",
        schedule: "21:30 - 24:00",
      },
    },
    {
      id: 77,
      consume: 193,
      date: "2023-02-20",
      hour: "16:56:31",
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
      shift: {
        id: 18,
        name: "Matutino",
        schedule: "09:00 - 15:30",
      },
    },
    {
      id: 78,
      consume: 332,
      date: "2023-02-20",
      hour: "16:56:33",
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
      shift: {
        id: 18,
        name: "Matutino",
        schedule: "09:00 - 15:30",
      },
    },
    {
      id: 79,
      consume: 276,
      date: "2023-02-20",
      hour: "17:14:07",
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
      shift: {
        id: 18,
        name: "Matutino",
        schedule: "09:00 - 15:30",
      },
    },
    {
      id: 80,
      consume: 58,
      date: "2023-02-20",
      hour: "17:14:08",
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
      shift: {
        id: 18,
        name: "Matutino",
        schedule: "09:00 - 15:30",
      },
    },
  ],
  consume: 1801,
};

function DashboardCard08() {
  const { t } = useTranslation();

  useEffect(() => {
    data.consumes_records.map((cons) => {
      //console.log(cons.hour);
      console.log(cons.consume);
    });
  }, []);

  const obtainValues = (hour) => {
    let array = [];
    let hours = [];
    let consume = [];

    data.consumes_records.map((consume) => {
      // array.push(consume.hour);
      array.push(consume);
    });
    array.sort(function (a, b) {
      return (
        Date.parse("1970/01/01 " + a.hour) - Date.parse("1970/01/01 " + b.hour)
      );
    });

    console.log(array);

    array.map((each) => {
      hours.push(each.hour);
      consume.push(each.consume);
    });

    return hour ? hours : consume;

    //return array;
  };

  const chartData = {
    //labels: [
    // "12-01-2020",
    // "01-01-2021",
    // "02-01-2021",
    // "03-01-2021",
    // "04-01-2021",
    // "05-01-2021",
    // "06-01-2021",
    // "07-01-2021",
    // "08-01-2021",
    // "09-01-2021",
    // "10-01-2021",
    // "11-01-2021",
    // "12-01-2021",
    // "01-01-2022",
    // "02-01-2022",
    // "03-01-2022",
    // "04-01-2022",
    // "05-01-2022",
    // "06-01-2022",
    // "07-01-2022",
    // "08-01-2022",
    // "09-01-2022",
    // "10-01-2022",
    // "11-01-2022",
    // "12-01-2022",
    // "01-01-2023",
    // "16:56:31",
    // "16:56:33",
    // "17:14:07",
    // "17:14:08",
    // "17:14:25",
    // "17:14:26",
    // "17:14:43",
    // "17:14:44",
    // "17:15:01",
    // "17:15:03",
    // ],
    labels: obtainValues(true),
    datasets: [
      // Indigo line
      {
        label: "Current",
        // data: [
        //   73, 64, 73, 69, 104, 104, 164, 164, 120, 120, 120, 148, 142, 104, 122,
        //   110, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323,
        // ],
        data: obtainValues(false),
        borderColor: tailwindConfig().theme.colors.indigo[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Blue line
      // {
      //   label: "Previous",
      //   data: [
      //     184, 86, 42, 378, 42, 243, 38, 120, 0, 0, 42, 0, 84, 0, 276, 0, 124,
      //     42, 124, 88, 88, 215, 156, 88, 124, 64,
      //   ],
      //   borderColor: tailwindConfig().theme.colors.blue[400],
      //   fill: false,
      //   borderWidth: 2,
      //   tension: 0,
      //   pointRadius: 0,
      //   pointHoverRadius: 3,
      //   pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
      //   clip: 20,
      // },
      // emerald line
      // {
      //   label: "Average",
      //   data: [
      //     122, 170, 192, 86, 102, 124, 115, 115, 56, 104, 0, 72, 208, 186, 223,
      //     188, 114, 162, 200, 150, 118, 118, 76, 122, 230, 268,
      //   ],
      //   borderColor: tailwindConfig().theme.colors.emerald[500],
      //   fill: false,
      //   borderWidth: 2,
      //   tension: 0,
      //   pointRadius: 0,
      //   pointHoverRadius: 3,
      //   pointBackgroundColor: tailwindConfig().theme.colors.emerald[500],
      //   clip: 20,
      // },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-9 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        {/* <h2 className="font-semibold text-slate-800">Sales Over Time (all stores)</h2> */}
        <h2 className="font-bold text-black text-lg">
          {" "}
          {t("dashboard.chartTitle")}
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard08;
