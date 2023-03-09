import { createContext, useState } from "react";

export const AdminContext = createContext({});

export function AdminContextProvider({ children }) {
  const [adminInfo, setAdminInfo] = useState({});
  return (
    <AdminContext.Provider value={{ adminInfo, setAdminInfo }}>
      {children}
    </AdminContext.Provider>
  );
}
