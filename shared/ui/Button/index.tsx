import React, { ButtonHTMLAttributes } from 'react'
import classNames from "classnames";
import { ReactNode } from "react";
import cls from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'red' | 'black'
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { children, variant = 'red', className, ...rest } = props
  return (
    <button
    {...rest} 
    className={classNames('', {
      [cls.button__red]: variant === 'red',
      [cls.button__black]: variant === 'black',
    },[cls.button, className])}>
      {children}
    </button>
  )
}
