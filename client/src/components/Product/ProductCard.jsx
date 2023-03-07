import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const { _id, name, price, sale, images } = product;
  const navigate = useNavigate();

  return (
    <div className="select-none">
      <div className="relative inline-block">
        <div className="absolute bg-primary text-white font-semibold py-1 px-3 rounded-tl-lg rounded-br-lg">
          -4%
        </div>
        <img src={images[0]} alt={name} className="max-w-[300px] rounded-lg" />
        <button className="uppercase text-white bg-softDark py-2 px-3 absolute bottom-3 right-3 font-semibold rounded-lg text-xs">
          Thêm vào giỏ hàng
        </button>
        <button className="uppercase text-white bg-softDark py-2 px-3 absolute bottom-3 left-3 font-semibold rounded-lg text-xs">
          Mua ngay
        </button>
      </div>
      <div className="mt-3">
        <Link
          className="wrap-text-1 font-medium text-sm text-text2"
          to={`/product/${_id}`}>
          {name}
        </Link>
        <div className="flex items-center justify-center text-center text-sm">
          <span className="font-semibold text-primary">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(price)}
          </span>
          <span className=" text-gray-400 line-through ml-2">169.000đ</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
