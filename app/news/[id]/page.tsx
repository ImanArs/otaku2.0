"use client";
import { useNews } from "@/components/NewsPage/model";
import { Loading } from "@/shared/ui/loading";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import cls from "./styles.module.scss";
import { Button } from "@/shared/ui/Button";
import TikTokIcon from "@/public/assets/icons/about_tiktock_icon.svg";
import InstaIcon from "@/public/assets/icons/about_insta_icon.svg";
import TelegramIcon from "@/public/assets/icons/about_teleg_icon.svg";
import WhatsappIcon from "@/public/assets/icons/about_whatsapp_icon.svg";
import Link from "next/link";

const NewsDetails = () => {
  const params = useParams();
  const { getNewsById, setNews, isLoading, singleNews, news } = useNews();
  useEffect(() => {
    getNewsById(Number(params?.id));
    setNews()
  }, []);

  const moveBack = () => {
    window.history.back();
  };

  if (isLoading) return <Loading />;

  return (
    <div className={cls.root}>
      <button className={cls.moveBack} onClick={moveBack}>
        вернуться к новостям
      </button>
      <div className={cls.news_wrapper}>
        <img src={singleNews?.news_image} alt="" />
        <div className={cls.info}>
          <h1>{singleNews?.title}</h1>
          <p>{singleNews?.description}</p>
          <div className={cls.bottom}>
            <Button variant="black">Поделиться</Button>
            <div className={cls.socialIcons}>
              <TikTokIcon />
              <InstaIcon />
              <TelegramIcon />
              <WhatsappIcon />
            </div>
          </div>
        </div>
      </div>
      <p>{singleNews?.description}</p>
      <section className={cls.other_news}>
        <h2>Другие новости</h2>
        {news.length > 0 && news?.map((news, index) => (
          <article className={cls.news_card} key={index}>
            <Link href={`/news/${news.id}`}>
              <div className={cls.card_wrapper}>
                <img src={news.news_image} alt="" />
                <div className={cls.info}>
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};
export default NewsDetails;
