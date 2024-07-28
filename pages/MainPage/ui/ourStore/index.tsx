'use client';

import React from 'react';

import cls from './styles.module.scss';
import { Button } from '@/shared/ui/Button';

import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { MapMain } from '@/components/Main/components/MapMain';
import Link from 'next/link';
import { OurMap } from './components/OurMap';

const OurStore = () => {
  return (
    <div className={cls.ourStore}>
      <div className={cls.ourStore__header}>
        <div className={cls.head} />
          <OurMap />
        <div className={cls.bottom} />
      </div>
      <div className={cls.ourStore__footer}>
        <div className={cls.img}>
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="mySwiper">
            <SwiperSlide>
              <img
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={cls.info}>
          <h2>
            OTAKU – ваш личный портал в мир японской культуры, где каждый шаг открывает новую
            страницу любимой манги или аниме.
          </h2>
          <p>
            В OTAKU на вас витает аромат зеленого чая и легкие нотки сакуры. Каждый уголок здесь
            пропитан духом приключений и творчества. В нашем магазине вы не просто покупатель, а
            член большой и дружной семьи отаку, где каждый сотрудник готов поделиться своими
            знаниями и помочь найти именно то, что зажглось в вашем воображении.
          </p>
          <div className={cls.actions}>
            <Link href='/catalog'>
              <Button variant="red">Каталог</Button>
            </Link>
            <Link href='#footer'>
              <Button variant="black">контакты</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStore;
