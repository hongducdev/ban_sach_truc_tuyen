import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { convertCurr } from "../../../utils/convertCurr";
import Loading from "../../components/Loading/Loading";

const status = {
  pending: "Đang chờ xử lý",
  processing: "Đang xử lý",
  shipping: "Đang giao hàng",
  completed: "Đã hoàn thành",
  canceled: "Đã hủy",
  paid: "Đã thanh toán",
};

const DonHangPage = () => {

  document.title = "Quản lý đơn hàng - EBook";

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api-ebook.cyclic.app/api/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <div className="bg-darkbg rounded-xl p-5">
        <h2 className="font-semibold text-3xl">Quản lý đơn hàng</h2>
        <div className="mt-10">
          <h3 className="font-semibold text-2xl">Danh sách đơn hàng</h3>
          <div className="mt-10">
            {loading ? (
              <div className="">
                <Loading />
              </div>
            ) : (
              <table className="w-full border-strock border">
                <thead className="border-strock border">
                  <tr className="border-strock border">
                    <th className="text-left border-strock border p-3">STT</th>
                    <th className="text-left border-strock border p-3">
                      Tên khách hàng
                    </th>
                    <th className="text-left border-strock border p-3">
                      Tổng tiền
                    </th>
                    <th className="text-left border-strock border p-3">
                      Tình trạng
                    </th>
                    <th className="text-left border-strock border p-3">
                      Tác vụ
                    </th>
                  </tr>
                </thead>
                <tbody className="border-strock border">
                  {orders.length > 0 ? (
                    orders.map((order, index) => (
                      <tr className="border-strock border" key={order._id}>
                        <td className="text-left border-strock border p-3">
                          {index + 1}
                        </td>
                        <td className="text-left border-strock border p-3">
                          {order.customer.name}
                        </td>
                        <td className="text-left border-strock border p-3">
                          {convertCurr(order.total_price)}
                        </td>
                        <td className="text-left border-strock border p-3">
                          {status[order.status]}
                        </td>
                        <td className="text-left border-strock border p-3">
                          <Link to={`/admin/order/${order._id}`}>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                              Chi tiết
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="border-strock border">
                      <td
                        className="border-strock border p-3 text-center"
                        colSpan="5"
                      >
                        Không có đơn hàng nào
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DonHangPage;
