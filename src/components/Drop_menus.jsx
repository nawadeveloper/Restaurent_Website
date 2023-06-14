import React from "react";
import { Link } from "react-scroll";

const Drop_menus = (props) => {
  // let addClass = height.height ? "scale-y-100" : "scale-y-0";
  const addClass = props.height;

  let height = addClass ? "h-44" : "h-0";
  return (
    <nav
      className={`overflow-hidden z-50 fixed top-[45px] right-0 left-0 sm:hidden ${height} ease-in duration-200`}
    >
      <ul className="list-none border-t-[1px] border-gray-500 text-white uppercase">
        <li className="border-b border-b-gray-500 bg-gray-800">
          <Link
            activeClass="text-yellow-500"
            className="cursor-pointer hover:text-gray-300 p-2 block text-center"
            smooth={false}
            spy={true}
            duration={100}
            offset={-200}
            to="home"
          >
            Home
          </Link>
        </li>
        <li className="border-b border-b-gray-500 bg-gray-800">
          <Link
            activeClass="text-yellow-500"
            className="cursor-pointer hover:text-gray-300 p-2 block text-center"
            smooth={false}
            spy={true}
            duration={100}
            to="menu"
          >
            menu
          </Link>
        </li>
        <li className="border-b border-b-gray-500 bg-gray-800">
          <Link
            activeClass="text-yellow-500"
            className="cursor-pointer hover:text-gray-300 p-2 block text-center"
            smooth={false}
            spy={true}
            duration={100}
            to="contact"
          >
            contact
          </Link>
        </li>
        <li className="border-b border-b-gray-500 bg-gray-800">
          <Link
            activeClass="text-yellow-500"
            className="cursor-pointer hover:text-gray-300 p-2 block text-center"
            smooth={false}
            spy={true}
            duration={100}
            to="#"
          >
            order
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Drop_menus;
