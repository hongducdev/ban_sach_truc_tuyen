import { create } from "zustand";

export const useCookieStore = create((set) => ({
  cookie: null,
  setCookie: (cookie) => set({ cookie }),
}));
