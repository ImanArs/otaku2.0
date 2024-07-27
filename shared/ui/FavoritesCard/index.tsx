"use client";
import React, { useEffect, useState } from "react";
import cls from "./styles.module.scss";
import HeartIcons from "@/public/assets/icons/heart_white.svg";
import classNames from "classnames";
import { Label } from "../Label";
import Link from "next/link";
import { useProductcard } from "@/hook/useProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: { codename: string };
  subcategory?: { codename: string };
  images: { id: number; image: string }[] | null;
}
const baseURL = "http://13.60.49.147:8000/";

export const FavoritesCard = ({ product }: { product: Product }) => {
  const categoryCodename = product.category.codename;
  const productName = product.title;

  const subcategoryCodename = product.subcategory
    ? product.subcategory.codename
    : productName;

  if (!product?.images || product.images.length === 0) {
    return (
      <div className={cls.gallery}>No images available. {product.title}</div>
    );
  }

  return (
    <div className={cls.card}>
      <div className={cls.card_img}>
        <Link
          href={`/detail/${categoryCodename}/${subcategoryCodename}/${product.id}`}
        >
          <img
            src={`${baseURL}${product.images[0].image}`}
            alt={`Selected Product Image ${0 + 1}`}
          />
        </Link>
        <div className={cls.card_info}>
          <div className={cls.card_info_wrapper}>
            <h3>{product.title}</h3>
            <h4>{product.price} сом</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className={cls.card_actions}>
        <button>
          <Link
            href={`/detail/${categoryCodename}/${subcategoryCodename}/${product.id}`}
          >
            Смотреть
          </Link>
        </button>
      </div>
    </div>
  )
}
