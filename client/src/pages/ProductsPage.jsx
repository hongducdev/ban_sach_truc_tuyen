import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/Product/ProductCard'
import Loading from '../components/Loading/Loading'

const Products = () => {
   document.title = 'Tất cả sản phẩm -EBook'

   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(true)
      axios
         .get('https://ban-sach-ebook-co.onrender.com/api/products')
         .then((res) => setProducts(res.data))
      setLoading(false)
   }, [])

   return (
      <Fragment>
         <img
            src='https://file.hstatic.net/200000123069/file/banner-tu-sach-nhen_c73742d0956340cb8f354a74d02d47ee.jpg'
            alt='Products'
            className=''
         />
         <div className='container mt-10 flex '>
            <div className=''>
               <h1 className='font-bold text-3xl'>Sản phẩm nổi bật</h1>
               <div className='mt-8'>
                  {loading ? (
                     <div className='w-full h-20'>
                        <Loading />
                     </div>
                  ) : (
                     <div className='grid grid-cols-4 gap-3'>
                        {products.map((product) => (
                           <ProductCard product={product} />
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default Products
