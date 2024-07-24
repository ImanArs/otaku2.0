import axios from "axios";
import { create } from "zustand";
import { toast } from 'react-toastify';

export const useProductcard = create<{
  isLoading: boolean;
  favorites: any[];
  addToFavorite: (id: number) => void;
  getAllFavorites: () => void;
  removeFavorite: (id: number) => void;
}>((set, get) => ({
  isLoading: false,
  favorites: [],
  addToFavorite: (id) => {
    const accessToken = localStorage.getItem('accessToken')
    
    axios.post(`http://13.60.49.147:8000/api/favorites/products/add/${id}/`, {}, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(() => {
      get().getAllFavorites();
      toast.success('Товар Успешно Добавлен', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }).catch(() => {
      toast.error('Вы должны зарегестрироваться', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    });
  },
  getAllFavorites: async () => {
    try {
      set({ isLoading: true });
      const response = await axios('http://13.60.49.147:8000/api/favorites/products/list', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.statusText !== 'OK') {
        throw new Error('Failed to get favorites');
      }
      set({ favorites: response.data.results[0].products });
    } catch (error) {
      toast.error('не удалось получить избранные товары', {
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
  },
  removeFavorite: (id) => {
    axios.post(`http://13.60.49.147:8000/api/favorites/products/remove/${id}/`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
      }
    }).then(() => {
      get().getAllFavorites();
      toast.success('Товар Успешно Убран', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }).catch((error) => {
      toast.error('не получилось удалить товар', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })
  }
}))