'use client';
import React from 'react';
import cls from './style.module.scss';

interface Props {
  closeCart: () => void
}

const CloseCart = (props: Props) => {
  const {closeCart} = props
  return (
    <div className={cls.cart}>
      <div className={cls.cartContent}>
        <div className={cls.cartTotal}>
          <div>
            <img src="/assets/images/v.png" alt="" />
            <h2>спасибо!</h2>
          </div>
          <p>Наш менеджер свяжется с Вами в течение 10-15 минут для подтверждения заказа</p>
          <button onClick={() => closeCart()}>Закрыть корзину</button>
        </div>
      </div>
    </div>
  );
};

export default CloseCart;
