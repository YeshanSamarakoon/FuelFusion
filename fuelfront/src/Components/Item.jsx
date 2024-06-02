import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, old_price }) => {
  return (
    <Link onClick={window.scrollTo(0, 0)} to={`/product/${id}`} className='bg-white p-4 rounded-3xl relative'>
      <div className='flexCenter'>
        <img src={image} alt="" height={220} width={220} 
        className='rounded-lg drop-shadow-xl absolute bottom-48 transfor hover:scale-110 hover:translate-y-3 transition-all duration-500' />
      </div>
      <div className='flex flex-col gap-y-2 pt-32'>
        <h4 className='line-clamp-5 medium-16'>{name}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='flexBetween'>
          <div className='flex gap-x-4 medium-18'>
            <span className=' text-secondary'>
                ${old_price}.00
                </span>
          </div>
          <RiShoppingCart2Line className='p-2 h-10 w-10 hover:text-secondary duration-500' />
        </div>
      </div>
    </Link>
  )
}

export default Item