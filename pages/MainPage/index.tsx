import Pagesmain from "@/components/Main/Pagesmain";
import Twomain from "@/components/Main/twomain";
import React from "react";
import MainBestSellers from "./ui/bestsellers";
import OurStore from "./ui/ourStore";
import cls from "./styles.module.scss";
import MainNewest from "./ui/newest";

const MainPage = () => {
  return (
    <main className={cls.page_content}>
      <Pagesmain />
      <Twomain />
      <MainNewest />
      <MainBestSellers />
      <OurStore />
    </main>
  );
};
export default MainPage;
