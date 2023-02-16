import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="select-none">
      <div className="relative inline-block">
        <div className="absolute bg-primary text-white font-semibold py-1 px-3 rounded-tl-lg rounded-br-lg">
          -4%
        </div>
        <img
          src="/kt_dd79efc9de114f3a8c1678fbcdc43f28_master.png"
          alt=""
          className="max-w-[300px] rounded-lg"
        />
        <button className="uppercase text-white bg-softDark py-2 px-3 absolute bottom-3 right-3 font-semibold rounded-lg text-xs">
          Thêm vào giỏ hàng
        </button>
        <button className="uppercase text-white bg-softDark py-2 px-3 absolute bottom-3 left-3 font-semibold rounded-lg text-xs">
          Mua ngay
        </button>
      </div>
      <div className="mt-3">
        <Link className="wrap-text-1 font-medium text-sm text-text2">
          Sách Người Trong Muôn Nghề: Ngành Kinh tế có gì? - Bức tranh tổng quan
          ngành Kinh tế
        </Link>
        <div className="flex items-center justify-center text-center text-sm">
          <span className="font-semibold text-primary">159.000đ</span>
          <span className=" text-gray-400 line-through ml-2">
            169.000đ
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
