import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ children, path }) => {
  const baseClasses =
    "text-text3 font-semibold relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary after:rounded-full hover:after:w-full hover:after:duration-300 hover:after:ease-in-out";

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `${baseClasses} after:w-full` : `${baseClasses} after:w-0`
      }>
      {children}
    </NavLink>
  );
};

export default LinkItem;
