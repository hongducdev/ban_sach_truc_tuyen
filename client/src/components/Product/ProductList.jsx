import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
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
    fetch("https://api-ebook.cyclic.app/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    })
      .then((res) => res.json())
      .then((data) => {
        // nếu sản phẩm nào có số lượng nhỏ hơn 1 thì xóa khỏi mảng
        const newProducts = data.filter((product) => product.stock > 0);
        setProducts(newProducts);
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
