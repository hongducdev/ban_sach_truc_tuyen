import React, { Fragment } from "react";
import ProductCard from "../components/Product/ProductCard";

const CollectionPage = () => {
  return (
    <Fragment>
      <img
        src="/nhom-san-pham---tu-sach-huong-nghiep_e58bb7a06d4e4f54a7f5e569edd26464.webp"
        alt=""
        className=""
      />
      <div className="container mt-10 flex ">
        <div className="w-[300px]">
          Phân loại
        </div>
        <div className="">
          <h1 className="font-bold text-3xl">
            Tủ sách hướng nghiệp
          </h1>
          <div className="mt-8">
            <div className="grid grid-cols-3 gap-3">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
      <h1>Collection Page</h1>
    </Fragment>
  );
};

export default CollectionPage;
