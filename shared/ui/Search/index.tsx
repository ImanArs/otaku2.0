import React, { useState } from "react";
import cls from "./styles.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
}

interface SearchProps {
  reversed?: boolean;
  className?: string;
  searchArr: any[];
}

export const Search: React.FC<SearchProps> = ({
  reversed,
  className,
  searchArr,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const filteredProducts = searchArr?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSearch = () => {
    setSearchTerm("");
  };

  return (
    <div
      className={classNames(
        "",
        {
          [cls.search_reversed]: reversed,
        },
        [cls.search, className]
      )}
    >
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
                  <div className={cls.result_item}>
                    <p>Ничего не найдено</p>
                  </div>
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
      <button className={cls.search_btn} onClick={toggleSearch}>
        Поиск
      </button>
    </div>
  );
};
