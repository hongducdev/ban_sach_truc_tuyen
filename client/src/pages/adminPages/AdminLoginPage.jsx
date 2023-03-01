import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../components/Input/Input'

const AdminLoginPage = () => {

  const {
    control,
    handerSubmit,

  } = useForm();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form className='w-[500px] flex flex-col gap-4 text-center bg-white shadow-xl p-10 rounded-xl'>
        <h1 className="text-4xl font-bold">
          Admin
        </h1>
        <Input name='username' control={control} placeholder="Nhập tên tài khoản admin" />
        <Input name='username' type='password' control={control} placeholder="Nhập mật khẩu admin" />
        <button className="button w-full">
          Đăng nhập
        </button>
      </form>
    </div>
  )
}

export default AdminLoginPage