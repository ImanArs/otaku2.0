import React from 'react'
import cls from './styles.module.scss'

interface Props {
  favorite: any;
}

const baseURL = "http://13.60.49.147:8000/";
export const FavoritesItem = (props: Props) => {
  const {favorite} = props
  
  return (
    <div className={cls.root}>
      <img src={`${baseURL}${favorite.images[0].image}`} alt="" />
      <div className={cls.info}>
        <h3>{favorite.title}</h3>
        <h3>{favorite.price} СОМ</h3>
        <p>{favorite.description}</p>
      </div>
    </div>
  )
}
