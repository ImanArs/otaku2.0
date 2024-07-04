import React from 'react';
import X from '@/public/assets/icons/x.svg';
import cls from './styles.module.scss';

interface Props {
  product: any;
}

export const Card = (props: Props) => {
  const { product } = props;
  return (
    <div className={cls.cartCard}>
      <div className={cls.img}></div>
      <div className={cls.info}>
        <div className={cls.cross}>
          <h3>Значок сАСКЕ</h3>
          <X />
        </div>
        <h3>55 46.75 СОМ</h3>
        <p>Литой значок на пине</p>
      </div>
    </div>
  );
};
