"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button";
import cls from "../../styles.module.scss";
import { getPostById } from "@/hook/usePro";
import DetailGallery from "@/pages/DetailPage/ui/Gallery";
import useProduct from "@/hook/UseProduct";
import { ProductCard } from "@/shared/ui/ProductCard";
import { Loading } from "@/shared/ui/loading";

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

const DetailPage: React.FC<Props> = ({ params: { id, category } }: Props) => {
  const [post, setPost] = useState<any>(null);
  const products: Product[] = useProduct();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

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

    fetchData();
  }, [id]);

  if (!post) {
    return <Loading />;
  }
  return (
    <main>
      <div className={cls.detail}>
        <DetailGallery product={post} />
        <div className={cls.info}>
          <div className={cls.heading}>
            <h2>{post.title}</h2>
            <span>{post.price}</span>
            <Button type="red">Добавить в корзину</Button>
          </div>
          <div className={cls.variants}>
            {/* {[1, 2, 3, 4, 5, 6].map((card, index) => (
              <ProductVariantCard key={index} />
            ))} */}
          </div>
          <div className={cls.options}>
            <ul>
              {[1, 2, 3, 4, 5, 6].map((option, index) => (
                <li key={index}>
                  <p>lol</p>
                  <div className={cls.line} />
                  <span>значение</span>
                </li>
              ))}
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
