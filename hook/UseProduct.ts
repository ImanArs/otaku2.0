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
        setProducts(data.results);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    return () => {
    };
  }, [])

  return products;
};

export default useProduct;
