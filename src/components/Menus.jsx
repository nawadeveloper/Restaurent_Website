import React from "react";
import { Link } from "react-scroll";

const Menus = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="list-none flex text-white uppercase font-bold">
        <li>
          <Link
            activeClass="text-yellow-500"
            className="cursor-pointer hover:text-gray-300 p-3"
            smooth={false}
            spy={true}
            duration={100}
            offset={-200}
            to="home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="text-yellow-500"
            className="cursor-pointer hover:text-gray-300 p-3"
            smooth={false}
            spy={true}
            duration={100}
            to="menu"
          >
            menu
          </Link>
        </li>
        <li>
          <Link
            activeClass="text-yellow-500"
            className="cursor-pointer hover:text-gray-300 p-3"
            smooth={false}
            spy={true}
            duration={100}
            to="contact"
          >
            contact
          </Link>
        </li>
        <li>
          <a
            href="https://www.clover.com/online-ordering/gorkhali-kitchen-tampa"
            target="_blank"
            className="cursor-pointer hover:text-gray-300 p-3"
          >
            order
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menus;
