import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'> 
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p>Sign up for our newsletter and stay up to date.</p>
          </div>
          <div className='my-4'>
             <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input type='email' name='' id='' placeholder='Enter Email' className='rounded-md p-3 flex w-full text-black' />
                <button className='bg-blue-600 text-white rounded-md ml-4 my-6 px-6 py-3 w-[200px] font-medium'>Count Me In</button>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Newsletter