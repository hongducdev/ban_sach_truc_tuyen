import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  document.title = "Admin - EBook";

  return (
    <Fragment>
      <div className="bg-darkbg rounded-xl p-5">
        <h2 className="font-semibold text-3xl">Quản lý</h2>

        <div className="my-10">
          <img
            src="https://cdn.discordapp.com/attachments/1074219605414903948/1088454246229348402/image.png"
            alt="Home page"
            className="rounded-xl"
          />
          <div className="flex mt-10 items-center gap-x-5">
            <Link to="/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Trang chủ
              </button>
            </Link>
            <Link to="/admin/thong-ke-doanh-thu">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Thống kê doanh thu
              </button>
            </Link>
            <Link to="/admin/quan-ly-san-pham">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Thống kê sản phẩm
              </button>
            </Link>
            <Link to="/admin/quan-ly-don-hang">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Thống kê đơn hàng
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminHomePage;
