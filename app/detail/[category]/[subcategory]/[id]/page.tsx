"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button";
import cls from "../../styles.module.scss";
import { getPostById } from "@/hook/usePro";
import DetailGallery from "@/pages/DetailPage/ui/Gallery";
import useProduct from "@/hook/UseProduct";
import ProductCard from "@/shared/ui/ProductCard";
import { Loading } from "@/shared/ui/loading";
import DeliveryIcon from "@/public/assets/icons/delivery_icon.svg";
import RefundIcon from "@/public/assets/icons/refundIcon.svg";
import { useBasket } from "@/hook/useBasket";
import { useCheckUserAuth } from "@/hook/useCheckUserAuth";

type Props = {
  params: {
    id: string;
    category: string;
  };
};

interface Product {
  id: number;
  images: { id: number; image: string }[] | null;
  category: {
    id: number;
    name: string;
    codename: string;
    is_active: boolean;
  };
  sub_category: {
    id: number;
    name: string;
    codename: string;
    is_active: boolean;
  } | null;
  title: string;
  description: string;
  price: number;
  views: number;
}

const arr = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19]

const DetailPage: React.FC<Props> = ({ params: { id, category } }: Props) => {
  const [post, setPost] = useState<any>(null);
  const products: Product[] = useProduct();
  const {addToBasket, removeFromBasket, getBasket, basket, isLoading} = useBasket()
  const {isAuth} = useCheckUserAuth()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [options, setOptions] = useState<Number>(5);
  
  const isInBasket = basket.some((item) => Number(item.id) === Number(id));

  useEffect(() => {
    if (category && category !== "detail") {
      const categoryCodename = category.split("/")[0];
      const filtered = products.filter((product) =>
        product.category.codename.includes(categoryCodename)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getPostById(id);
      setPost(postData);
    };
    fetchData() 
    if (isAuth) {
      getBasket()
    }
  }, [id, getBasket, isAuth]);
  

  if (isAuth && isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <div className={cls.detail}>
        <DetailGallery product={post} />
        <div className={cls.info}>
          <div className={cls.heading}>
            <h2>{post?.title}</h2>
            <span>{post?.price} сом</span>
            {
              !isInBasket ? (
                <Button
                  disabled={!isAuth} 
                  variant="red"
                  onClick={() => addToBasket(id)}
                  >
                  Добавить в корзину
                </Button>
              ) : (
                <Button 
                  variant="red"
                  onClick={() => removeFromBasket(id)}
                  >
                  Удалить из корзины
                </Button>
              )
            }
          </div>
          {/* <div className={cls.variants}> */}
            {/* {[1, 2, 3, 4, 5, 6].map((card, index) => (
              <ProductVariantCard key={index} />
            ))} */}
          {/* </div> */}
          <div className={cls.options}>
            <ul>
              {arr.slice(0, Number(options)).map((option, index) => (
                <li key={index}>
                  <p>свойство</p>
                  <div className={cls.line} />
                  <span>значение</span>
                </li>
              ))}
              {
                Number(options) < 10 ? (
                  <button className={cls.show_btn} onClick={() => setOptions(Number(arr.length))}>показать все</button>
                ) : (
                  <button className={cls.show_btn} onClick={() => setOptions(5)}>показать меньше</button>
                )
              }
            </ul>
              <ul className={cls.delivery_info}>
                <li>
                  <DeliveryIcon />
                  Доставка от 1 до 3 дней
                </li>
                <li>
                  <RefundIcon />
                  14 дней на возврат
                </li>
              </ul>
          </div>
        </div>
      </div>
      <section className={cls.also_look}>
        <h2>Смотрите также</h2>
        <div className={cls.wrapper}>
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default DetailPage;
