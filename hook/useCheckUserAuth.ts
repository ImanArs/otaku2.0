import { create } from "zustand";

export const useCheckUserAuth = create<{
  isAuth: boolean;
}>(() => ({
  isAuth: typeof window !== 'undefined' ? !!localStorage.getItem('accessToken') : false
}));