import { create } from 'zustand';

interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
  codename: string;
}

interface SubCategory {
  id: number;
  name: string;
  codename: string;
}

export const useCatalog = create<{
  sliderValues: number[];
  checkedCategories: (Category | SubCategory)[];
  products: any[];
  isLoading: boolean;
  setSliderValues: (values: number[]) => void;
  handleCheckboxChange: (obj: Category | SubCategory) => void;
  setCheckedCategories: (categories: (Category | SubCategory)[]) => void;
  setProducts: () => void;
  // filteredProducts: () => void
}>((set, get) => ({
  sliderValues: [0, 10000],
  checkedCategories: [],
  products: [],
  isLoading: true, // Add isLoading state
  setSliderValues: (values) => set(() => ({ sliderValues: values })),
  handleCheckboxChange: (obj) =>
    set((state) =>
      state.checkedCategories.includes(obj)
        ? { checkedCategories: state.checkedCategories.filter((item) => item !== obj) }
        : { checkedCategories: [...state.checkedCategories, obj] },
    ),
  setCheckedCategories: (categories) => set(() => ({ checkedCategories: categories })),
  setProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch('http://13.60.49.147:8000/api/products/list/');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();

      set({ products: data.results, isLoading: false });
    } catch (error) {
      console.error('Error fetching products:', error);
      set({ isLoading: false });
    }
  },
}));
