import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Category from '../components/Category/Category'
import ProductList from '../components/Product/ProductList'
import { Loading } from '../components'
import { convertCurr } from '../../utils/convertCurr'
import { toast } from 'react-toastify'

const CartPage = () => {
   document.title = 'Giỏ hàng - EBook'

   const [cart, setCart] = useState([])
   const [total, setTotal] = useState(0)
   const [loading, setLoading] = useState(false)
   const [quantity, setQuantity] = useState(1)

   useEffect(() => {
      setLoading(true)
      fetch('https://ban-sach-ebook-co.onrender.com/api/carts', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
         credentials: 'include',
         withCredentials: true,
      })
         .then((res) => res.json())
         .then((data) => {
            setCart(data.products)
            setTotal(data.total_price)
            setLoading(false)
         })
   }, [])

   const handleDeleteProduct = (id) => {
      window.confirm(
         'Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?'
      ) &&
         fetch(`https://ban-sach-ebook-co.onrender.com/api/carts/`, {
            method: 'DELETE',
            body: JSON.stringify({ productId: id }),
            headers: {
               'Content-Type': 'application/json',
            },
            credentials: 'include',
            withCredentials: true,
         })
            .then((res) => {
               if (res.status === 200) {
                  const newCart = cart.filter((item) => item._id !== id)
                  setCart(newCart)
                  toast.success('Xóa sản phẩm thành công')
                  window.location.reload()
               } else {
                  toast.error('Xóa sản phẩm thất bại')
                  console.log(res)
               }
            })
            .catch((err) => {
               console.log(err)
            })
   }

   const handlePlusProduct = (id, quantity, stock) => {
      console.log(quantity, stock)
      if (quantity >= stock) {
         toast.error('Số lượng sản phẩm không đủ')
         return
      } else {
         fetch(`https://ban-sach-ebook-co.onrender.com/api/carts/`, {
            method: 'PUT',
            body: JSON.stringify({ productId: id, quantity: quantity + 1 }),
            headers: {
               'Content-Type': 'application/json',
            },
            credentials: 'include',
            withCredentials: true,
         })
            .then((res) => {
               if (res.status === 200) {
                  const newCart = cart.map((item) =>
                     item._id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                  )
                  if (quantity >= stock) {
                     toast.error('Số lượng sản phẩm không đủ')
                     setQuantity(stock)
                  } else {
                     setQuantity(quantity + 1)
                     setCart(newCart)
                     window.location.reload()
                  }
               } else {
                  console.log(res)
               }
            })
            .catch((err) => {
               console.log(err)
            })
      }
   }

   const handleMinusProduct = (id, quantity) => {
      fetch(`https://ban-sach-ebook-co.onrender.com/api/carts/`, {
         method: 'PUT',
         body: JSON.stringify({ productId: id, quantity: quantity - 1 }),
         headers: {
            'Content-Type': 'application/json',
         },
         credentials: 'include',
         withCredentials: true,
      })
         .then((res) => {
            if (res.status === 200) {
               const newCart = cart.map((item) =>
                  item._id === id
                     ? { ...item, quantity: item.quantity - 1 }
                     : item
               )
               if (quantity <= 1) {
                  toast.error('Số lượng sản phẩm không đủ')
                  setQuantity(1)
               } else {
                  setQuantity(quantity - 1)
                  setCart(newCart)
                  window.location.reload()
               }
            } else {
               console.log(res)
            }
         })
         .catch((err) => {
            console.log(err)
         })
   }

   return (
      <Fragment>
         <div className='container'>
            <div className='flex items-center justify-between py-5'>
               <div className='text-2xl font-bold text-text1'>Giỏ hàng</div>
               <div className='text-text3'>Trang chủ / Giỏ hàng</div>
            </div>
            <div className='flex items-start justify-between gap-x-5'>
               <div className='w-4/6 bg-strock rounded-xl'>
                  {loading ? (
                     <div className='flex items-center justify-center py-10 bg-whiteSoft'>
                        <Loading />
                     </div>
                  ) : cart && cart.length > 0 ? (
                     cart.map((item) => (
                        <div
                           className='flex items-center justify-between bg-whiteSoft p-2 border-b border-dashed'
                           key={item._id}>
                           <div className='flex items-center gap-4'>
                              <img
                                 src={item.product.images[0]}
                                 alt=''
                                 className='w-16 h-16 object-cover'
                              />
                              <p className='text-text2 font-medium max-w-[300px]'>
                                 {item.product.name}
                              </p>
                           </div>
                           <div className='flex items-center gap-x-2'>
                              <button
                                 className='w-9 h-7 bg-strock rounded-md'
                                 onClick={() =>
                                    handlePlusProduct(
                                       item.product._id,
                                       item.quantity,
                                       item.product.stock
                                    )
                                 }>
                                 +
                              </button>
                              <input
                                 type='text'
                                 className='w-10 h-7 text-center border border-text3 rounded-md'
                                 value={
                                    item.quantity > item.product.stock
                                       ? item.product.stock
                                       : item.quantity
                                 }
                              />
                              <button
                                 className='w-9 h-7 bg-strock rounded-md'
                                 onClick={() =>
                                    handleMinusProduct(
                                       item.product._id,
                                       item.quantity
                                    )
                                 }>
                                 -
                              </button>
                           </div>
                           <p className=''>{convertCurr(item.product.price)}</p>
                           <div className='flex items-center flex-col'>
                              <p className='font-medium'>Thành tiền</p>
                              <p className='text-primary'>
                                 {convertCurr(
                                    item.product.price * item.quantity
                                 )}
                              </p>
                              <button
                                 onClick={() =>
                                    handleDeleteProduct(item.product._id)
                                 }>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='w-6 h-6'>
                                    <path
                                       strokeLinecap='round'
                                       strokeLinejoin='round'
                                       d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                    />
                                 </svg>
                              </button>
                           </div>
                        </div>
                     ))
                  ) : (
                     <div className='flex items-center justify-center py-5'>
                        <p className='text-text1'>Giỏ hàng trống</p>
                     </div>
                  )}
               </div>
               <div className='w-2/6'>
                  <div className='p-5 border border-text3 rounded-xl'>
                     <div className='flex items-center justify-between py-5 border-b border-text3 border-dashed'>
                        <div className='text-text1'>Tạm tính</div>
                        <div className='text-text1'>{convertCurr(total)}</div>
                     </div>
                     <div className='flex items-center justify-between py-5 border-b border-text3 border-dashed'>
                        <div className='text-text1'>Phí vận chuyển</div>
                        <div className='text-text1'>Miễn phí</div>
                     </div>
                     <div className='flex items-center justify-between py-5 border-b border-text3 border-dashed'>
                        <div className='text-text1'>Tổng cộng</div>
                        <div className='text-text1'>{convertCurr(total)}</div>
                     </div>
                     <div className='py-5'>
                        {cart && cart.length > 0 ? (
                           <Link to='/thanh-toan'>
                              <button className='w-full py-3 text-white bg-primary rounded-md'>
                                 Tiến hành thanh toán
                              </button>
                           </Link>
                        ) : (
                           <button
                              className='w-full py-3 text-white bg-primary rounded-md'
                              disabled>
                              Tiến hành thanh toán
                           </button>
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <div className='text-center my-10'>
               <Category title='Sản phẩm có thể bạn thích' />
               <div className='mt-10'></div>
               <ProductList />
               <div className='mt-10'></div>
               <button className='button uppercase'>Xem thêm sản phẩm</button>
            </div>
         </div>
      </Fragment>
   )
}

export default CartPage
