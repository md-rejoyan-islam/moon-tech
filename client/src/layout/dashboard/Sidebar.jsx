import { Link } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { MdAddBusiness } from "react-icons/md";
import { AiOutlineRollback } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="col-span-2 w-[250px] h-screen bg-[#f8f9fe] z-10  py-5 px-3">
      <ul className="flex gap-1  flex-col h-full">
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
        <li className="hover:bg-[#fff]  border border-transparent hover:border-slate-100 hover:shadow-2xl  py-2 px-2">
          <Link to="brand-list" className="flex gap-2 items-center">
            <CiBoxList className="bg-[#fff] shadow-md hover:bg-white p-1 text-2xl rounded-sm" />
            <span>Brand List</span>
          </Link>
        </li>
        <li className="mt-auto bg-red-100 shadow-lg py-2 px-1 rounded-md">
          <Link to="/" className="flex gap-2 items-center">
            <AiOutlineRollback /> Back to Home{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
