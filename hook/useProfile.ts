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
  profile: any | undefined;
  getProfile: () => Promise<void>;
  patchProfile: (profile: Profile) => Promise<void>;
}>(set => ({
  isLoading: false,
  profile: undefined,
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
      await axios.put('http://13.60.49.147:8000/api/users/profile/', profile, {
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
  }
}));