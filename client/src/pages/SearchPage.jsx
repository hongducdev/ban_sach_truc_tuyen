import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import axios from "axios";

import { debounce } from "lodash";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios.get("https://api-ebook.cyclic.app/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchDebounce = debounce(handleSearch, 1000);

  useEffect(() => {
    if (products.length > 0 && search.length > 0) {
      const result = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(result);
    }
  }, [search, products]);

  return (
    <Fragment>
      <div className="container text-center py-10">
        <h1 className="text-4xl font-semibold underline text-text2">
          Tìm kiếm
        </h1>
        <div className="h-14 flex items-center gap-x-5 justify-center mt-10">
          <input
            type="text"
            className="w-1/2 h-full px-3 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline focus:border-primary focus:outline-none"
            placeholder="Nhập từ khóa tìm kiếm"
            onChange={handleSearchDebounce}
          />
          <button className="h-14 w-14 flex items-center justify-center bg-primary rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        {searchResult && searchResult.length > 0 ? (
          <div className="mt-10">
            <h1 className="text-2xl font-semibold underline text-text2">
              Kết quả tìm kiếm
            </h1>
            <div className="mt-10">
              <div className="grid grid-cols-3 gap-3">
                {searchResult.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
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
