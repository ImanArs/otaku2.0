'use client';
import React, { useCallback, useEffect } from 'react';
import { Button } from '@/shared/ui/Button';
import s from './favorite.module.scss';
import Link from 'next/link';
import { ProductCard } from '@/shared/ui/ProductCard';
import { Loading } from '@/shared/ui/loading';
import { useProductcard } from '@/hook/useProductCard';

const Favorites: React.FC = () => {
  
  const {getAllFavorites, favorites, isLoading} = useProductcard()
  
  const memoizedGetAllFavorites = useCallback(() => {
    getAllFavorites();
  }, [getAllFavorites]);

  useEffect(() => {
    memoizedGetAllFavorites()
  }, [memoizedGetAllFavorites])

  if (isLoading) {
    return <Loading />
  }
  
  return (
    <div className={s.main}>
      <div className={s.favorite}>
        <h1>Избранные товары</h1>
      </div>
      {favorites.length === 0 ? (
        <div className={s.favoritetext}>
          <p>Здесь пока ничего нет :(</p>
          <span>
            Добавьте товары в “избранное”,
            <br />
            чтобы они отобразились на этой странице
          </span>
          <Link href="/catalog">
            <Button type="red">Каталог</Button>
          </Link>
        </div>
      ) : (
        <div className={s.productsWrapper}>
        {favorites?.map((item: any) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      )}
    </div>
  );
};

export default Favorites;
