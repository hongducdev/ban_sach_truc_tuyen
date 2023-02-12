import React from "react";

const FooterItemContact = ({ titleContact, contact }) => {
  return (
    <li className="flex items-center gap-1 text-text3">
      <span className="font-semibold text-text2">{titleContact}:</span>
      {contact}
    </li>
  );
};

export default FooterItemContact;
