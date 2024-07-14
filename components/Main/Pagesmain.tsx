import { Button } from '@/shared/ui/Button';
import s from './pagesmain.module.scss';
import Link from 'next/link';
import { MapMain } from './components/MapMain';

export default function Pagesmain() {
  return (
    <div className={s.main}>
      <div className={s.main_one}>
        <div className={s.qq}>
          <div className={s.qr}>
            <img src="/assets/images/OTAKU.svg" alt="logo" />
            <img src="/assets/images/OTAKU inc..svg" alt="logo" />
          </div>
          <img className={s.imgkrug} src="/assets/images/111.png" alt="logo" />
        </div>
        <div className={s.qwe}>
          <h1>Всё, что связано с аниме, можно найти здесь.</h1>
          <div className={s.bottom}>
            <div className={s.buttons}>
              <Link href='/catalog'>
                <Button type="red" className={s.redBtn}>Каталог</Button>
              </Link>
              <Button type="black" className={s.blackBtn}>Контакты</Button>
            </div>
            <div className={s.qwe_black}>
              <div className={s.qwe_black_img}>
                <img
                  className={s.fanService}
                  src="/assets/icons/FAN SERVICE {LOADED}.svg"
                  alt="logo"
                />
                <img
                  className={s.beachEpisode}
                  src="/assets/icons/BEACH EPISODE PROCESSING....svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.main_two}>
        <img src="/assets/images/qwe.png" alt="logo" />
      </div>
    </div>
  );
}
