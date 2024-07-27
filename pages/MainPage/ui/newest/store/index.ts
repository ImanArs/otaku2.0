import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";

const useMainNewest = create<{
  isLoading: boolean;
  newest: any[];
  getNewest: () => void;
}>((set, get) => ({
  isLoading: true,
  newest: [],
  getNewest: async () => {
    try {
      const response = await axios('http://13.60.49.147:8000/api/banners/list/?category=1')
      if (response.status === 200) {
        set({ newest: response.data });
      } else {
        throw new Error('Failed to fetch newest products')
      }
    } catch (error) {
      toast.error('Failed to fetch newest products', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });      
    } finally {
      set({ isLoading: false });
    }
  }
}));