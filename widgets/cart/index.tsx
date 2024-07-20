'use client';
import React, { ReactNode, useEffect, useRef } from 'react';
import cls from './styles.module.scss';
import classNames from 'classnames';
import Checkout from './steps/checkout/Checkout';
import CloseCart from './steps/closeCart/CloseCart';
import { Cart } from './steps/cart';
import { useCart } from '@/hook/useCart';

export const CartWidget = () => {
  const {cartStep, openCart, closeCart, toggleCart, nextStep} = useCart();
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node) && openCart) {
        closeCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openCart, closeCart]);

  const cartSteps: Record<string, ReactNode>= {
    1: <Cart nextStep={nextStep}  />,
    2: <Checkout nextStep={nextStep} />,
    3: <CloseCart closeCart={closeCart} />,
  }
  const scrollToTop = () => {
    cartRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    scrollToTop()
  }, [cartStep])

  return (
    <div
      ref={cartRef}
      className={classNames('',{
        [cls.openCart]: openCart,
      },[cls.cart],)}
      >
      <div className={cls.heading} onClick={toggleCart}>Корзина</div>
      {cartSteps[cartStep]}
    </div>
  );
};
