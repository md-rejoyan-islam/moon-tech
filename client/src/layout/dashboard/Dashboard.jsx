import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className=" flex h-[calc(100vh-10px)]">
      <div className="col-span-2 h-[calc(100vh-25px)] transition-all duration-700 hidden md:block ">
        <Sidebar />
      </div>
      <div className="col-span-10 w-full h-[calc(100vh-0px)] overflow-scroll  ">
        <Navbar />

        <div className="p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
