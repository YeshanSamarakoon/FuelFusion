import React from 'react'

const ProductDescription = () => {
  return (
    <div className='max-padd-container'>
      <div className='flex gap-3 mb-4 '>
            <button className='btn-dark rounded-sm !text-xs !py-[6px]'>Description</button>
            <button className='btn-dark rounded-sm !text-xs !py-[6px]'>Nutritions</button>


      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
         irure dolor in reprehenderit in voluptate velit esse cillum 
         dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
         cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        <p className='text-sm'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>
    </div>
  )
}

export default ProductDescription
