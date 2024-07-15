import React from 'react'
import cls from './styles.module.scss'

export const OurMap = () => {
  return (
    <div className={cls.root}>
      <iframe className='yMap' src="https://yandex.ru/map-widget/v1/?um=constructor%3A04f98b4a13267354eab2d205950c7be0cea9c3adceb13fa43d148e13e307b2d9&amp;source=constructor" width="100%" height="500" frameBorder="0"></iframe>
      <div className={cls.map_info}>
        <h2>Мы открыты!</h2>
        <p>Г. Бишкек, <br /> цум 1 этаж, L-40 бутик</p>
        <span>ПН-СБ с 10.00 до 22.00</span>
      </div>
    </div>
  )
}
