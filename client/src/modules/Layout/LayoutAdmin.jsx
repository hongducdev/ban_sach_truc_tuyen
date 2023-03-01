import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin'

const LayoutAdmin = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-[15vw] bg-darkbg text-white">
        <NavbarAdmin />
      </div>
      <div className="w-[85vw] bg-darkSecondary text-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default LayoutAdmin