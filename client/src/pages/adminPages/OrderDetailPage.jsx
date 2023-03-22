import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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

const OrderDetailPage = () => {

  document.title = "Quản lý đơn hàng - EBook";

  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api-ebook.cyclic.app/api/orders/${orderId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data.order);
        setLoading(false);
      });
  }, [orderId]);

  const handleApproveOrder = () => {
    fetch(`https://api-ebook.cyclic.app/api/orders/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "shipping",
      }),
      credentials: "include",
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Duyệt đơn hàng thành công");
      } else {
        toast.error("Duyệt đơn hàng thất bại");
      }
    });
  };
  const handleCompleteOrder = () => {
    fetch(`https://api-ebook.cyclic.app/api/orders/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "completed",
      }),
      credentials: "include",
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Đã hoàn thành đơn hàng thành công");
      } else {
        toast.error("Đã hoàn thành đơn hàng thất bại");
      }
    });
  };

  const handleCancelOrder = () => {
    fetch(`https://api-ebook.cyclic.app/api/orders/${orderId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "shipping",
      }),
      credentials: "include",
      withCredentials: true,
    }).then((res) => {
      const confirm = window.confirm(
        "Bạn có chắc chắn muốn hủy đơn hàng này không?"
      );
      if (confirm) {
        if (res.status === 200) {
          toast.success("Hủy đơn hàng thành công");
          navigate("/admin/quan-ly-don-hang");
        } else {
          toast.error("Hủy đơn hàng thất bại");
        }
      }
    });
  };

  return (
    <Fragment>
      <div className="bg-darkbg rounded-xl p-5">
        <h2 className="font-semibold text-3xl">Chi tiết đơn hàng</h2>
        {loading ? (
          <div className="py-10">
            <Loading />
          </div>
        ) : (
          <div className="">
            <div className="mt-10">
              <h3 className="font-semibold text-2xl">Thông tin đơn hàng</h3>
              <div className="mt-10">
                <div className="flex justify-between">
                  <div className="w-1/2 flex flex-col gap-3">
                    <p className="font-semibold">Tên khách hàng:</p>
                    <p className="font-semibold">Số điện thoại:</p>
                    <p className="font-semibold">Email:</p>
                    <p className="font-semibold">Địa chỉ:</p>
                    <p className="font-semibold">Phương thức thanh toán:</p>
                    <p className="font-semibold">Tổng tiền:</p>
                    <p className="font-semibold">Tình trạng:</p>
                    <p className="font-semibold">Ngày đặt:</p>
                    <p className="font-semibold">Ngày giao:</p>
                    <p className="font-semibold">
                      Thời gian cập nhật cuối cùng:
                    </p>
                  </div>
                  <div className="w-1/2 flex flex-col gap-3">
                    <p className="">{order?.customer?.name}</p>
                    <p className="">{order?.customer?.phone}</p>
                    <p className="">{order?.customer?.email}</p>
                    <p className="">{order?.customer?.address}</p>
                    <p className="">
                      {order?.captcha === null
                        ? "Thanh toán khi nhận hàng"
                        : `Thanh toán online với mã: ${order?.captcha}`}
                    </p>
                    <p className="">{convertCurr(order?.total_price)}</p>
                    <p className="">{status[order?.status]}</p>
                    <p className="">
                      {new Date(order?.createdAt).toLocaleString()}
                    </p>
                    <p className="">
                      {order?.completed_date === null
                        ? "Chưa cập nhật"
                        : new Date(order?.completed_date).toLocaleString()}
                    </p>
                    <p className="">
                      {order?.updatedAt === null
                        ? "Chưa cập nhật"
                        : new Date(order?.updatedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                {/* sản phẩm */}
                <div className="">
                  <h3 className="font-semibold text-2xl mt-10">
                    Sản phẩm trong đơn hàng
                  </h3>
                  <div className="mt-10">
                    <table className="w-full text-left">
                      <thead className="border-strock border">
                        <tr className="border-strock border">
                          <th className="p-3 border-strock border">
                            Tên sản phẩm
                          </th>
                          <th className="p-3 border-strock border">Số lượng</th>
                          <th className="p-3 border-strock border">Giá</th>
                          <th className="p-3 border-strock border">
                            Thành tiền
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {order?.products?.map((item) => (
                          <tr key={item._id}>
                            <td className="p-3 border-strock border">
                              {item?.product?.name}
                            </td>
                            <td className="p-3 border-strock border">
                              {item?.quantity}
                            </td>
                            <td className="p-3 border-strock border">
                              {convertCurr(item?.product?.price)}
                            </td>
                            <td className="p-3 border-strock border">
                              {convertCurr(
                                item?.product?.price * item?.quantity
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex items-center gap-x-3 mt-10">
                  <button
                    className="bg-primary p-2 rounded-md"
                    onClick={handleApproveOrder}
                  >
                    Duyệt đơn hàng
                  </button>
                  <button
                    className="bg-error p-2 rounded-md"
                    onClick={handleCancelOrder}
                  >
                    Hủy đơn hàng
                  </button>
                  <button
                    className="bg-blue-500 p-2 rounded-md"
                    onClick={handleCompleteOrder}
                  >
                    Hoàn thành đơn hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default OrderDetailPage;
