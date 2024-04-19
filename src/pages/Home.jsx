import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='text-center'>
        <h1 className='text-2xl font-semibold'>HomePage</h1>
        <Link to='/contact'><button 
            className='bg-blue-800 rounded-md px-2 py-3 my-2 text-2xl'
        >Go To Contact</button></Link>
    </div>
  )
}

