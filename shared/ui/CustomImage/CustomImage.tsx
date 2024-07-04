import React from 'react'
import cls from './styles.module.scss'
import classNames from 'classnames'
import { motion } from "framer-motion";

interface Props {
  src: string
  alt: string
  children?: React.ReactNode
  color: 'black' | 'white'
  className: string
}

export const CustomImage = (props: Props) => {
  const { src, alt, children, color, className } = props
  
  return (
    <div className={classNames([cls.img, {
      [cls.black]: color === 'black',
      [cls.white]: color === 'white',
    }, [className]])}>
      <img src={src} alt={alt} />
        { children && (
      <div className={cls.info}>
        lol
        {children}
      </div>
      )}
    </div>
  )
}
