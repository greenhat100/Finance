import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max--[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-2 text-white'>
        <div>
            <h1 className='w-full text-3xl font-bold text-blue-600'>Analytics</h1>
            <p>Some text</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-bold text-blue-600 mb-2'>Solutions</h6>
                <ul>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold text-blue-600 mb-2'>Support</h6>
                <ul>
                    <li>Pricing</li>
                    <li>Documention</li>
                    <li>Guides</li>
                    <li>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold text-blue-600 mb-2'>Company</h6>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold text-blue-600 mb-2'>Legal</h6>
                <ul>
                    <li>Claim</li>
                    <li>Policy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer