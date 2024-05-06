import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [openSmallMenu, setOpenSmallMenu] = useState(false);
  return (
    <>
      <header className="max-w-7xl mx-auto xl:rounded-2xl bg-[#c7d2fe] xl:mt-2 ">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-3">
            <Link
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse text-indigo-900 font-semibold"
            >
              Moon Tech
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-violet-300 border border-violet-400 focus:border-none "
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setOpenSmallMenu(!openSmallMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${
                !openSmallMenu && "hidden"
              } w-full md:block md:w-auto`}
            >
              <ul className="font-medium flex flex-col p-2 md:p-0 mt-2 border border-violet-300 rounded-lg  md:flex-row gap-1 rtl:space-x-reverse md:items-center md:mt-0 md:border-0 ">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 px-3  rounded hover:bg-violet-500 hover:text-white md:text-indigo-900 font-semibold md:border-0"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/top-rated"
                    className="block py-2 px-3  rounded hover:bg-violet-500 hover:text-white md:text-indigo-900 font-semibold md:border-0 "
                  >
                    Top Rated
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className="block py-2 px-3  rounded hover:bg-violet-500 hover:text-white md:text-indigo-900 font-semibold md:border-0 "
                  >
                    About
                  </NavLink>
                </li>

                <li
                  title="Wishlist"
                  className="flex gap-2 px-2 items-center mt-2 md:mt-0"
                >
                  <Link to="/">
                    <IoIosListBox className=" bg-indigo-500 w-8 h-8 p-2 rounded-full text-white" />
                  </Link>
                  <Link to="/cart">
                    <BsFillCartFill className=" bg-indigo-500 w-8 h-8 p-2 rounded-full  text-white" />
                  </Link>
                </li>
                <li title="cart"></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
