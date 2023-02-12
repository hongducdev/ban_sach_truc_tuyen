import React from "react";

const FooterItemLink = ({ path, children }) => {
  return (
    <a
      href={path}
      className="hover:text-primary hover:duration-200 hover:ease-in-out text-text3">
      {children}
    </a>
  );
};

export default FooterItemLink;
