'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import ProductCard from '@/shared/ui/ProductCard';
import cls from './styles.module.scss';
import useProduct from '@/hook/UseProduct';
import { Search } from '@/shared/ui/Search';
import { SearchMain } from '@/components/Main/components/SearchMain';

const MainBestSellers = () => {
  const products = useProduct();

  return (
    <div className={cls.bestsellers}>
      <div className={cls.top} />
      <SearchMain searchArr={products} />
      <div className={cls.bestsellers_wrapper}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className={cls.button_wrap}>
        <Button className={cls.bestsellers_button} variant="black">
          Больше
        </Button>
      </div>
    </div>
  );
};
export default MainBestSellers;
