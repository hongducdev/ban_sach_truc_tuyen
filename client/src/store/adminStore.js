import {create} from 'zustand';

export const useAdminStore = create((set) => ({
  admin: null,
  setAdmin: (admin) => set({admin}),
}));