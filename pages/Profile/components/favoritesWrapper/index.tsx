'use client'

import { useProductcard } from '@/hook/useProductCard';
import React, { useEffect } from 'react'
import { FavoritesItem } from '../FavoritesItem';
import cls from './styles.module.scss'

export const FavoritesWrapper = () => {
  const {getAllFavorites, favorites} = useProductcard();
  useEffect(() => {
    getAllFavorites()
  }, [getAllFavorites])
  return (
    <div className={cls.root}>
      <h2>Избранное:</h2>
      <div className={cls.wrapper}>
        {
          favorites.length > 0 ? (
            favorites.map((fav) => (
              <FavoritesItem key={fav.id} favorite={fav} />
            ))
          ) : (
            <p>У вас нет избранных товаров</p>
          )
        }
      </div>
      <div className={cls.gradient}></div>
    </div>
  )
}
