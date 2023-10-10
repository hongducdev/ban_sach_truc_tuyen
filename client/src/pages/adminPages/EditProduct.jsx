import React, { Fragment, useEffect, useState } from "react";
import { Label } from "../../components";
import axios from "axios";
import { useParams } from "react-router-dom";

const categoriesData = ["Sách hướng nghiệp", "Sách triết học"];

const EditProduct = () => {
  document.title = "Sửa sản phẩm - EBook";

  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    author: "",
    introduction: "",
    price: "",
    description: "",
    category: "",
    images: "",
    stock: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `https://api-ebook.cyclic.app/api/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        alert("Lỗi load sản phẩm");
      }
    };
    getProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const getDropdownLabel = (name, defaultValue = "") => {
    const selectedCategory = categoriesData.find(
      (category) => category === defaultValue
    );
    return selectedCategory || "";
  };

  const onSubmit = async () => {
    // validate dữ liệu đầu vào

    // cắt khoảng trắng ở đầu và cuối
    product.name = product.name.trim();
    product.author = product.author.trim();
    product.introduction = product.introduction.trim();
    product.description = product.description.trim();
    product.price = Number(product.price);
    product.stock = Number(product.stock);

    const urlRegex = /^(http|https):\/\/([^\s]+)/;
    if (!product.name) {
      alert("Tên sản phẩm không được để trống");
      return;
    }
    if (!product.author) {
      alert("Tên tác giả không được để trống");
      return;
    }
    if (!product.introduction) {
      alert("Giới thiệu không được để trống");
      return;
    }
    if (!product.price) {
      alert("Giá không được để trống");
      return;
    }
    if (product.price < 0) {
      alert("Giá tiền không nhận giá trị âm");
      return;
    }
    if (!product.description) {
      alert("Mô tả không được để trống");
      return;
    }
    if (!product.category) {
      alert("Mô tả không được để trống");
      return;
    }
    if (!product.images) {
      alert("Hình ảnh không được để trống");
      return;
    }
    if (!product.images || !urlRegex.test(product.images)) {
      alert("Hình ảnh không hợp lệ");
      return;
    }
    if (!product.stock) {
      alert("Số lượng không được để trống");
      return;
    }
    if (product.stock < 0) {
      alert("Số lượng không nhận giá trị âm");
      return;
    }

    setIsLoading(true);
    try {
      await axios.patch(
        `https://api-ebook.cyclic.app/api/products/${productId}`,
        product
      );
      setIsLoading(false);
      alert("Cập nhật thành công");
    } catch (error) {
      setIsLoading(false);
      alert("Cập nhật thất bại");
    }
  };

  return (
    <Fragment>
      <div className="bg-darkbg rounded-xl p-5">
        <h2 className="font-semibold text-3xl">Sửa thông tin sản phẩm</h2>
        <p className="">{product.name}</p>
        <div className="mt-10 flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Tên sản phẩm</Label>
            <input
              type="text"
              name="name"
              placeholder="Nhập tên sản phẩm"
              className="bg-transparent text-white border rounded-lg outline-none focus:border-primary border-slate-700 p-4"
              value={product.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="author">Tên tác giả</Label>
            <input
              type="text"
              name="author"
              placeholder="Nhập tên tác giả"
              className="bg-transparent text-white border rounded-lg outline-none focus:border-primary border-slate-700 p-4"
              value={product.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="introduction">Giới thiệu</Label>
            <textarea
              name="introduction"
              placeholder="Nhập giới thiệu"
              className="bg-transparent text-white border rounded-lg outline-none focus:border-primary border-slate-700 p-4"
              value={product.introduction}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="price">Giá</Label>
            <input
              type="number"
              name="price"
              placeholder="Nhập giá"
              className="bg-transparent text-white border rounded-lg outline-none focus:border-primary border-slate-700 p-4"
              value={product.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="description">Mô tả</Label>
            <textarea
              name="description"
              placeholder="Nhập mô tả"
              className="bg-transparent text-white border rounded-lg outline-none focus:border-primary border-slate-700 p-4"
              value={product.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="category">Danh mục</Label>
            <select
              name="category"
              value={product.category || ""}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              className="bg-transparent text-white border rounded-lg outline-none focus:border-primary border-slate-700 p-4"
            >
              {categoriesData.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="p-4 bg-darkSecondary"
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="images">Ảnh 1</Label>
            <input
              type="text"
              name="images"
              placeholder="Nhập ảnh 1"
              className="bg-transparent text-white border rounded-lg outline-none focus:border-primary border-slate-700 p-4"
              value={product.images}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="stock">Số lượng</Label>
            <input
              type="number"
              name="stock"
              placeholder="Nhập số lượng"
              className="bg-transparent text-white border rounded-lg outline-none focus:border-primary border-slate-700 p-4"
              value={product.stock}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-5 flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={onSubmit}
            >
              {isLoading ? "Đang cập nhật..." : "Cập nhật"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProduct;
