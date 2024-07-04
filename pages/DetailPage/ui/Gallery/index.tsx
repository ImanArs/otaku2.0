import React, { useState } from "react";
import cls from "./styles.module.scss";

const baseURL = "http://13.60.49.147:8000/";

interface Product {
  id: number;
  images: ImageTypes[] | null;
}
interface ImageTypes {
  id: number;
  image: string 
}

const DetailGallery = ({ product }: { product: Product }) => {
  const [selectedPicture, setSelectedPicture] = useState(0);

  if (!product?.images || product.images.length === 0) {
    return <div className={cls.gallery}>No images available.</div>;
  }

  return (
    <div className={cls.gallery}>
      <div className={cls.gallery_list}>
        {product.images.slice(0,5).map((img, index) => (
          <div
            key={index}
            className={cls.img}
            onClick={() => setSelectedPicture(index)}
          >
            <img
              src={`${baseURL}${img.image}`}
              alt={`Product Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className={cls.selected_picture}>
        <img
          src={`${baseURL}${product.images[selectedPicture].image}`}
          alt={`Selected Product Image ${selectedPicture + 1}`}
        />
      </div>
    </div>
  );
};

export default DetailGallery;
