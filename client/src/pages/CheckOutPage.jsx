import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input/Input";
import Label from "../components/Label/Label";

const CheckOutPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <div className="text-2xl font-bold text-text1">Thanh toán</div>
          <div className="text-text3">Trang chủ / Thanh toán</div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <h2 className="">Thông tin giao hàng</h2>
            <form action="">
              <div className="">
                <Label htmlFor="name">Họ và tên</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Họ và tên"
                  control={control}></Input>
              </div>
              <div className="">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Số điện thoại"
                  control={control}></Input>
              </div>
              <div className="">
                <Label htmlFor="address">Địa chỉ</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Địa chỉ"
                  control={control}></Input>
              </div>
              <div className="">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  control={control}></Input>
              </div>
              <div className="">
                <Label htmlFor="note">Ghi chú</Label>
                <Input
                  type="text"
                  name="note"
                  id="note"
                  placeholder="Ghi chú"
                  control={control}></Input>
              </div>
              <div className="">
                <Label htmlFor="payment">Phương thức thanh toán</Label>
                <select
                  name="payment"
                  id="payment"
                  className="w-full p-4 text-base text-black transition-all border rounded-lg outline-none focus:border-blue-500 border-slate-700">
                  <option value="cod">Thanh toán khi nhận hàng</option>
                  <option value="paypal">Thanh toán qua Paypal</option>
                </select>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="w-full py-4 mt-4 text-lg font-bold text-white transition-all duration-200 ease-linear bg-primary rounded-lg shadow outline-none hover:shadow-lg focus:outline-none">
                  Đặt hàng
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 px-5">
            <h2 className="">Thông tin đơn hàng</h2>
            <div className="flex items-center justify-between border-b border-dashed py-2">
              <div className="flex items-center gap-5">
                <img
                  src="/nguoi_trong_muon_nghe/1.png"
                  alt=""
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <p className="text-text2 font-medium max-w-[300px]">
                  Người Trong Muôn Nghề - Định hướng nghề nghiệp toàn diện (Tái
                  Bản 2023)
                </p>
              </div>
              <p className="">179.000₫</p>
            </div>
            <div className="">
              <div className="flex items-center justify-between py-2">
                <p className="text-text2 font-medium">Tạm tính</p>
                <p className="text-text2 font-medium">179.000₫</p>
              </div>
              <div className="flex items-center justify-between border-b border-dashed py-2">
                <p className="text-text2 font-medium">Phí vận chuyển</p>
                <p className="text-text2 font-medium">0₫</p>
              </div>
              <div className="flex items-center justify-between border-b border-dashed py-2">
                <p className="text-text2 font-medium">Tổng cộng</p>
                <p className="text-text2 font-medium">179.000₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
