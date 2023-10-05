import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { AdminContext } from "../../context/AdminContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAdminStore } from "../../store/adminStore";

const schema = yup.object({
  username: yup.string().required("Vui lòng nhập tên tài khoản"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const AdminLoginPage = () => {
  document.title = "Đăng nhập - EBook";

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { setAdminInfo } = useContext(AdminContext);
  const [redirect, setRedirect] = useState(false);
  const { admin, setAdmin } = useAdminStore((state) => state);

  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  const handleLoginAdmin = (data) => {
    if (data.username === "admin" && data.password === "admin") {
      setAdminInfo(data);
      setRedirect(true);
      setAdmin(data);
      toast.success("Đăng nhập thành công");
      navigate("/admin");
    } else {
      toast.error("Tên tài khoản hoặc mật khẩu không đúng", {
        pauseOnHover: false,
        delay: 0,
      });
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form
        className="w-[500px] flex flex-col gap-4 text-center bg-white shadow-xl p-10 rounded-xl"
        onSubmit={handleSubmit(handleLoginAdmin)}
      >
        <h1 className="text-4xl font-bold">Admin</h1>
        <Input
          name="username"
          type="text"
          control={control}
          placeholder="Nhập tên tài khoản admin"
        />
        <Input
          name="password"
          type="password"
          control={control}
          placeholder="Nhập mật khẩu admin"
        />
        <button className="button w-full" type="submit">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
