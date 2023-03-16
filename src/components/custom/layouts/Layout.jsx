import { useState } from "react";
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";

const Layout = ({ section, obs, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between pb-5 border-b-2 mb-5">
              <h2 className="font-bold text-black text-2xl mb-2 md:mb-0">{section}</h2>
              <p className="text-black text-xl">
                <span className="text-primary">{section}</span> / {obs}
              </p>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
