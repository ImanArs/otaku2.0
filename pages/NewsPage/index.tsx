import React, { useEffect } from 'react';
import cls from './styles.module.scss';
import { useNews } from './model';
import { Loading } from '@/shared/ui/loading';
import Link from 'next/link';

const NewsPage = () => {
  const {isLoading, setNews, news} = useNews()
  
  useEffect(() => {
    setNews()
  }, [])

  if (isLoading) return <Loading />

  return (
    <main className={cls.root}>
      <section className={cls.news_wrapper}>
        <h1>Новости</h1>
        {news.map((news, index) => (
          <article className={cls.news_card} key={index}>
            <Link href={`/news/${news.id}`}>
              <div className={cls.card_wrapper}>
                <div className={cls.info}>
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                  {/* <p>
                    В OTAKU на вас витает аромат зеленого чая и легкие нотки
                    сакуры. Каждый уголок здесь пропитан духом приключений и
                    творчества. В нашем магазине вы не просто покупатель, а член
                    большой и дружной семьи отаку, где каждый сотрудник готов
                    поделиться своими знаниями и помочь найти именно то, что
                    зажглось в вашем воображении.
                  </p> */}
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
