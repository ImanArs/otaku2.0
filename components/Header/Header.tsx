'use client'
import { useEffect, useState } from "react";
import s from "./header.module.scss";
import Link from "next/link";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { Menu } from "./ui/menuBlock";
import ProfileIcon from '@/public/assets/icons/profile_icon.svg'
import { useCheckUserAuth } from "@/hook/useCheckUserAuth";
import { useUpdateUser } from "@/hook/useUpdateUser";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const { isAuth } = useCheckUserAuth();
  const {updateUserToken} = useUpdateUser()
  useEffect(() => {
    setHasMounted(true);
    updateUserToken()
  }, []);

  const renderAuthDependentContent = () => {
    if (!hasMounted) {
      return null;
    }

    if (isAuth) {
      return (
        <div className={s.headerProfile}>
          <ProfileIcon />
          <Link href='/profile'>Личный кабинет</Link>
        </div>
      );
    } else {
      return (
        <div className={s.header_blocks_registr}>
          <span onClick={() => setShowLoginModal(true)}>Войти</span>
          <span>/</span>
          <span onClick={() => setShowRegisterModal(true)}>
            Зарегистрироваться
          </span>
        </div>
      );
    }
  };

  return (
    <>
      <header className={s.header}>
        <img
          className={s.header_images}
          src="/assets/images/Rectangle 43.svg"
          alt=""
        />

        <div className={s.header_blocks}>
          <Link href="/">
            <img className={s.logo} src="/assets/images/logo.svg" alt="logo" />
          </Link>
          {renderAuthDependentContent()}
          <div
            className={s.header_blocks_text}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Menu />
          </div>
          <div className={s.absolute}>
            {showLoginModal && (
              <Login
                showModal={showLoginModal}
                setShowModal={setShowLoginModal}
              />
            )}
            {showRegisterModal && (
              <Register
                showModal={showRegisterModal}
                setShowModal={setShowRegisterModal}
              />
            )}
          </div>
        </div>
      </header>
    </>
  );
}