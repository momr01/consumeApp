import React, { useRef, useEffect } from "react";

import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
// import { tailwindConfig, formatValue } from "../utils/Utils";
import { tailwindConfig, formatValue } from "../../utils/custom/Utils";

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
);

function LineChart02({ data, width, height }) {
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              beginAtZero: true,
            },
            ticks: {
              maxTicksLimit: 5,
              // callback: (value) => formatValue(value),
              callback: (value) => value + " kWh",
            },
          },
          x: {
            type: "time",
            // time: {
            //   parser: "MM-DD-YYYY",
            //   unit: "month",
            //   displayFormats: {
            //     month: "MMM YY",
            //   },
            // },
            // time: {
            //   parser: "MM-DD-YYYY",
            //   unit: "day",
            //   displayFormats: {
            //     month: "DD YY",
            //   },
            // },
            // time: {
            //   parser: "HH-MM-SS",
            //   unit: "minutes",
            //   displayFormats: {
            //     month: "HH MM SS",
            //   },
            // },
            time: {
              parser: "hh:mm:ss",
              unit: "second",
              tooltipFormat: "MMM DD, H:mm:ss a",
              displayFormats: {
                second: "H:mm:ss",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              // autoSkipPadding: 48,
              autoSkipPadding: 100,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "htmlLegend",
          afterUpdate(c, args, options) {
            const ul = legend.current;
            if (!ul) return;
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove();
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels?.generateLabels(c);
            items?.slice(0, 2).forEach((item) => {
              const li = document.createElement("li");
              li.style.marginLeft = tailwindConfig().theme.margin[3];
              // Button element
              const button = document.createElement("button");
              button.style.display = "inline-flex";
              button.style.alignItems = "center";
              button.style.opacity = item.hidden ? ".3" : "";
              button.onclick = () => {
                c.setDatasetVisibility(
                  item.datasetIndex,
                  !c.isDatasetVisible(item.datasetIndex)
                );
                c.update();
              };
              // Color box
              const box = document.createElement("span");
              box.style.display = "block";
              box.style.width = tailwindConfig().theme.width[3];
              box.style.height = tailwindConfig().theme.height[3];
              box.style.borderRadius = tailwindConfig().theme.borderRadius.full;
              box.style.marginRight = tailwindConfig().theme.margin[2];
              box.style.borderWidth = "3px";
              box.style.borderColor =
                c.data.datasets[item.datasetIndex].borderColor;
              box.style.pointerEvents = "none";
              // Label
              const label = document.createElement("span");
              label.style.color = tailwindConfig().theme.colors.slate[500];
              label.style.fontSize = tailwindConfig().theme.fontSize.sm[0];
              label.style.lineHeight =
                tailwindConfig().theme.fontSize.sm[1].lineHeight;
              const labelText = document.createTextNode(item.text);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(label);
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataBack = {
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

  console.log(dataBack.consume);

  return (
    <React.Fragment>
      <div className="px-5 py-3">
        <div className="flex flex-wrap justify-between items-end">
          <div className="flex items-start">
            <div className="text-3xl font-bold text-slate-800 mr-2">
              {dataBack.consume} kWh
            </div>
            <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">
              -22%
            </div>
          </div>
          <div className="grow ml-2 mb-1">
            <ul ref={legend} className="flex flex-wrap justify-end"></ul>
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default LineChart02;
