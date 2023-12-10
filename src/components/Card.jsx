import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3  gap-8'>
          <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img src={Single} alt='single image' className='w-20 mx-auto mt-[-3rem] bg-white' />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-blue-600 text-white rounded-md my-6 px-6 py-3 w-[200px] font-medium mx-auto'>Start Trial</button>
          </div>
          <div className='w-full border shadow-xl flex flex-col p-4 my-8 md:my-8 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
            <img src={Double} alt='single image' className='w-20 mx-auto mt-[-3rem] bg-transparent' />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-blue-600 text-white rounded-md my-6 px-6 py-3 w-[200px] font-medium mx-auto'>Start Trial</button>
          </div>
          <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img src={Triple} alt='single image' className='w-20 mx-auto mt-[-3rem] bg-white' />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-blue-600 text-white rounded-md my-6 px-6 py-3 w-[200px] font-medium mx-auto'>Start Trial</button>
          </div>
        </div>
    </div>
  )
}

export default Card