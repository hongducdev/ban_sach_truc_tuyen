import React, { Fragment } from "react";
import { Banner } from "../components";
import Category from "../components/Category/Category";
import ProductCard from "../components/Product/ProductCard";
import ProductList from "../components/Product/ProductList";
import { Link } from "react-router-dom";

const HomePage = () => {

  document.title = "Trang chủ - EBook";

  return (
    <Fragment>
      <Banner />
      <div className="container text-center my-20 bg-white">
        <Category title="Sản phẩm nổi bật" />
        <div className="mt-10"></div>
        <ProductList />
        <div className="mt-10"></div>
        <Link to="/products">
          <button className="button uppercase">Xem thêm sản phẩm</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default HomePage;
