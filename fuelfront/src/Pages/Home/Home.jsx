import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero'
import Popular from '../../Components/Popular'
import NewArrival from '../../Components/NewArrival'



const Home = () => {
  return (
    <div>
      <>
        <Hero/>
        <Popular/>
        <NewArrival/>
      </>
    </div>
  )
}

export default Home
