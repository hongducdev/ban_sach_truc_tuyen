import React from 'react'

const Category = ({title}) => {
  return (
    <h2 className='uppercase font-semibold relative after:absolute after:w-full after:h-[2px] after:-bottom-1 after:left-0 after:bg-text2 text-text2 inline-block text-2xl'>
      {title}
    </h2>
  )
}

export default Category