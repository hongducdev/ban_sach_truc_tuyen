import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Loading from "../Loading/Loading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api-ebook.cyclic.app/api/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="w-full h-20">
          <Loading />
        </div>
      ) : (
        <Swiper
          navigation={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation]}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductList;
