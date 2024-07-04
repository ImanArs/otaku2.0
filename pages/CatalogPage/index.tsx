"use client"
import React, { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import cls from "./styles.module.scss";
import useProduct from "@/hook/UseProduct";
import Sidebar from "./ui/Sidebar";
import { Search } from "@/shared/ui/Search";
import { ProductCard } from "@/shared/ui/ProductCard";
import { useCatalog } from "./model";
import { Loading } from "@/shared/ui/loading";

interface Product {
  id: number;
  images: { id: number; image: string }[] | null;
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

const CatalogPage: React.FC = () => {
  const {products, setProducts, isLoading,checkedCategories, sliderValues} = useCatalog()

  useEffect(() => {
    setProducts()
  }, [setProducts]);
  
  const filteredProducts = useMemo(() => {
    let result = products;
    if (checkedCategories.length > 0) {
      result = result.filter((prod) => checkedCategories.some((categ) => categ.codename === prod.category.codename));
    }
    if (sliderValues.length === 2) {
      result = result.filter((prod) => prod.price >= sliderValues[0] && prod.price <= sliderValues[1]);
    }
    return result;
  }, [products, checkedCategories, sliderValues]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
    <main className={cls.catalogPage}>
      <div className={cls.sidebarBlock}>
      <Sidebar />
      </div>
      <div className={cls.catalogContent}>
        <Search reversed className={cls.search} searchArr={products} />
        <div className={cls.cards}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {
          filteredProducts.length === 0 && (
            <div className={cls.noProducts}>
              <h2>Ничего не найдено</h2>
            </div>
          )
        }
      </div>
    </main>
    </Suspense>
  );
};
export default CatalogPage;