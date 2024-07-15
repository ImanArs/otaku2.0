import { create } from "zustand";

export const useCheckUserAuth = create<{
  isAuth: boolean;
}>(() => ({
  isAuth: !!localStorage.getItem("accessToken"),
}));