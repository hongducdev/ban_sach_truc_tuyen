import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const ImageArr = [
  {
    src: "/ecom_book.png",
    path: "/",
  },
  {
    src: "/nguoi_trong_muon_nghe.png",
    path: "/",
  },
  {
    src: "/seneca.png",
    path: "/",
  },
];

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        autoHeight={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}>
        {ImageArr.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={item.path}>
              <img
                src={item.src}
                alt=""
                className="max-h-screen w-screen object-cover select-none"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
