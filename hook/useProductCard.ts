import axios from "axios";
import { create } from "zustand";

export const useProductcard = create<{
  favorites: any[];
  addToFavorite: (id: number) => void;
  getAllFavorites: () => void;
  removeFavorite: (id: number) => void;
}>((set, get) => ({
  favorites: [],
  addToFavorite: (id) => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    console.log(refreshToken);
    
    axios.post(`http://13.60.49.147:8000/api/favorites/products/add/${id}/`, {}, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  },
  async getAllFavorites() {
    try {
      const response = await axios('http://13.60.49.147:8000/api/favorites/products/list/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      set({ favorites: response.data[0].products });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch favorites:", error);
      throw error;
    }
  },
  removeFavorite: (id) => {
    axios.post(`http://13.60.49.147:8000/api/favorites/products/remove/${id}/`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    })
  }
}))