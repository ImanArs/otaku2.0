'use client'
import React from 'react'
import cls from './styles.module.scss'
import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  type?: 'red' | 'black'
  className?: string
}

export const Label = (props: Props) => {
  const {children, type, className} = props
  if (!children) return null; 
  return (
    <div
    className={classNames('', {
      [cls.label__red]: type === 'red',
      [cls.label__black]: type === 'black', 
    },[cls.label, className])}>
      {children}
    </div>
  )
}
