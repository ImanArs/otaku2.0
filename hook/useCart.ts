import { create } from "zustand";

export const useCart = create<{
  cartStep: number;
  openCart: boolean;
  nextStep: () => void;
  toggleCart: () => void;
  closeCart: () => void;
}>((set, get) => ({
  cartStep: 1,
  openCart: false,
  nextStep: () => set((state) => ({ cartStep: state.cartStep + 1 })),
  toggleCart: () => set((state) => ({ openCart: !state.openCart })),
  closeCart: () => set({ cartStep: 1, openCart: false }),
}))