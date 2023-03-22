import React, { Fragment } from "react";
import { toast } from "react-toastify";
import { convertCurr } from "../../utils/convertCurr";

const CheckPaymentPage = () => {
  const [captcha, setCaptcha] = React.useState("");
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setCaptcha(localStorage.getItem("captcha"));
    setTotal(localStorage.getItem("total"));
  }, []);

  const handleConfirmPayment = () => {
    fetch("https://api-ebook.cyclic.app/ai/webhook/check-transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        captcha: captcha,
      }),
      credentials: "include",
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        if (res.json().message === "Đã thanh toán thành công!") {
          toast.success("Đã thanh toán thành công!");
          localStorage.removeItem("captcha");
          localStorage.removeItem("total");
        } else {
          toast.error("Đang chờ xác thực thanh toán!");
        }
      }
    });
  };

  return (
    <Fragment>
      <div className="container my-20">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <img
              src="https://cdn.discordapp.com/attachments/1074219605414903948/1086550806486073354/IMG_1225.jpg"
              alt="QR Code"
              className="w-[300px] h-[300px]"
            />
            <p className="text-lg">
              Chủ tài khoản: <strong>TRAN TIEN DAT</strong>
            </p>
            <p className="text-lg">
              Số tài khoản: <strong>107872417388</strong>
            </p>
            <p className="text-lg">
              Ngân hàng: <strong>VietinBank</strong>
            </p>
            <p className="text-lg">
              Số tiền: <strong>{
                convertCurr(total)}</strong>
            </p>
            <p className="text-lg">
              Nội dung chuyển khoản: <strong>{captcha}</strong>
            </p>
          </div>
          <button className="mt-10 button" onClick={handleConfirmPayment}>
            Xác nhận đã thanh toán
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckPaymentPage;
