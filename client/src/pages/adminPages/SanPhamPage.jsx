import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SanPhamPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://api-ebook.cyclic.app/api/products").then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
      }
    });
  }, []);

  const handleDeleteProduct = (id) => {
    window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?") &&
      axios
        .delete(`https://api-ebook.cyclic.app/api/products/${id}`)
        .then((res) => {
          if (res.status === 200) {
            const newProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(newProducts);
            toast.success("Xóa sản phẩm thành công");
          } else {
            toast.error("Xóa sản phẩm thất bại");
          }
        });
  };

  return (
    <Fragment>
      <div className="bg-darkbg rounded-xl p-5">
        <h2 className="font-semibold text-3xl">Quản lý sản phẩm</h2>
        <div className="mt-10">
          <Link to="/admin/add-product">
            <button className="bg-blue-500 text-white p-2 rounded-xl flex items-center">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Thêm sản phẩm
            </button>
          </Link>
          {/* danh sách sản phẩm */}
          <div className="mt-10">
            <table className="w-full border-strock border">
              <thead className="border-strock border">
                <tr className="border-strock border">
                  <th className="text-left border-strock border p-3">
                    Tên sản phẩm
                  </th>
                  <th className="text-left border-strock border p-3">Giá</th>
                  <th className="text-left border-strock border p-3">
                    Danh mục
                  </th>
                  <th className="text-left border-strock border p-3">Tác vụ</th>
                </tr>
              </thead>
              <tbody className="border-strock border">
                {
                  // map products
                  products.map((product) => {
                    return (
                      <tr className="border-strock border" key={product._id}>
                        <td className="text-left border-strock border p-3">
                          {product.name}
                        </td>
                        <td className="text-left border-strock border p-3">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.price)}
                        </td>
                        <td className="text-left border-strock border p-3">
                          {product.category}
                        </td>
                        <td className="text-left border-strock border p-3 flex items-center gap-x-3">
                          <Link to={`/admin/edit-product/${product._id}`}>
                            <button className="bg-blue-500 text-white p-2 rounded-xl">
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
                                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                                />
                              </svg>
                            </button>
                          </Link>
                          <button
                            className="bg-red-500 text-white p-2 rounded-xl"
                            onClick={() => handleDeleteProduct(product._id)}>
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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SanPhamPage;
