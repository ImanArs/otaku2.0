// import React from 'react'
import classNames from "classnames";
import { ReactNode } from "react";
import cls from './styles.module.scss'

interface Props {
  children: ReactNode;
  type?: 'red' | 'black'
  className?: string
}

export const Button = (props: Props) => {
  const { children, type = 'red', className } = props
  return (
    <button className={classNames('', {
      [cls.button__red]: type === 'red',
      [cls.button__black]: type === 'black',
    },[cls.button, className])}>
      {children}
    </button>
  )
}
