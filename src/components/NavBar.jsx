import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillFileAdd, AiTwotoneHome } from "react-icons/ai";

const NavItem = ({ to, content, icon, closed}) => {
  const commonClasses =
    "flex text-center items-center  w-full p-2 whitespace-nowrap block";
  const activeClass = commonClasses + " bg-blue-500 text-white";
  const inActiveClass = commonClasses + " text-gray-700";

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
      to={to}
    >
      {icon}
      <span className={closed ? "w-0 transition-width overflow-hidden" : "w-full transition-width overflow-hidden" }>{content}</span>
    </NavLink>
  );
};

export default function NavBar({ closed }) {
  return (
    <nav>
      <div>
        <img className="mt-3" src="./logo.png" alt="" />
      </div>
      <ul className="mt-14 mx-1">
        <li>
          <NavItem
            closed={closed}
            to="/"
            icon={<AiTwotoneHome size={24} />}
            content="Home"
          />
        </li>
        <li>
          <NavItem
            closed={closed}
            to="/create-post"
            icon={<AiFillFileAdd size={24} />}
            content="Create Post"
          />
        </li>
      </ul>
    </nav>
  );
}
