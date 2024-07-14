import Link from "next/link";
import React, { useState } from "react";
import cls from "./styles.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";
// import SearchBottomBorder from '../../../../public/assets/images/search_bottom_border.png'
import SearchBottomBorder from '../../../../public/assets/images/search_bottom_border.png';

interface Props {
  className?: string;
  searchArr: any[];
}

export const SearchMain = (props: Props) => {
  const { className, searchArr } = props;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openSearchResults, setOpernSearchResults] = useState<boolean>(false);

  const filteredProducts = searchArr?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm("");
  };

  const showSearchResults = () => {
    setOpernSearchResults(!openSearchResults);
  };

  return (
    <div className={classNames(cls.search , {}, [className])}>
      <button className={cls.search_btn} onClick={showSearchResults}>Поиск в каталоге</button>
      <div className={cls.input_wrapper}>
      <input
        type="text"
        name=""
        id=""
        value={searchTerm}
        placeholder="Начните вводить название товара"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={cls.search_results}>
        {searchTerm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ul className={cls.search_results_wrapper}>
              {filteredProducts?.length === 0 && (
                <li className={cls.result_item}>
                  Ничего не найдено
                </li>
              )}
              {filteredProducts?.map((product) => (
                <li key={product.id} className={cls.result_item}>
                  <Link href={`/detail/${product.id}`}>
                    <div className={cls.card}>
                      <img
                        src={`http://13.60.49.147:8000${product.images[0].image}`}
                        alt={product.title}
                      />
                      <div className={cls.item_info}>
                        <h4>{product.title}</h4>
                        <h5>{product.price} сом</h5>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      
      </div>
    </div>
  );
};
