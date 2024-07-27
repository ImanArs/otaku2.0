import axios from "axios";
import { create } from "zustand";

export interface INews {
  id: number;
  title: string;
  description: string;
  news_image: string;
  created_at: string;
  updated_at: string;
}

export const useNews = create<{
  news: INews[];
  singleNews: INews | null;
  isLoading: boolean;
  setNews: () => void;
  getNewsById: (id: number | string) => void;
}>((set, get) => ({
  news: [],
  singleNews: null,
  isLoading: true,
  setNews: async () => {
    try {
      const response = await axios('http://13.60.49.147:8000/api/news/list/')
      if (response?.statusText !== 'OK') {
        throw new Error('Failed to fetch news');
      }
      const data = response.data;
      set({ news: data, isLoading: false });
    } catch (error) {
      console.error('Error fetching products:', error);
      set({ isLoading: false }); 
    }
  },
  getNewsById: async (id: number | string) => {
    try {
      const response = await axios(`http://13.60.49.147:8000/api/news/list/`)
      if (response?.statusText !== 'OK') {
        throw new Error('Failed to fetch news');
      }
      const data = response.data;
      const findedNews = data.find((news: INews) => news.id === id);
      set({ singleNews: findedNews, isLoading: false });
    } catch (error) {
      console.error('Error fetching products:', error);
      set({ isLoading: false }); 
    }
  }
}))