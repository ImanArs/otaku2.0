'use client';
import React, { useCallback, useEffect } from 'react';
import { Button } from '@/shared/ui/Button';
import s from './favorite.module.scss';
import Link from 'next/link';
import ProductCard from '@/shared/ui/ProductCard';
import { Loading } from '@/shared/ui/loading';
import { useProductcard } from '@/hook/useProductCard';
import { FavoritesCard } from '@/shared/ui/FavoritesCard';

const Favorites: React.FC = () => {
  const {getAllFavorites, favorites, isLoading} = useProductcard()
  

  useEffect(() => {
    getAllFavorites()
  }, [])

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
            <Button variant="red">Каталог</Button>
          </Link>
        </div>
      ) : (
        <div className={s.productsWrapper}>
        {favorites?.map((item: any) => (
          <FavoritesCard key={item.id} product={item} />
        ))}
      </div>
      )}
    </div>
  );
};

export default Favorites;
