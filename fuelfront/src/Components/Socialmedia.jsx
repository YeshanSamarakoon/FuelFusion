import React from 'react'
import { RiGithubLine, RiInstagramLine, RiLinkedinBoxLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Socialmedia = () => {
  return (
    <div className='flex gap-6'>
      <Link to={''} className='text-white text-2xl hover:text-secondary hover:translate-y-1 transition-all duration-500' >
            <RiYoutubeLine/>
      </Link>
      <Link to={''} className='text-white text-2xl hover:text-secondary hover:translate-y-1 transition-all duration-500' >
            <RiInstagramLine/>
      </Link>
      <Link to={''} className='text-white text-2xl hover:text-secondary hover:translate-y-1 transition-all duration-500' >
            <RiTwitterLine/>
      </Link>
      <Link to={''} className='text-white text-2xl hover:text-secondary hover:translate-y-1 transition-all duration-500' >
            <RiLinkedinBoxLine/>
      </Link>
      <Link to={''} className='text-white text-2xl hover:text-secondary hover:translate-y-1 transition-all duration-500' >
            <RiGithubLine/>
      </Link>
      
    </div>
  )
}

export default Socialmedia
