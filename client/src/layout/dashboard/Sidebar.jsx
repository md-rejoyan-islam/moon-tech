import { NavLink } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { MdAddBusiness } from "react-icons/md";
import { AiOutlineRollback } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import "./Style.css";
const Sidebar = () => {
  return (
    <div className="col-span-2 md:w-[250px] h-screen md::bg-[#f8f9fe] z-10  py-5 px-3 border-r">
      <ul className="flex gap-1  flex-col h-full dashboard-sidebar-menu">
        <li className="pb-8 px-2 flex gap-1 items-center ">
          <FaShoppingBag /> Admin Dashboard
        </li>
        <li>
          <NavLink
            to="product-list"
            className="flex gap-2 items-center   py-2 px-2 hover:bg-blue-200  hover:shadow-2xl  border border-transparent hover:border-slate-200 rounded-sm"
          >
            <CiBoxList className="  shadow-md  bg-white p-1 text-2xl rounded-sm" />
            <span>Product List</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="add-product"
            className="flex gap-2 items-center   py-2 px-2 hover:bg-blue-200  hover:shadow-2xl  border border-transparent hover:border-slate-200 rounded-sm"
          >
            <MdAddBusiness className=" shadow-md  bg-white p-1 text-2xl rounded-sm" />
            <span>Add Product </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="brand-list"
            className="flex gap-2 items-center   py-2 px-2 hover:bg-blue-200  hover:shadow-2xl  border border-transparent hover:border-slate-200 rounded-sm"
          >
            <CiBoxList className=" shadow-md  bg-white p-1 text-2xl rounded-sm" />
            <span>Brand List</span>
          </NavLink>
        </li>
        <li className="mt-auto bg-red-100 shadow-lg py-2 px-1 rounded-md">
          <NavLink to="/" className="flex gap-2 items-center">
            <AiOutlineRollback /> Back to Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
