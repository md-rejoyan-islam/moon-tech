import { CiSearch } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { MdAddBusiness } from "react-icons/md";
import { AiOutlineRollback } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";

import Drawer from "../../components/drawer/Drawer";
import Sidebar from "./Sidebar";
function Navbar() {
  return (
    <header className="flex sticky top-0 bg-white shadow-md justify-between items-center px-4 h-[70px] z-10">
      <div className="flex z-10">
        <Drawer>
          <div className=" bg-[#f8f9fe]  py-5 px-3 block w-[230px]  h-full">
            <ul className="flex gap-1  flex-col h-full w-full">
              <li className="pb-8 px-2 flex gap-1 items-center ">
                <FaShoppingBag /> Admin Dashboard
              </li>
              <li className="hover:bg-[#fff] bg-[#fff]  border border-transparent hover:border-slate-100 shadow-2xl  py-2 px-2">
                <Link to="/dashboard" className="flex gap-2 items-center">
                  <CiBoxList className="bg-[#fff] shadow-md hover:bg-white p-1 text-2xl rounded-sm" />
                  <span>Product List</span>
                </Link>
              </li>
              <li className="hover:bg-[#fff]  border border-transparent hover:border-slate-100 hover:shadow-2xl  py-2 px-2">
                <Link to="add-product" className="flex gap-2 items-center">
                  {" "}
                  <MdAddBusiness className="bg-[#fff] shadow-md hover:bg-white p-1 text-2xl rounded-sm" />{" "}
                  <span>Add Product </span>
                </Link>
              </li>
              <li className="mt-auto bg-red-100 shadow-lg py-2 px-1 rounded-md">
                <Link to="/" className="flex gap-2 items-center">
                  <AiOutlineRollback /> Back to Home{" "}
                </Link>
              </li>
            </ul>
          </div>
        </Drawer>

        <label className="md:flex  border items-center py-2 px-4 rounded-md gap-2 hidden ">
          <CiSearch />
          <input
            type="search"
            className="focus:outline-none"
            placeholder="Type to search..."
          />
        </label>
      </div>
      <div className="flex gap-3 items-center">
        <div className="text-[12px] text-right  hidden sm:block">
          <h3 className="font-semibold">Thomas Anree</h3>
          <p>Admin</p>
        </div>
        <button className="flex gap-1 items-center">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              className="w-10 h-10 rounded-full"
              alt="Thomas Anree"
            />
          </figure>
          <RxCaretDown className="text-2xl hidden sm:block" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
