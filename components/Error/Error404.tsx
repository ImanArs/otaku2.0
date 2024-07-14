import React, { useEffect } from "react";
import s from "./error.module.scss";
import OtakuError from "@/public/assets/icons/otaku2.svg";
import OtakuError404 from "@/public/assets/icons/error404.svg";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";

function Error404() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.location.href = "/";
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className={s.error}>
      <OtakuError />
      <div className={s.error_one}>
        <OtakuError404 />
        <OtakuError404 />
        <OtakuError404 />
        <OtakuError404 />
        <OtakuError404 />
      </div>
      <Button type="red">
        <Link href="/">Вернуться на главную</Link>
      </Button>
      <p>Похоже, Вы попали на несуществующую страницу.</p>
    </div>
  );
}

export default Error404;
