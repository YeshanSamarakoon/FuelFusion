import React from 'react'
import { SlArrowRight } from "react-icons/sl";

const ProductCom = (props) => {
  const { product } = props;
  return (
    <div className='max-padd-container flex items-center flex-wrap gap-x-2 medium-17
    py-4 capitalize bg-primary'     >
      Home <SlArrowRight /> Shop <SlArrowRight /> {product.category} <SlArrowRight /> {product.name}
    </div>
  )
}

export default ProductCom