import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
          <p className='text-white-400 font-bold p-2 uppercase '>
           Growing With Data Analytics
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data</h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl font-bold py-4'>Fast, flexible financing for</p>
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
          <button className='bg-blue-600 text-white rounded-md my-6 mx-auto py-3 w-[200px] font-bold'>Get Started</button>
        </div>
    </div> 
  )
}

export default Hero