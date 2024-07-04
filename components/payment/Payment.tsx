import React from 'react';
import cls from './style.module.scss';

const Payment = () => {
  return (
    <main className={cls.root}>
      <div className={cls.payment_wrapper}>
        <h1>возврат и обмен товара </h1>
        <div className={cls.rules}>
          <ul>
            <li>
              Возврат и обмен товара возможен только если товар находится в том же состоянии,
              как когда вы его продали. 
            </li>
            <li>
              Если товар был уже использован и поврежден клиентом, то возврат или обмен товара
              невозможен. 
            </li>
            <li>
              Товар подлежит возврату и обмену в течение 14 календарных дней по законодательству
              Кыргызской Республики. По истечению двух недель возврат или обмен товара уже
              невозможен.
            </li>
            <li>
              Также возврат и обмен товара возможен только при наличии товарного и ККМ чека.
              Это важно как для оформления возврата, так и для магазина, т.к. некоторые могут
              принести и пытаться сдать нам товары другого магазина. 
            </li>
            <li>Обмен товара возможен только на ту сумму который был куплен предыдущий товар.</li>
            <li>
              Если клиент пришел и хочет сделать возврат или обменять товар, товар
              целый, есть чеки о покупке и не прошло более 2х недель, мы без вопросов сможем вам
              возвратить или обменять.
            </li>
          </ul>
        </div>
      </div>
      <div className={cls.payment_by_card}>
        <h2 className={cls.h1}>ОПЛАТА</h2>
        <div className={cls.payment_cards}>
          <h2 className={cls.h2}>
            У покупателя есть возможность оплатить наличным и безналичным способом. Наличными
            принимаются только в сомах.
          </h2>
          <span>Виды безналичных оплат:</span>
          <ul>
            <li>Visa</li>
            <li>MasterCard</li>
            <li>Элкарт</li>
            <li>EIQR: оплата в Кыргызстане по QR коду (Все банки, без комиссии)</li>
          </ul>
          <div className={cls.imagesCard}>
            <img src="/assets/images/masterCard.png" alt="" />
            <img src="/assets/images/visa.png" alt="" />
            <img src="/assets/images/alcart.png" alt="" />
          </div>
        </div>
      </div>
      <div className={cls.instructions}>
        <h2>Как заказать</h2>
        <ul>
          <li>Добавьте понравившиеся товары в корзину и оформите заказ;</li>
          <li>Наши менеджеры свяжутся с Вами через 5-10 минут, для подтверждения доставки;</li>
          <li>Доставляем в любую точку Кыргызской Республики.</li>
        </ul>
        <span>Остались вопросы? Мы готовы ответить на них по будням с 9:00 до 18:00</span>
        <div className={cls.buttons}>
          <button>
            <img src="/assets/icons/tiktok_icon.svg" alt="asd  " />
            TIKTOK
          </button>
          <button>
            <img src="/assets/icons/whatsApp_icon.svg" alt="" />
            WHATS
          </button>
          <button>
            <img src="/assets/icons/instagram_icon.svg" alt="" />
            INSTAG
          </button>
          <button>
            <img src="/assets/icons/telegram_icon.svg" alt="" />
            TELEG
          </button>
        </div>
      </div>
    </main>
  );
};

export default Payment;
