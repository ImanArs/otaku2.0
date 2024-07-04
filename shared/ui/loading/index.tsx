import React from 'react'
import cls from './styles.module.scss'

export const Loading = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.loader}></div>
    </div>
  )
}