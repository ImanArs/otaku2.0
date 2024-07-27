import React, { useEffect } from 'react';
import cls from './styles.module.scss';
import { useNews } from '../../components/NewsPage/model';
import { Loading } from '@/shared/ui/loading';
import Link from 'next/link';

const NewsPage = () => {
  const {isLoading, setNews, news} = useNews()
  
  useEffect(() => {
    setNews()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <Loading />

  return (
    <main className={cls.root}>
      <section className={cls.news_wrapper}>
        <h1>Новости</h1>
        {news.length > 0 && news?.map((news, index) => (
          <article className={cls.news_card} key={index}>
            <Link href={`/news/${news.id}`}>
              <div className={cls.card_wrapper}>
                <div className={cls.info}>
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                </div>
                <div className={cls.img}>
                  <img src={news.news_image} alt="" />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
};
export default NewsPage;
