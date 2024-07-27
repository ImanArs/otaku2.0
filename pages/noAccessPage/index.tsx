import React, { useState } from "react";
import cls from "./styles.module.scss";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import classNames from "classnames";

export const NoAccessPage = ({noRedText}: {noRedText: boolean}) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (
    <div className={cls.root}>
      <h1 className={classNames(cls.red_title, { [cls.white_text]: noRedText })}>
        <button onClick={() => setShowLoginModal(!showLoginModal)}>Войдите</button>
        {' '}
        или 
        {' '}
        <button onClick={() => setShowRegisterModal(!showRegisterModal)}>зарегестрируйтесь</button>
      </h1>
      <p className={classNames(cls.red_title, { [cls.white_text]: noRedText })}>Чтобы посетить страницу необходимо иметь учётную запись.</p>
      {showLoginModal && (
        <Login showModal={showLoginModal} setShowModal={setShowLoginModal} />
      )}
      {showRegisterModal && (
        <Register
          showModal={showRegisterModal}
          setShowModal={setShowRegisterModal}
        />
      )}
    </div>
  );
};
