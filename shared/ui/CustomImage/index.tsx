import classNames from 'classnames'
import React from 'react'
import cls from './styles.module.scss'

interface Props {
  src: string
  className: string
  background: 'black' | 'white'
  needInfo: boolean
  title: string
  description: string
}

export const CustomImage = (props: Partial<Props>) => {
  const { src, className, background, needInfo, title, description } = props
  return (
    <div className={classNames(cls.img, {
      [cls.black]: background === 'black',
      [cls.white]: background === 'white',
    }, [className])}>
      <img src={src} alt="" />
      {
        needInfo && (
          <div className={cls.info}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        )
      }
    </div>
  )
}
