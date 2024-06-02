import React from 'react'
import logo2 from '../assets/Logo2.svg'
import Socialmedia from './Socialmedia'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className=' bg-tertiary py-24'>
      <div className='flexCenter flex-col gap-y-5'>

        <Link to={'/'} className='flex items-center gap-x-2'>
          <img src={logo2} alt='logoImg' height={60} width={60} />
          <div className='bold-24 hidden xs:flex italic text-white'>FUELFUSION</div>
        </Link>
        
        <Socialmedia/>
       
        <hr className='h-[1px] w-1/3 my-1 border-white'/>
      <div className='text-xl text-white'>Copyright &copy; FUELFUSION  |  All right reserved.</div>
      
      </div>
    </footer>
  )
}

export default Footer
