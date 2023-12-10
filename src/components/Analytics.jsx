import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full py-16 px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt='Laptop Graphic' />
          <div className='flex flex-col justify-center'>
            <p className='text-blue-600 uppercase font-bold'>Data Analytics Dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>
                
Data analytics plays a pivotal role in empowering businesses across various models, including B2B (Business-to-Business), B2C (Business-to-Consumer), and SaaS (Software as a Service). For B2B enterprises, data analytics provides invaluable insights into customer behavior, enabling better understanding of clients' needs and preferences. This data-driven approach enhances customer relationship management, optimizes supply chain operations, and facilitates informed decision-making. In the B2C realm, data analytics empowers companies to personalize customer experiences, offering targeted recommendations and improving overall satisfaction. Additionally, it aids in demand forecasting, inventory management, and marketing strategy optimization. For SaaS businesses, data analytics is instrumental in monitoring user engagement, identifying areas for software improvement, and ensuring seamless functionality. Overall, data analytics serves as a strategic asset, fostering innovation, efficiency, and competitiveness across diverse business models.
            </p>
            <button className='bg-black text-white rounded-md my-6 mx-auto py-3 w-[200px] font-bold'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Analytics