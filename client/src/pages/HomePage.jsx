import React, { Fragment } from "react";
import { Banner } from "../components";
import Category from "../components/Category/Category";
import ProductCard from "../components/Product/ProductCard";
import ProductList from "../components/Product/ProductLIst";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <div className="container text-center my-20">
        <Category title="Sản phẩm nổi bật" />
        <div className="mt-10"></div>
        <ProductList />
      </div>
      <h1>Home Page</h1>
    </Fragment>
  );
};

export default HomePage;
