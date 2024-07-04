"use client"
import { useEffect, useState } from 'react';

const useProductId = (product_id: any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://13.60.49.147:8000/api/products/get/${product_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // console.log(data,3827874762736842);
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
  }, [product_id]);

  return products;
};

export default useProductId;
