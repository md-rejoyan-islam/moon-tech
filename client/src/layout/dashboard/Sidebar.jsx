import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 w-[250px] h-screen bg-indigo-200  p-5 ">
      <ul className="flex gap-3  flex-col h-full">
        <li>Admin Dashboard</li>
        <li>
          <Link to="/dashboard">Product List</Link>
        </li>
        <li>
          <Link to="add-product"> Add Product </Link>
        </li>
        <li className="mt-auto">
          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
