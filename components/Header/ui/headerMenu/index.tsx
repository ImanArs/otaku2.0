import React from 'react'
import cls from './styles.module.scss';
import Link from 'next/link';

import { motion } from "framer-motion";


const headerMenuLinks = [
  { name: 'каталог', link: '/catalog' },
  { name: 'Контакты', link: '#footer' },
  { name: 'МАГАЗИНЫ', link: '/shops' },
  { name: 'Доставка', link: '/delivery' },
  { name: 'Возврат', link: '/refund' },
  { name: 'О нас', link: '/about' },
  { name: 'новости', link: '/news' },
];

export const HeaderMenu = () => {
  return (
    <motion.ul
      className={cls.menu}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {headerMenuLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.link}>{link.name.toUpperCase()}</Link>
        </li>
      ))}
    </motion.ul>
  )
}
