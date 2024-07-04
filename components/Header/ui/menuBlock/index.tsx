'use client'
import React, { useEffect, useRef, useState } from 'react'
import cls from './styles.module.scss'
import { HeaderMenu } from '../headerMenu'

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <div className={cls.root} ref={menuRef}>
      <div className={cls.menuWrapper} onClick={() => setOpenMenu(!openMenu)}>
        <h3>MENU</h3>
        <div className={cls.lini}>
          <img src="/assets/images/lini-menu.svg" alt="logo" />
          <img src="/assets/images/lini-menu.svg" alt="logo" />
          <img src="/assets/images/lini-menu.svg" alt="logo" />
        </div>
      </div>
      {openMenu && (
        <div className={cls.headerMenu}>
          <HeaderMenu />
        </div>
      )}
    </div>
  )
}
