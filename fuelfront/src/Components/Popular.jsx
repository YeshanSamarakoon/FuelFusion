import React from 'react'
import POPULAR from '../assets/popular'
import Item from './Item'

const Popular = () => {
  return (
    <section className='max-pad-container bg-primary p-12 xl:py-28'>
      <div className='text-center max-w-xl mx-auto'>
        <h3 className='h3'>Popular Drinks</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32'>
      {POPULAR.map((item)=> (

          <Item key={item.id} id={item.id} name={item.name} image={item.image} 
          old_price={item.old_price}/>

        ))}
      </div>
    </section>
  )
}

export default Popular
