import React, { Fragment } from 'react'

const Contact = () => {
  return (
    <Fragment>
      <div className="container my-20">
        <h1 className="text-4xl font-semibold underline text-text2">Liên hệ</h1>
        <div className="my-10 flex flex-col gap-5">
          <div className="">
            <p className="text-text3">Địa chỉ:</p>
            <p className="text-text2 font-medium">
              Xã Quyết Thắng, Thành phố Thái Nguyên, Tỉnh Thái Nguyên
            </p>
          </div>
          <div className="">
            <p className="text-text3">Email chúng tôi:</p>
            <p className="text-text2 font-medium">contact@ebook.com</p>
          </div>
          <div className="">
            <p className="text-text3">Số điện thoại:</p>
            <p className="text-text2 font-medium">0123456789</p>
          </div>
          <div className="">
            <p className="text-text3">Thời gian làm việc:</p>
            <p className="text-text2 font-medium">
              Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 8h00 đến 17h00
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact