import React, { Fragment } from "react";
import { Banner } from "../components";
import Category from "../components/Category/Category";
import ProductCard from "../components/Product/ProductCard";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <div className="container text-center my-20">
        <Category title="Sản phẩm nổi bật" />
        <ProductCard />
      </div>
      <h1>Home Page</h1>
    </Fragment>
  );
};

export default HomePage;
