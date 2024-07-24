import React from 'react';
import X from '@/public/assets/icons/x.svg';
import cls from './styles.module.scss';
import { BasketProduct, useBasket } from '@/hook/useBasket';

interface Props {
  product: BasketProduct;
}

const baseURL = "http://13.60.49.147:8000/";

export const Card = (props: Props) => {
  const { product } = props;
  const {getBasket, addToBasket, removeFromBasket, basket} = useBasket()

  
  return (
    <div className={cls.cartCard}>
      <div className={cls.img}>
        {/* <img src={`http://13.60.49.147:8000/api/${product.images[0].image}`} alt="no image" /> */}
        <img src={`${baseURL}${product.images[0].image}`} alt="no image" />
      </div>
      <div className={cls.info}>
        <div className={cls.cross}>
          <h3>{product.title}</h3>
          <button onClick={() => removeFromBasket(String(product.id))}>
            <X />
          </button>
        </div>
        <h3>{product.price} СОМ</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};
