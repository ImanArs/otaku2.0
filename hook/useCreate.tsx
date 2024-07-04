import React, { useState } from 'react';

interface IProductForm {
  id: number;
  images: string[] | null;
  similar_products: string | null;
  fields_product: string | null;
  category: {
    id: number;
    name: string;
    codename: string;
    is_active: boolean;
  };
  sub_category: {
    id: number;
    name: string;
    codename: string;
    is_active: boolean;
  } | null;
  title: string;
  description: string;
  price: number;
  views: number;
}

const useCreate = (): [IProductForm[], (product: IProductForm) => Promise<void>] => {
  const [products, setProducts] = useState<IProductForm[]>([]);

  const createProduct = async (product: IProductForm) => {
    try {
      const response = await fetch('http://13.60.49.147:8000/api/products/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      setProducts([...products, product]);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return [products, createProduct];
};

export default useCreate;
