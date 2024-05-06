import { CiSearch } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";

import Drawer from "../../components/drawer/Drawer";
function Navbar() {
  return (
    <header className="flex sticky top-0 bg-white shadow-md justify-between items-center px-4 h-[70px] z-10">
      <div className="flex">
        <Drawer />

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
