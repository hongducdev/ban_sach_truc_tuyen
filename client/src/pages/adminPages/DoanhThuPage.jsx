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

const DoanhThuPage = () => {

  document.title = "Quản lý doanh thu - EBook";

  const [doanhThu, setDoanhThu] = useState([]);
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
        setDoanhThu(data);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      {/* hiện thị tổng doanh thu tạm tính và tiền lãi */}
      <div className="bg-darkbg rounded-xl p-5">
        <h2 className="font-semibold text-3xl">Quản lý doanh thu</h2>
        <div className="mt-10">
          {loading ? (
            <div className="w-full py-20">
              <Loading />
            </div>
          ) : (
            <>
              <div className="mt-10 grid grid-cols-3 gap-x-5">
                <div className="bg-darkStroke p-5 rounded-lg flex items-center justify-between">
                  <div className="">
                    <h3 className="">Tổng doanh thu thực tế</h3>
                    <p className="text-2xl font-semibold mt-5">
                      {convertCurr(doanhThu?.actualRevenue)}
                    </p>
                  </div>
                </div>
                <div className="bg-darkStroke p-5 rounded-lg">
                  <div className="">
                    <h3 className="">Tổng doanh thu dự tính</h3>
                    <p className="text-2xl font-semibold mt-5">
                      {convertCurr(doanhThu?.expectedRevenue)}
                    </p>
                  </div>
                </div>
                <div className="bg-darkStroke p-5 rounded-lg">
                  <div className="">
                    <h3 className="">Tổng các khoản giảm trừ doanh thu</h3>
                    <p className="text-2xl font-semibold mt-5">
                      {convertCurr(doanhThu?.reducedRevenue)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-2xl">Danh sách đơn hàng</h3>
                <div className="mt-10">
                  <table className="w-full border-strock border">
                    <thead className="border-strock border">
                      <tr className="border-strock border">
                        <th className="text-left border-strock border p-3">
                          STT
                        </th>
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
                      {doanhThu?.orders?.map((order, index) => (
                        <tr className="border-strock border" key={index}>
                          <td className="border-strock border p-3">
                            {index + 1}
                          </td>
                          <td className="border-strock border p-3">
                            {order?.customer?.name}
                          </td>
                          <td className="border-strock border p-3">
                            {convertCurr(order?.total_price)}
                          </td>
                          <td className="border-strock border p-3">
                            {status[order?.status]}
                          </td>
                          <td className="border-strock border p-3">
                            <Link to={`/admin/order/${order._id}`}>
                              <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                                Chi tiết
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default DoanhThuPage;
