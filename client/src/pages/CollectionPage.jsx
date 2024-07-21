import React, { Fragment } from 'react'
import ProductCard from '../components/Product/ProductCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Loading } from '../components'

const CollectionPage = () => {
   const { collectionID } = useParams()

   const [products, setProducts] = React.useState([])
   const [loading, setLoading] = React.useState(false)

   React.useEffect(() => {
      setLoading(true)
      axios
         .get(
            `https://ban-sach-ebook-co.onrender.com/api/products/category?q=${collectionID}`
         )
         .then((res) => {
            // nếu sản phẩm nào có số lượng nhỏ hơn 1 thì xóa khỏi mảng
            const newProducts = res.data.filter((product) => product.stock > 0)
            setProducts(newProducts)
            setLoading(false)
         })
         .catch((err) => {
            console.log(err)
         })
   }, [collectionID])

   // hàm viết hoa chữ cái đầu tiên
   const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
   }

   React.useEffect(() => {
      document.title = `${capitalizeFirstLetter(collectionID)} - EBook`
   }, [collectionID])

   return (
      <Fragment>
         <img
            src={
               collectionID === 'sách hướng nghiệp'
                  ? '/nhom-san-pham---tu-sach-huong-nghiep_e58bb7a06d4e4f54a7f5e569edd26464.webp'
                  : '/nhom-san-pham---chu-nghia-khac-ky_894bdcf3d3ff4633a156d95384a2feac.webp'
            }
            alt={
               collectionID === 'sách hướng nghiệp'
                  ? 'Tủ sách hướng nghiệp'
                  : 'Tủ sách triết học'
            }
            className=''
         />
         <div className='container py-20 flex '>
            <div className=''>
               <h1 className='font-bold text-3xl'>
                  {collectionID === 'sách hướng nghiệp'
                     ? 'Tủ sách hướng nghiệp'
                     : 'Tủ sách triết học'}
               </h1>
               <div className='mt-8'>
                  {loading ? (
                     <div className='py-20'>
                        <Loading />
                     </div>
                  ) : (
                     <>
                        {products && products.length > 0 ? (
                           <div className='grid grid-cols-4 gap-3'>
                              {products.map((product, index) => (
                                 <ProductCard key={index} product={product} />
                              ))}
                           </div>
                        ) : (
                           <div className='text-center'>
                              <h1 className='text-2xl font-bold py-20'>
                                 Không có sản phẩm
                              </h1>
                           </div>
                        )}
                     </>
                  )}
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default CollectionPage
