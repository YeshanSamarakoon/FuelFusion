import React from 'react'
import ProductCom from '../Components/ProductCom'
import { useParams } from 'react-router-dom'
import all_products from '../assets/all_products';
import ProductDisplay from '../Components/ProductDisplay';
import ProductDescription from '../Components/ProductDescription';
import Popular from '../Components/Popular';

const ProductN = () => {
  const { proId } = useParams();
  console.log("productId: ", proId);
  const product = all_products.find((num) => num.id === Number(proId));

  if (!product) {
    return <div>Product Not Found</div> 
  }

  return (
    <section>
      <div>
        <ProductCom product={product} />
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <Popular/>
      </div>
    </section>
  )
}

export default ProductN;
