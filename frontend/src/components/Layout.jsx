import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <div className="pt-[100px] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
