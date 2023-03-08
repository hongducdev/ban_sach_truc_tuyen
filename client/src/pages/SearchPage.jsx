import React, { Fragment } from "react";
import ProductCard from "../components/Product/ProductCard";

const SearchPage = () => {

  const [search, setSearch] = React.useState("");

  return (
    <Fragment>
      <div className="container text-center py-10">
        <h1 className="text-4xl font-semibold underline text-text2">
          Tìm kiếm
        </h1>
        <div className="h-14 flex items-center gap-x-5 justify-center mt-10">
          <input
            type="text"
            className="w-1/2 h-full px-3 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            placeholder="Nhập từ khóa tìm kiếm"
          />
          <button className="h-14 w-14 flex items-center justify-center bg-primary rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        {search && search.length > 0 ? (
          <div className="mt-10">
            <h1 className="text-2xl font-semibold underline text-text2">
              Kết quả tìm kiếm
            </h1>
            <div className="mt-10">
              <div className="grid grid-cols-4 gap-3">
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
        ) : (
          <div className="mt-10">
            <h1 className="text-2xl font-semibold underline text-text2">
              Không có kết quả tìm kiếm
            </h1>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default SearchPage;
