import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { convertCurr } from "../../../utils/convertCurr";

const ProductCard = ({ product }) => {
  const { _id, name, price, sale, images } = product;
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    fetch(`https://api-ebook.cyclic.app/api/carts/${_id}`, {
      method: "POST",
      body: JSON.stringify({ quantity: 1 }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Thêm vào giỏ hàng thành công");
        window.location.reload();
      } else if (res.status === 201) {
        toast.success("Thêm vào giỏ hàng thành công");
        window.location.reload();
      } else {
        toast.error("Thêm vào giỏ hàng thất bại");
      }
    });
  };

  return (
    <div className="select-none">
      <div className="relative inline-block">
        <div className="absolute bg-primary text-white font-semibold py-1 px-3 rounded-tl-lg rounded-br-lg">
          -4%
        </div>
        <img src={images[0]} alt={name} className="max-w-[300px] rounded-lg" />
        <button
          className="uppercase text-white bg-softDark py-2 px-3 absolute bottom-3 right-3 font-semibold rounded-lg text-xs"
          onClick={() => handleAddToCart(_id)}>
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
            {
              convertCurr(price)
            }
          </span>
          <span className=" text-gray-400 line-through ml-2">169.000đ</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
