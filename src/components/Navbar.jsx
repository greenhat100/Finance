import React, { useState } from 'react'
import { AiOutlineClose,  AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white'>
<h1 className='w-full text-3xl font-bold text-blue-600'>Analytics</h1>
    <ul className='hidden md:flex'>
        <li className='p-4 hover:text-blue-600 cursor-pointer'>Home</li>
        <li className='p-4 hover:text-blue-600 cursor-pointer'>Company</li>
        <li className='p-4 hover:text-blue-600 cursor-pointer'>Resources</li>
        <li className='p-4 hover:text-blue-600 cursor-pointer'>About</li>
        <li className='p-4 hover:text-blue-600 cursor-pointer'>Contact</li>
    </ul> 
    <div onClick={handleNav} className='block md:hidden cursor-pointer'>
      {!nav ? <AiOutlineClose size={20} className='text-white' /> : <AiOutlineMenu size={20} className='text-white' />}
      
    </div> 
    <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'} >
    <h1 className='w-full text-3xl font-bold pt-2 px-2 text-blue-600'>Analytics</h1>
    <ul className='pt-12 uppercase'>
    <li className='p-4 border-b border-gray-600 hover:text-blue-600 cursor-pointer'>Home</li>
    <li className='p-4 border-b border-gray-600 hover:text-blue-600 cursor-pointer'>Company</li>
    <li className='p-4 border-b border-gray-600 hover:text-blue-600 cursor-pointer'>Resources</li>
    <li className='p-4 border-b border-gray-600 hover:text-blue-600 cursor-pointer'>About</li>
    <li className='p-4 hover:text-blue-600 cursor-pointer'>Contact</li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar