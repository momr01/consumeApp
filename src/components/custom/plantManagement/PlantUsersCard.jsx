import { Link } from "react-router-dom";

const PlantUsersCard = ({ item }) => {
  return (
    <div className="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200 w-[30%]">
      <div className="flex flex-col h-full p-5">
        <div className="grow">
          <header className="flex items-center mb-4 justify-center">
            <div className="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-primary to-indigo-300 mr-3">
              <svg
                className="w-10 h-10 fill-current text-white"
                viewBox="0 0 40 40"
              >
                <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
              </svg>
            </div>
            <h3 className="text-lg text-slate-800 font-semibold">
              {item.name}
            </h3>
          </header>
          <div className="text-sm">{item.email}</div>
          <div className="text-sm">{item.role}</div>
        </div>
        {/* Card footer */}
        <footer className="mt-4">
          <div className="flex flex-wrap justify-end items-center">
            <Link
              className="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-rose-100 text-rose-600 hover:bg-rose-600 hover:text-rose-100"
              to="/"
            >
              Delete
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PlantUsersCard;
