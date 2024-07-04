'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/shared/ui/Button';
import s from './favorite.module.scss';
import Login from '../auth/Login';
import Link from 'next/link';
import axios from 'axios';
import { ProductCard } from '@/shared/ui/ProductCard';
import { Loading } from '@/shared/ui/loading';

const Favorites: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  const [favorite, setFavorite] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = useCallback(async () => {
    const response = await axios('http://13.60.49.147:8000/api/favorites/products/list/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.data;
    setFavorite(data);
    setLoading(false);
    console.log(favorite);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const token = getCookie('access');
    setIsAuthenticated(!!token);

    getData()
  }, [getData]);

  const openLoginModal = () => {
    setShowModal(true);
  };

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  if (loading) {
    return <Loading />
  }

  return (
    <div className={s.main}>
      <div className={s.favorite}>
        <h1>Избранные товары</h1>
      </div>
      {favorite.length === 0 ? (
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
        {favorite[0]?.products.length > 0 && favorite[0]?.products?.map((item: any) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      )}
      {/* // : (
      //   <div className={s.authtext}>
      //     <p onClick={openLoginModal}>
      //       Войдите <span className={s.span}> или </span> зарегистрируйтесь
      //     </p>
      //     <h5>Чтобы добавлять товары в раздел “избранное” необходимо иметь учётную запись</h5>
      //   </div>
      // )} */}

      {showModal && <Login showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default Favorites;
