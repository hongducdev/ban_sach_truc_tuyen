import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

const SanPhamPage = () => {
   document.title = 'Quản lý sản phẩm - EBook'

   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(true)
      axios
         .get('https://ban-sach-ebook-co.onrender.com/api/products')
         .then((res) => {
            if (res.status === 200) {
               setProducts(res.data)
               setLoading(false)
            }
         })
   }, [])

   const handleDeleteProduct = (id) => {
      window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?') &&
         axios
            .delete(`https://ban-sach-ebook-co.onrender.com/api/products/${id}`)
            .then((res) => {
               if (res.status === 200) {
                  const newProducts = products.filter(
                     (product) => product._id !== id
                  )
                  setProducts(newProducts)
                  toast.success('Xóa sản phẩm thành công')
               } else {
                  toast.error('Xóa sản phẩm thất bại')
               }
            })
   }

   return (
      <Fragment>
         <div className='bg-darkbg rounded-xl p-5'>
            <h2 className='font-semibold text-3xl'>Quản lý sản phẩm</h2>
            <div className='mt-10'>
               <Link to='/admin/add-product'>
                  <button className='bg-blue-500 text-white p-2 rounded-xl flex items-center'>
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
                           d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                        />
                     </svg>
                     Thêm sản phẩm
                  </button>
               </Link>
               {/* danh sách sản phẩm */}
               {loading ? (
                  <div className='flex justify-center items-center mt-10'>
                     <Loading />
                  </div>
               ) : (
                  <div className='mt-10'>
                     <table className='w-full border-strock border'>
                        <thead className='border-strock border'>
                           <tr className='border-strock border'>
                              <th className='text-left border-strock border p-3'>
                                 STT
                              </th>
                              <th className='text-left border-strock border p-3'>
                                 Tên sản phẩm
                              </th>
                              <th className='text-left border-strock border p-3'>
                                 Hình ảnh
                              </th>
                              <th className='text-left border-strock border p-3'>
                                 Số lượng
                              </th>
                              <th className='text-left border-strock border p-3'>
                                 Giá
                              </th>
                              <th className='text-left border-strock border p-3'>
                                 Danh mục
                              </th>
                              <th className='text-left border-strock border p-3'>
                                 Tác vụ
                              </th>
                           </tr>
                        </thead>
                        <tbody className='border-strock border'>
                           {products.length > 0 ? (
                              products.map((product, index) => {
                                 return (
                                    <tr
                                       className='border-strock border'
                                       key={product._id}>
                                       <td className='text-center border-strock border p-3'>
                                          {index + 1}
                                       </td>
                                       <td className='text-left border-strock border p-3 max-w-[600px]'>
                                          {product.name}
                                       </td>
                                       <td className='text-left border-strock border p-3'>
                                          <img
                                             src={product.images[0]}
                                             alt={product.name}
                                             className='w-20'
                                          />
                                       </td>
                                       <td className='text-left border-strock border p-3'>
                                          {product.stock}
                                       </td>
                                       <td className='text-left border-strock border p-3'>
                                          {new Intl.NumberFormat('vi-VN', {
                                             style: 'currency',
                                             currency: 'VND',
                                          }).format(product.price)}
                                       </td>
                                       <td className='text-left border-strock border p-3'>
                                          {product.category}
                                       </td>
                                       <td className='text-left p-3 flex items-center justify-center gap-x-3'>
                                          <Link
                                             to={`/admin/edit-product/${product._id}`}>
                                             <button className='bg-blue-500 text-white p-2 rounded-xl'>
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
                                                      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                                                   />
                                                </svg>
                                             </button>
                                          </Link>
                                          <button
                                             className='bg-red-500 text-white p-2 rounded-xl'
                                             onClick={() =>
                                                handleDeleteProduct(product._id)
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
                                       </td>
                                    </tr>
                                 )
                              })
                           ) : (
                              <tr className='border-strock border'>
                                 <td
                                    className='text-center border-strock border p-3'
                                    colSpan='5'>
                                    Không có sản phẩm nào
                                 </td>
                              </tr>
                           )}
                        </tbody>
                     </table>
                  </div>
               )}
            </div>
         </div>
      </Fragment>
   )
}

export default SanPhamPage
