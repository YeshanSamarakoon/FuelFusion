import React from 'react'
import { VscSettingsGear } from 'react-icons/vsc'
import all_products from '../assets/all_products'
import Item from '../Components/Item'
import { Link } from 'react-router-dom'

const Category = ({ banner, category }) => {
  return (
    <section className=' bg-primary'>

      <div >
        <div className='pt-6 ma w-full h-20'>

          <img src={banner} alt="" className='block mb-7 mx-auto w-full' />

        </div>
        <div className=' max-padd-container'>

        <div className='flexBetween my-10 mx-2'>
          <h5><span className='font-bold'>Showing 1-12</span>best products</h5>
          <Link to={'/'}><VscSettingsGear className='text-3xl bg-tertiary rounded-md h-10 w-10 p-2 text-white' />
          </Link>

        </div>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32'>
          {all_products.map((item) => {
            if (category === item.category) {
              return <Item key={item.id} id={item.id} name={item.name} image={item.image}
                old_price={item.old_price} />
            }
          })}
        </div>
        <div className='py-16 text-center text-white mdium-16'>

          <button className='brn-dark rounded-xl bg-tertiary  px-4'>Load More</button>
        </div>
        </div>
      </div>


    </section>
  )
}

export default Category
