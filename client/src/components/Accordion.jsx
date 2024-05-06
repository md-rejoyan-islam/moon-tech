import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function Accordion({ children, title }) {
  return (
    <div className="w-full  rounded-md bg-slate-100">
      <div className="mx-auto w-full max-w-md rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex  w-full justify-between items-center rounded-lg  px-4 py-3 text-left text-sm font-medium   focus:outline-none focus-visible:ring ">
                <span>{title}</span>

                <FaChevronDown
                  className={`${open ? "rotate-180 transform" : ""} text-sm`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-2  border-t text-sm text-gray-500 text-left">
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
