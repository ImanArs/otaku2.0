import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";

interface Profile {
  // Define the structure of the profile data here
  // Example:
  // id: number;
  // name: string;
  // email: string;
  // Add more fields as necessary
}

export const useProfile = create<{
  isLoading: boolean;
  cityList: any[] | null;
  profile: any | null;
  getProfile: () => Promise<void>;
  patchProfile: (profile: Profile) => Promise<void>;
  getCityList: () => Promise<void>;
}>(set => ({
  isLoading: false,
  cityList: null,
  profile: null,
  getProfile: async () => {
    set({ isLoading: true });
    try {
      const response = await axios('http://13.60.49.147:8000/api/users/profile/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        },
      });
      set({ profile: response.data });
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      toast.error("Failed to fetch profile");
      set({ profile: undefined }); // Optionally, handle the error as needed
    } finally {
      set({ isLoading: false });
    }
  },
  patchProfile: async (profile: Profile) => {
    set({ isLoading: true });
    try {
      await axios.patch('http://13.60.49.147:8000/api/users/profile/', profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        },
      });
      toast.success("Profile updated successfully");
      // Optionally, update the local profile state if necessary
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile");
      // Optionally, handle the error as needed
    } finally {
      set({ isLoading: false });
    }
  },
  getCityList: async () => {
    try {
      const response = await axios('http://13.60.49.147:8000/api/city/list/')
      if (response.status === 200) {
        set({ cityList: response.data})
      }
      toast.success("Country list successfully fetched");
    } catch (error) {
      toast.error("Failed to get country list");
      
    } finally {
      set({ isLoading: false });
    }
  }
}));