import React from 'react';
import cls from './styles.module.scss';
import Link from 'next/link';
import InstagramIcon from '@/public/assets/icons/instagram_icon.svg';
import TelegramIcon from '@/public/assets/icons/telegram_icon.svg';
import TikTokIcon from '@/public/assets/icons/tiktok_icon.svg';
import WhatsappIcon from '@/public/assets/icons/whatsApp_icon.svg';
import Logo from '@/public/assets/images/logo.svg';
import SocialBg from '@/public/assets/images/footer_social_links_bg.svg';

const secondLinks = [
  { name: 'каталог', link: '#' },
  { name: 'Контакты', link: '#footer' },
  { name: 'МАГАЗИНЫ', link: '#' },
  { name: 'Доставка', link: '#' },
  { name: 'вОЗВРАТ', link: '#' },
  { name: 'О нас', link: '/about' },
  { name: 'Q&A', link: '#' },
];

const firstLinks = [
  { name: 'Новинки', link: '#' },
  { name: 'Новости из мира Аниме', link: '#' },
  { name: 'отзывы наших клиентов', link: '#' },
];
const socialMediaLinks = [
  { name: 'Instagram', link: '#', icon: <InstagramIcon /> },
  { name: 'telegram', link: '#', icon: <TelegramIcon /> },
  { name: 'Tik-tok', link: '#', icon: <TikTokIcon /> },
  { name: 'whatsapp', link: '#', icon: <WhatsappIcon /> },
];

export const Footer = () => {
  return (
    <footer className={cls.footer} id='footer'>
      <div className={cls.footer_wrapper}>
        <div className={cls.top} />
        <div className={cls.first}>
          <div className={cls.logo}>
            <Logo />
          </div>
          <ul className={cls.info}>
            {firstLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className={cls.cardOperations}>
            <div className={cls.images}>
              <img src="/assets/images/visa.png" alt="" />
              <img className={cls.masterCard} src="/assets/images/masterCard.png" alt="" />
            </div>
            {/* <div className={cls.spans}>
              <span>Политика конфидециальности</span>
              <span>Договор оферты</span>
            </div> */}
            <span className={cls.span2}>© 2024 / “OTAKU” / Все права защищены.</span>
          </div>
        </div>
        <div className={cls.second}>
          <ul className={cls.info}>
            {secondLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={cls.third}>
          <ul className={cls.info}>
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <div className={cls.socialBg}>
                  <SocialBg />
                </div>
                <Link href={link.link}>
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
