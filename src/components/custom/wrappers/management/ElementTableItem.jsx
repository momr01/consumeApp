import { DatasetController } from "chart.js";
import { Link, useNavigate } from "react-router-dom";

const ElementTableItem = ({
  element,
  handleClick,
  isChecked,
  tableData,
  dataStructure,
}) => {
  //const navigate = useNavigate();
  //const [deletePlant] = useDeletePlantMutation();

  const totalColor = (status) => {
    switch (status) {
      case "Paid":
        return "text-emerald-500";
      case "Due":
        return "text-amber-500";
      case "Overdue":
        return "text-rose-500";
      default:
        return "text-slate-500";
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-emerald-100 text-emerald-600";
      case "Due":
        return "bg-amber-100 text-amber-600";
      case "Overdue":
        return "bg-rose-100 text-rose-500";
      default:
        return "bg-slate-100 text-slate-500";
    }
  };

  const typeIcon = (type) => {
    switch (type) {
      case "Subscription":
        return (
          <svg
            className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z" />
          </svg>
        );
      default:
        return (
          <svg
            className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M11.4 0L10 1.4l2 2H8.4c-2.8 0-5 2.2-5 5V12l-2-2L0 11.4l3.7 3.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l3.7-3.7L7.4 10l-2 2V8.4c0-1.7 1.3-3 3-3H12l-2 2 1.4 1.4 3.7-3.7c.4-.4.4-1 0-1.4L11.4 0z" />
          </svg>
        );
    }
  };

  const handleDelete = async () => {
    //   try {
    //     await deletePlant(props.id).unwrap();
    //     console.log("eliminado");
    //   } catch (error) {
    //     console.log("no es posible eliminar");
    //   }
  };

  const handleManage = () => {
    //navigate(routes.managePlant(props.id));
  };

  const numerousTags = (element, array) => {
    if (array[0] === "is_active") {
      return showState(element.is_active);
    } else {
      //console.log(array[0])
      switch (array.length) {
        case 1:
          return element[array[0]];
        case 2:
          return element[array[0]][array[1]];

        default:
          return null;
      }
    }
  };

  const showState = (state) => {
    if (state) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-circle-check"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#00b341"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-x"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#ff2825"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    }
  };

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              id={element.id}
              className="form-checkbox"
              type="checkbox"
              onChange={handleClick}
              checked={isChecked}
            />
          </label>
        </div>
      </td>
      {tableData.map((item) => (
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-medium text-sky-500">
            {numerousTags(element, item.tag)}
          </div>
        </td>
      ))}
      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-medium text-sky-500">{element.name}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className={`font-medium ${totalColor("paid")}`}>
            {props.country}
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div
            className={`inline-flex font-medium rounded-full text-center px-2.5 py-0.5 ${statusColor(
              "due"
            )}`}
          >
            {props.state}
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-medium text-slate-800">{props.city}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div>{props.district}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div>{props.street}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="flex items-center">
            {typeIcon(props.type)}
            <div>{props.number}</div>
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div>{props.zipCode}</div>
        </td> */}
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="space-x-1 flex items-center">
          {/* <Link to={routes.updatePlant(props.id)}> */}
          {dataStructure.manage.edit && (
            <Link to={dataStructure.updateLink(element.id)}>
              <button className="text-slate-400 hover:text-slate-500 rounded-full">
                <span className="sr-only">Edit</span>
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                  <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                </svg>
              </button>
            </Link>
          )}

          {dataStructure.manage.delete && (
            <button
              className="text-rose-500 hover:text-rose-600 rounded-full"
              onClick={handleDelete}
            >
              <span className="sr-only">Delete</span>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
              </svg>
            </button>
          )}

          {dataStructure.manage.manage && (
            <button onClick={handleManage}>
              <span className="sr-only">Manage</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-caret-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ff2825"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
              </svg>
            </button>
          )}

          {dataStructure.manage.enable && dataStructure.manage.disable ? (
            element.is_active ? (
              <button
                className="text-slate-400 hover:text-slate-500 rounded-full"
                //onClick={disableThisUser}
              >
                <span className="sr-only">Disable</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-ban"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#06184a"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
                </svg>
              </button>
            ) : (
              <button
                className="text-slate-400 hover:text-slate-500 rounded-full"
                //onClick={enableThisUser}
              >
                <span className="sr-only">Enable</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-checks"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#06184a"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 12l5 5l10 -10" />
                  <path d="M2 12l5 5m5 -5l5 -5" />
                </svg>
              </button>
            )
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export default ElementTableItem;
