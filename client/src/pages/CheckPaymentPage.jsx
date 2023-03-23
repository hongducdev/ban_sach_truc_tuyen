import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { convertCurr } from "../../utils/convertCurr";

const CheckPaymentPage = () => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = React.useState("");
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setCaptcha(localStorage.getItem("captcha"));
    setTotal(localStorage.getItem("total_price"));
  }, []);

  const handleConfirmPayment = () => {
    fetch("https://api-ebook.cyclic.app/api/webhook/check-transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        captcha: captcha,
      }),
      credentials: "include",
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Đã thanh toán thành công!");
          localStorage.removeItem("captcha");
          localStorage.removeItem("total_price");
          navigate("/");
        } else if (res.status === 204) {
          toast.error("Đang chờ xác thực, vui lòng đợi trong giây lát!");
        }
      })
      .catch((err) => {
        toast.error("Đã có lỗi xảy ra, vui lòng thử lại!");
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
              Số tiền: <strong>{convertCurr(total)}</strong>
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
