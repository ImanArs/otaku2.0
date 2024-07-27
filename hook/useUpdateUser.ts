import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";

export const useUpdateUser = create<{
  accessToken: string
  refreshToken: string
  updateUserToken: () => void
}>((_, get) => ({
  accessToken: typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : '',
  refreshToken: typeof window !== 'undefined' ? localStorage.getItem('refreshToken') || '' : '',
  updateUserToken: async() => {
    try {
      const response = await axios.post('http://13.60.49.147:8000/api/users/refresh_token/', {
        refresh: get().refreshToken
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 200) {
        const { access, refresh } = response.data;
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
        toast.success('Вы успешно вошли в аккаунт!');
      } else {
        throw new Error('Failed to update token');
      }
    } catch (error) {
      toast.error('Не удалось войти в аккаунт');
    }
  }
}))
