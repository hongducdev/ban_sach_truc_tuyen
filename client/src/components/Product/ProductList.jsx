import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://api-ebook.cyclic.app/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation]}
        >
        {
          products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default ProductList;
