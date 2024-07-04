'use client';
import React, { useState } from 'react';
import cls from './style.module.scss';
import useCreate from '@/hook/useCreate';
import useProduct from '@/hook/UseProduct';

interface IProductForm {
  id: number;
  images: string | null;
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

const AdminPanel = () => {
  const [products] = useCreate();
  const [formData, setFormData] = useState(products);

  return <div className={cls.adminPanel}></div>;
};

export default AdminPanel;
