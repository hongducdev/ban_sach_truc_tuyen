import React, { Fragment } from "react";

const DoanhThuPage = () => {
  return (
    <Fragment>
      {/* hiện thị tổng doanh thu tạm tính và tiền lãi */}
      <div className="bg-darkbg rounded-xl p-5">
        <h2 className="font-semibold text-3xl">Quản lý doanh thu</h2>
        <div className="mt-10 grid grid-cols-3 gap-x-5">
          <div className="bg-darkStroke p-5 rounded-lg flex items-center justify-between">
            <div className="">
              <h3 className="">Tổng doanh thu thực tế</h3>
              <p className="text-2xl font-semibold mt-5">100.000.000 VNĐ</p>
            </div>
          </div>
          <div className="bg-darkStroke p-5 rounded-lg">
            <div className="">
              <h3 className="">Tổng doanh thu dự tính</h3>
              <p className="text-2xl font-semibold mt-5">100.000.000 VNĐ</p>
            </div>
          </div>
          <div className="bg-darkStroke p-5 rounded-lg">
            <div className="">
              <h3 className="">Tổng các khoản giảm trừ doanh thu</h3>
              <p className="text-2xl font-semibold mt-5">100.000.000 VNĐ</p>
            </div>
          </div>
        </div>

        {/* hiện thị giá trị của các đơn hàng */}
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
                  <th className="text-left border-strock border p-3">Tác vụ</th>
                </tr>
              </thead>
              <tbody className="border-strock border">
                <tr className="border-strock border">
                  <td className="text-left border-strock border p-3">
                    1
                  </td>
                  <td className="text-left border-strock border p-3">
                    Nguyễn Văn A
                  </td>
                  <td className="text-left border-strock border p-3">
                    100.000.000 VNĐ
                  </td>
                  <td className="text-left border-strock border p-3">
                    Đã thanh toán
                  </td>
                  <td className="text-left border-strock border p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DoanhThuPage;
