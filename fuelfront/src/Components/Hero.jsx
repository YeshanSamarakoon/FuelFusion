import React from 'react'
import { Link } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'


const Hero = () => {
  return (
   <section>
        <div className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[650px] w-full rounded-3xl'>
            <div className='relative top-24 xs:top-56 text-primary'>
                <h4 className='upperCase medium-18 translate-wider'>FEEL THE ENERGY</h4>
                <h2 className='h1 capitalize max-w-[40rem]'><span className='text-secondary'>Fuel</span> Your Ambition, Conquer Your Challenges</h2>
            
            <div className='inline-flex text-center items-centerpx-8 gap-3 p-3 bg-secondary rounded-full'>
                <div className='text-center leading-tight pl-4'>
                    <p className='text-primary medium-17'>BOOST NOW</p>
                </div>
                <Link to={'/'} ></Link>
                <div>
                   <RelatedProducts/>
                </div>

            </div>
            </div>
        </div>
   </section>
  )
}

export default Hero
