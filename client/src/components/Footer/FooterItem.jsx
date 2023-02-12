import React from 'react'

const FooterItem = ({title, children}) => {
  return (
    <div className="">
      <h3 className="font-semibold text-lg text-text1 uppercase">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default FooterItem