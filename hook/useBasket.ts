import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";


export interface BasketProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  views: number;
  quantity: number;
  similar_products: any[];
  sub_category: any;
  images: {
    id: number;
    image: string;
    product: number;
  }[]
  category: {
    id: number;
    name: string;
    codename: string;
    is_active: boolean;
  }
}

export const useBasket = create<{
  isLoading: boolean
  basket: BasketProduct[]
  addToBasket: (id: string) => void;
  getBasket: () => void;
  removeFromBasket: (id: string) => void;
  clearBasket: () => void;
}>((set, get) => ({
  isLoading: true,
  basket: [],
  addToBasket: async (productId) => {
    const accessToken = localStorage.getItem('accessToken')
    try {
      const response = await axios.post(`http://13.60.49.147:8000/api/baskets/products/add/${productId}/`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      if (response.status !== 201) {
        throw new Error('Failed to add product to basket')
      }
      toast.success('Товар добавлен в корзину', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }); 
    } catch (error) {
      console.error(error)  
      toast.error('Не удалось добавить в корзину', {
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
      get().getBasket()
      set({ isLoading: false })
    }
  },
  getBasket: async () => {
    const accessToken = localStorage.getItem('accessToken')
    try {
      const response = await axios('http://13.60.49.147:8000/api/baskets/products/list/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.statusText !== 'OK') {
        throw new Error('Failed to get favorites');
      }
      set({ basket: response.data.results[0].products });
    } catch (error) {
      toast.error('не удалось получить товары из корзины', {
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
      set({ isLoading: false })
    }
  },
  removeFromBasket: async (productId) => {
    const accessToken = localStorage.getItem('accessToken')
    try {
      const response = await axios.post(`http://13.60.49.147:8000/api/baskets/products/remove/${productId}/`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      if (response.status === 201) {
        toast.success('Товар удален из корзины', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }); 
      }
        get().getBasket()
    } catch (error) {
      console.error('Failed to add product to basket:', error)  
      toast.error('Не удалось удалить из корзину', {
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
      get().getBasket()
      set({ isLoading: false })
    }
  },
  clearBasket: () => {
    set({ basket: [] });
  }
}))