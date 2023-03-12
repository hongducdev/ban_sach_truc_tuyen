import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children, classNames="" }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className={`absolute top-full left-0 w-full shadow-sm ${classNames}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default List;
