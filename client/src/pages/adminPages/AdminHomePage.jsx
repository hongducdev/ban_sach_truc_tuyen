import React, { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext';


const AdminHomePage = () => {

  const { adminInfo, setAdminInfo } = useContext(AdminContext);

  return (
    <div>
      <h1>AdminHomePage</h1>
      <p>
        {adminInfo.username} - {adminInfo.password}
      </p>
      
    </div>
  )
}

export default AdminHomePage