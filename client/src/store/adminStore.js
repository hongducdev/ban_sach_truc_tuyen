import { create } from "zustand";

export const useAdminStore = create((set) => ({
  admin: {},
  setAdmin: (admin) => set({ admin }),
  adminLogout: () => set({ admin: {} }),
}));
