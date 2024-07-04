'use client';
import React from 'react';
import cls from './styles.module.scss';
import HeartIcons from '@/public/assets/icons/heart_white.svg';
import classNames from 'classnames';
import { Label } from '../Label';
import Link from 'next/link';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: { codename: string };
  subcategory?: { codename: string };
}

export const Favoritecards = ({ product }: { product: Product }) => {
  const isFavourite = Math.random() > 0.5;
  const quantity = false;
  const sale = false;

  const categoryCodename = product.category.codename;
  const productName = product.title;

  const subcategoryCodename = product.subcategory ? product.subcategory.codename : productName;

  const favoritesList = async () => {
    try {
      const response = await axios.get('http://13.60.49.147:8000/favorites/products/list/', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cls.card}>
      <Link href={`/detail/${categoryCodename}/${subcategoryCodename}/${product.id}`}>
        {sale && (
          <Label type="red" className={cls.card_label}>
            скидка -15%
          </Label>
        )}
        {quantity && (
          <Label type="black" className={cls.card_label}>
            нет в наличии
          </Label>
        )}
        <div className={cls.card_img}>
          <button
            className={classNames(
              '',
              {
                [cls.active_heart]: isFavourite,
              },
              [cls.heart],
            )}>
            <HeartIcons />
          </button>
          <div className={cls.triangle_wrapper}>
            <div className={cls.triangle} />
            <div className={cls.triangle} />
            <div className={cls.triangle} />
          </div>
          <div className={cls.card_info}>
            <div className={cls.card_info_wrapper}>
              <h3>{product.title}</h3>
              <h4>{product.price} сом</h4>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className={cls.card_actions}>
        <button onClick={() => console.log('купить')}>купить</button>
        <button onClick={() => console.log('смотреть')}>
          {' '}
          <Link href={`/detail/${categoryCodename}/${subcategoryCodename}/${product.id}`}>
            Смотреть
          </Link>
        </button>
      </div>
    </div>
  );
};
