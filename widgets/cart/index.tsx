'use client';
import React, { ReactNode, useEffect, useRef } from 'react';
import cls from './styles.module.scss';
import classNames from 'classnames';
import Checkout from './steps/checkout/Checkout';
import CloseCart from './steps/closeCart/CloseCart';
import { Cart } from './steps/cart';

export const CartWidget = () => {
  const [openCart, setOpenCart] = React.useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);
  const [currentStep, setCurrentStep] = React.useState(1);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const closeCart = () => {
    setCurrentStep(1)
    setOpenCart(false)
  }

  useEffect(() => {
      console.log(cartRef);
      console.log(123);
  }, [openCart])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setOpenCart(false);
      }
    }
    console.log(1);
    document.addEventListener('click', handleClickOutside)
    return () => {
      // setCurrentStep(1)
      console.log(2);
      
      document.removeEventListener('click', handleClickOutside)
    }
  }, []);
  
  const cartSteps: Record<string, ReactNode>= {
    1: <Cart nextStep={nextStep} />,
    2: <Checkout nextStep={nextStep} />,
    3: <CloseCart closeCart={closeCart} />,
  }

  return (
    <>
      <div
        ref={cartRef}
        className={classNames('',{
            [cls.openCart]: openCart,
          },[cls.cart],)}
        >
        <div className={cls.heading} onClick={() => setOpenCart(!openCart)}>Корзина</div>
        {cartSteps[currentStep]}
      </div>
    </>
  );
};
