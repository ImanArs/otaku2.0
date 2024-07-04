'use client';
import { useEffect, useRef, useState } from 'react';
import s from './header.module.scss';
import Link from 'next/link';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { Menu } from './ui/menuBlock';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  useEffect(() => {
    const token = getCookie('access');
    setIsAuthenticated(!!token);
  }, []);


  return (
    <>
    <header className={s.header}>
      <img className={s.header_images} src="/assets/images/Rectangle 43.svg" alt="" />

      <div className={s.header_blocks}>
        <Link href="/">
          <img className={s.logo} src="/assets/images/logo.svg" alt="logo" />
        </Link>
        {/* {isAuthenticated ? null : (
          <div className={s.header_blocks_registr}>
            <span onClick={() => setShowLoginModal(true)}>Войти</span>/
            <span onClick={() => setShowRegisterModal(true)}>Зарегистрироваться</span>
          </div>
        )} */}
          <div className={s.header_blocks_registr}>
            <span onClick={() => setShowLoginModal(true)}>Войти</span>/
            <span onClick={() => setShowRegisterModal(true)}>Зарегистрироваться</span>
          </div>
        <div className={s.header_blocks_text} onClick={() => setOpenMenu(!openMenu)}>
          <Menu />
        </div>
      <div className={s.absolute}>
      {showLoginModal && <Login showModal={showLoginModal} setShowModal={setShowLoginModal} />}
      {showRegisterModal && <Register showModal={showRegisterModal} setShowModal={setShowRegisterModal} />}
      </div>
      </div>
    </header>
    </>
  );
}
