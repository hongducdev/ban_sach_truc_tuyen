import React, { Fragment, useEffect, useState } from "react";
import Category from "../components/Category/Category";
import ProductList from "../components/Product/ProductList";
import axios from "axios";
import { useParams } from "react-router-dom";
import { convertToArray } from "../../utils/convertToArray";
import { LoadingSite } from "../components";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { productID } = useParams();

  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api-ebook.cyclic.app/api/products/${productID}`)
      .then((res) => {
        setProduct(res.data);
        setImage(res.data.images[0]);
        setQuantity(res.data.stock);
        setLoading(false);
      });
  }, []);

  const handleAdd = () => {
    if (count < quantity) {
      setCount(count + 1);
    }
  };

  const handleSub = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddCart = (id) => {
    fetch(`https://api-ebook.cyclic.app/api/carts/${productID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: count }),
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
    <Fragment>
      {loading ? (
        <LoadingSite />
      ) : (
        <>
          <div className="container my-10 flex">
            <div className="inline-flex gap-5 w-2/3 flex-1">
              <div className="inline-flex flex-col gap-2">
                {product.images &&
                  convertToArray(product.images).map((image, index) => (
                    <div key={index} className="">
                      <img
                        src={image}
                        alt={image}
                        className="w-16 h-16 object-cover rounded-md cursor-pointer select-none"
                        onClick={() => setImage(image)}
                      />
                    </div>
                  ))}
              </div>
              <div className="">
                <img
                  src={image}
                  alt=""
                  className="w-[650px] h-[650px] object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="w-1/3">
              <h2 className="text-2xl font-semibold text-text1 mb-3">
                {product.name}
              </h2>
              {/* price */}
              <div className="flex items-center gap-2 py-2 border-t-[1px] border-b-[1px] border-strock">
                <span className="text-xl font-semibold text-text2">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </span>
              </div>
              {/* author */}
              <div className="flex items-center gap-2 border-strock my-5">
                <h3 className="text-text1 font-semibold">Tác giả:</h3>
                <p className="text-text3">{product.author}</p>
              </div>
              <p className="text-text3">{product.introduction}</p>
              {/* chọn số lượng */}
              <div className="flex items-center gap-2 my-5">
                <h3 className="text-text1 font-semibold">Số lượng:</h3>
                <div className="flex items-center gap-2">
                  {quantity > 0 ? (
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 rounded-md bg-strock text-text3 text-2xl font-semibold"
                        onClick={handleAdd}>
                        +
                      </button>
                      <input
                        type="number"
                        className="w-16 h-8 rounded-md bg-strock text-text3 text-center"
                        value={count}
                      />
                      <button
                        className="w-8 h-8 rounded-md bg-strock text-text3 text-2xl font-semibold"
                        onClick={handleSub}>
                        -
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 rounded-md bg-strock text-text3 text-2xl font-semibold"
                        onClick={handleAdd}
                        disabled>
                        +
                      </button>
                      <input
                        type="number"
                        className="w-16 h-8 rounded-md bg-strock text-text3 text-center"
                        value={count}
                        disabled
                      />
                      <button
                        className="w-8 h-8 rounded-md bg-strock text-text3 text-2xl font-semibold"
                        onClick={handleSub}
                        disabled>
                        -
                      </button>
                    </div>
                  )}
                  <p className="">
                    <span className="">{quantity}</span> sản phẩm có sẵn
                  </p>
                </div>
              </div>
              {/* button */}
              <div className="flex items-center gap-2">
                {quantity > 0 ? (
                  <button
                    className="w-1/2 h-12 rounded-md bg-error text-white text-lg font-semibold"
                    onClick={() => handleAddCart()}>
                    Thêm vào giỏ hàng
                  </button>
                ) : (
                  <button
                    className="w-1/2 h-12 rounded-md bg-error text-white text-lg font-semibold"
                    disabled>
                    Hết hàng
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="container">
            <h3 className="text-text1 underline font-semibold text-xl">
              Mô tả
            </h3>
            <p className="text-text2">{product.description}</p>
          </div>
          <div className="container text-center mt-20 mb-10">
            <Category title="Sản phẩm liên quan" />
            <div className="mt-10"></div>
            <ProductList />
          </div>
        </>
      )}
    </Fragment>
  );
};

export default ProductPage;
