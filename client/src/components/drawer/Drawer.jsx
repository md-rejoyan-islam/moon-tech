import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdFilterList } from "react-icons/md";

function Drawer({ useFor, children }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    document.getElementById("menu").classList.remove("hidden");
    // document.body.style.scrollbarWidth = 0;
  }, []);

  return (
    <>
      {useFor === "sidebar" && (
        <label
          htmlFor="open-menu"
          tabIndex="0"
          aria-haspopup="true"
          role="button"
          aria-controls="menu"
          className="cursor-pointer md:hidden "
          id="openmenu"
        >
          <span className="lg:hidden flex text-sm justify-center items-center gap-2 bg-violet-100 rounded-sm p-1">
            <MdFilterList />
            <span>Filter</span>
          </span>
        </label>
      )}
      <label
        htmlFor="open-menu"
        tabIndex="0"
        aria-haspopup="true"
        role="button"
        aria-controls="menu"
        className="cursor-pointer  border p-1 md:hidden rounded-sm"
        id="openmenu"
      >
        <HiMenu className="text-lg " />
      </label>
      <main
        className={` fixed top-0 left-0 overflow-hidden min-h-screen z-10   ${
          openDrawer && "bg-[#b1dacb9c] md:bg-transparent text-left w-full z-10"
        } `}
      >
        <input
          type="checkbox"
          data-menu
          id="open-menu"
          className="peer hidden"
          onChange={(e) => setOpenDrawer(e.target.checked)}
        />
        <aside
          className={`fixed overflow-scroll z-20 w-full min-h-screen -translate-x-full left-0 duration-500 transition-transform  flex inset-y-0 peer-checked:transform-none peer-checked:opacity-100  rounded-none `}
          role="menu"
          id="menu"
          aria-labelledby="openmenu"
        >
          {children}

          {/* <nav className=" translate-x-[0%] text-white  duration-500 transition-transform h-full  bg-blue-600 box-border \  overflow-auto flex flex-col w-[calc(60%)] p-6 peer-checked:transform-none peer-checked:opacity-100">
            <h2 className="text-3xl">Menu</h2>
            <br />
            <a href="#">Item 1</a>
            <br />
            <a href="#">Item 2</a>
            <br />
            <a href="#">Item 3</a>
          </nav> */}
          <label htmlFor="open-menu" className="flex md:w-full"></label>
        </aside>
        <div className="absolute top-0 bg-drawerActiveBg w-full h-full pointer-events-none hidden animate-fadeIn peer-checked:block"></div>
      </main>
    </>
  );
}

export default Drawer;
