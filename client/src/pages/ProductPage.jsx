import React, { Fragment, useEffect, useState, useRef } from "react";
import Category from "../components/Category/Category";
import ProductList from "../components/Product/ProductList";
import axios from "axios";
import { useParams } from "react-router-dom";
import { convertToArray } from "../../utils/convertToArray";
import { LoadingSite } from "../components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Textarea } from "../components";

const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  email: yup.string().required("Vui lòng nhập email của bạn"),
  image: yup.string().required("Vui lòng nhập hình ảnh của bạn"),
  star: yup
    .string()
    .required("Vui lòng nhập số sao đánh giá của bạn")
    .min(1, "Đánh giá của bạn phải từ 1 đến 5 sao")
    .max(5, "Đánh giá của bạn phải từ 1 đến 5 sao"),
  content: yup.string().required("Vui lòng nhập nội dung"),
});

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
  }, [productID]);

  useEffect(() => {
    document.title = `${product.name} - EBook`;
  }, [product]);

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      alert(arrErroes[0].message);
    }
  }, [errors]);

  const form = useRef();

  const handleStarClick = (value) => {
    // Update the starValue when a star is clicked
    setStarValue(value);
  };

  const handelSubmitForm = (values) => {
    alert("Đánh giá thành công");
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
                        onClick={handleAdd}
                      >
                        +
                      </button>
                      <input
                        type="number"
                        className="w-16 h-8 rounded-md bg-strock text-text3 text-center"
                        value={count}
                      />
                      <button
                        className="w-8 h-8 rounded-md bg-strock text-text3 text-2xl font-semibold"
                        onClick={handleSub}
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 rounded-md bg-strock text-text3 text-2xl font-semibold"
                        onClick={handleAdd}
                        disabled
                      >
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
                        disabled
                      >
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
                    onClick={() => handleAddCart()}
                  >
                    Thêm vào giỏ hàng
                  </button>
                ) : (
                  <button
                    className="w-1/2 h-12 rounded-md bg-error text-white text-lg font-semibold"
                    disabled
                  >
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
          <div className="container my-10">
            <h3 className="text-text1 underline font-semibold text-xl mb-3">
              Đánh giá sản phẩm
            </h3>
            <form
              className="flex flex-col gap-4 max-w-[800px] mt-10"
              onSubmit={handleSubmit(handelSubmitForm)}
              ref={form}
            >
              <div className="">
                <Input
                  name="name"
                  placeholder="Tên của bạn"
                  control={control}
                />
              </div>
              <div className="flex gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email của bạn"
                  control={control}
                />
              </div>
              <div className="flex gap-4">
                <Input
                  name="image"
                  type="url"
                  placeholder="Nhập hình ảnh của bạn"
                  control={control}
                />
              </div>
              <div className="flex gap-4">
                <Input
                  name="star"
                  type="number"
                  placeholder="Nhập số sao đánh giá của bạn"
                  control={control}
                />
              </div>
              <div className="">
                <Textarea
                  name="content"
                  placeholder="Nội dung"
                  control={control}
                />
              </div>
              <div className="">
                <button type="submit" className="button">
                  Gửi
                </button>
              </div>
            </form>
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
