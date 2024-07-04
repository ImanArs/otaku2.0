import React from 'react';
import cls from './style.module.scss';
import { Card } from '../../ui/Card';
import CloseCart from '../closeCart/CloseCart';

const mockData = [
  { id: 1, title: 'lol1', price: 150, description: 'lsadsdassada' },
  { id: 2, title: 'lol2', price: 150, description: 'lsadsdassada' },
  { id: 3, title: 'lol3', price: 150, description: 'lsadsdassada' },
  { id: 4, title: 'lol4', price: 150, description: 'lsadsdassada' },
];

interface Props {
  nextStep: () => void;
}

const Checkout = (props: Props) => {
  const {nextStep} = props
  const handleInnerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={cls.cart}>
        <div className={cls.cartContent} onClick={handleInnerClick}>
          <div>
            <div className={cls.cartItems}>
              {mockData.map((item, i) => (
                <Card key={i} product={item} />
              ))}
            </div>
            <div className={cls.cartTotal}>
              <div className={cls.delivery}>
                <p>Доставка от 1 до 3 дней</p>
                <p>14 дней на возврат</p>
              </div>
              <div className={cls.promotional}>
                <input type="text" placeholder="ПРОМОКОД" />
                <div className={cls.border_bottom}></div>
                <div className={cls.total_cost}>
                  <div className={cls.text}>
                    <h3>общая стоимость</h3>
                    <h3>Скидка</h3>
                    <h3>Промокод</h3>
                    <h3>итог:</h3>
                  </div>
                  <div className={cls.price}>
                    <h3>2000,50</h3>
                    <h3>201,25</h3>
                    <h3>00,00</h3>
                    <h3>1799,25</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cls.your_data}>
            <div className={cls.inputs}>
              <h2>ваши данные</h2>
              <input type="text" placeholder="ФИО..." />
              <input type="text" placeholder="Город..." />
              <input type="text" placeholder="Улица, дом..." />
              <input type="text" placeholder="Номер телефона..." />
            </div>
            <div className={cls.checkoutBtn}>
              <div className={cls.img}></div>
              <button onClick={() => nextStep()}>ОФОРМИТЬ ЗАКАЗ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
