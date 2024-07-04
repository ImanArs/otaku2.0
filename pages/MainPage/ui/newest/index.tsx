'use client';
import React from 'react';
import cls from './styles.module.scss';

import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { CustomImage } from '@/shared/ui/CustomImage/CustomImage';

const MainNewest = () => {
  return (
    <div className={cls.newest}>
      <div className={cls.newest_wrapper}>
        <div className={cls.left}>
          <div className={cls.img}>
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="mySwiperBlack sm">
              <SwiperSlide>
                <CustomImage className={cls.image} color='white' src="/assets/images/tokyoGhulOtaku.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <CustomImage className={cls.image} color='white' src="/assets/images/tokyoGhulOtaku.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={cls.img}>
          
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="mySwiperBlack sm">
              <SwiperSlide>
                <CustomImage className={cls.image} color='white' src="/assets/images/tokyoGhulOtaku.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <CustomImage className={cls.image} color='white' src="/assets/images/tokyoGhulOtaku.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <CustomImage className={cls.image} color='white' src="/assets/images/tokyoGhulOtaku.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={cls.right}>
          <div className={cls.img}>
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="mySwiperBlack">
              <SwiperSlide>
                <CustomImage className={cls.image} color='white' src="/assets/images/tokyoGhulOtaku.png" alt="">
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, officia!</p>
                </CustomImage>
              </SwiperSlide>
              <SwiperSlide>
                <CustomImage className={cls.image} color='white' src="/assets/images/tokyoGhulOtaku.png" alt="">
                  <div>
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, officia!</p>
                  </div>
                </CustomImage>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainNewest;
