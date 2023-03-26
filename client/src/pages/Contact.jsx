import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Textarea } from "../components";
import emailjs from "@emailjs/browser";

const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  email: yup.string().required("Vui lòng nhập email của bạn"),
  phone: yup.string().required("Vui lòng nhập số điện thoại của bạn"),
  content: yup.string().required("Vui lòng nhập nội dung"),
})

const Contact = () => {

  document.title = "Liên hệ - EBook";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
      resolver: yupResolver(schema),
      mode: "onSubmit",
    }
  );

  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  const form = useRef();

  const handelSubmitForm = (values) => {
    emailjs
      .sendForm(
        "service_g62hbgo",
        "template_qmvqx7j",
        form.current,
        "IbPRxAUIJC8ys8Ekm"
      )
      .then((res) => {
        toast.success("Gửi phản hồi thành công!");
      })
      .catch((err) => {
        toast.error("Gửi phản hồi thất bại!");
      });
  };

  return (
    <Fragment>
      <div className="container my-20 flex justify-between bg-white">
        <div>
          <h1 className="text-4xl font-semibold text-text2 relative after:absolute after:w-[40%] after:bg-text2 after:h-[2px] after:bottom-0 after:left-0 inline-block">
            Liên hệ
          </h1>
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
                Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 8h00 đến
                17h00
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-4xl font-semibold text-text2 relative after:absolute after:w-[40%] after:bg-text2 after:h-[2px] after:bottom-0 after:left-0 inline-block">
            Gửi thắc mắc tới chúng tôi
          </h1>
          <div className="my-10">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(handleSubmitForm)}
              ref={form}
            >
              <div className="">
                <Input
                  name="name"
                  placeholder="Tên của bạn"
                  control={control}
                />
              </div>
              <div className="flex gap-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email của bạn"
                  control={control}
                />
                <Input
                  name="phone"
                  placeholder="Số điện thoại của bạn"
                  control={control}
                />
              </div>
              <div className="">
                <Textarea
                  name="content"
                  placeholder="Nội dung"
                  control={control}
                />
              </div>
              <div className="">
                <button type="submit" className="button">
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
