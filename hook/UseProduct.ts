"use client"
import { useEffect, useState } from 'react';


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

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://13.60.49.147:8000/api/products/list/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log(data);
        
        // console.log(data.results);
        setProducts(data.results);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    // Возвращаем функцию очистки для отмены запроса, если компонент размонтируется
    return () => {
      // Логика для отмены запроса, если необходимо
    };
  }, [])

  return products;
};

export default useProduct;
