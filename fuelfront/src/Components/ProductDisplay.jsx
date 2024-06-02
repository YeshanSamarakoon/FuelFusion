import React from 'react'
import { GiRoundStar } from "react-icons/gi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const ProductDisplay = (props) => {

    const { product } = props;

    return (
        <section className='max-padd-container flex flex-col gap-8 xl:flex-row bg-primary
    py-4 '>
            <div className='flex gap-x-3 xl:flex-1 py-5'>
                <div className='flex flex-col gap-5'>
                    <img src={product.image} alt="proImage" className='max-h-[84px] rounded-lg bg-gray-10' />
                    <img src={product.image} alt="proImage" className='max-h-[84px] rounded-lg bg-gray-10' />
                    <img src={product.image} alt="proImage" className='max-h-[84px] rounded-lg bg-gray-10' />
                </div>
                <div>
                    <img src={product.image} alt="Main" className=' rounded-xl bg-gray-10' />
                </div>

            </div>
            <div className='flex-col flex xl:flex-[1.5] bg-white py-2 rounded-xl'>
                <h3 className='h3 sm:line-clamp-1'>{product.name}</h3>
                <div className='flex items-start gap-x-2 medium-17'>
                    <GiRoundStar />
                    <GiRoundStar />
                    <GiRoundStar />
                    <GiRoundStar />
                    <GiRoundStar />
                    <p>(233)</p>
                </div>
                <div className='flex items-baseline gap-x-6 bold-28 sm:bold-32 mt-4'>
                    <div> ${product.old_price}.00</div>
                </div>
                <div className='flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6'>
                    <div>
                        <h4 className='bold-16'>Flavors</h4>
                        <div className='flex gap-3 my-3'>
                            <p>{product.name}</p>
                            <p>{product.name}</p>
                            <p>{product.name}</p>

                        </div>
                    </div>
                    <div>
                        <h4></h4>

                    </div>
                    <div>

                    </div>

                </div>
                <div className='flwx gap-3 mb-8 max-2-[555px]'>
                    <button className='btn-dark rounded-md'>Add to cart</button>
                    <button className='btn-secondary rounded-md !px-4'><MdOutlineFavoriteBorder /></button>
                </div>
                <p><span className='medium-17 text-tertiary'>Category : </span>Woman | Jacket | Winter</p>
                <p><span>Tags : </span>Modern | New Arrivals | Winter</p>
            </div>

        </section>
    )
}

export default ProductDisplay
