// import React, { useEffect, useRef, useState } from 'react'
import Logo from '../images/developer.jpg';
import '../index.css';
import { Home } from './Home';
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <div className='dark:bg-slate-800 grid sticky top-0 sm:grid-cols-2 position z-10 bg-red-400'>
            <div className=' w-12 mt-2 position relative mx-auto sm:m-0 sm:left-28 sm:mt-2'>
                <img src={Logo} alt="logo for my portfolio" className='hover:scale-105 rounded-full' />
            </div>
            <div className='position relative  m-3 mx-auto '>
                <ul className='flex flex-row dark:text-white '>
                    <li className='p-2 text-lg font-medium  cursor-pointer'>
                        <Link to="home" smooth={true} duration={500} className="text-white cursor-pointer hover:text-red-600
hover:text-red-600 position relative ">Home</Link></li>
                    <li className='p-2 text-lg font-medium  cursor-pointer'>
                        <Link to="about" smooth={true} duration={500} className="hover:text-red-600
hover:text-red-600 text-white cursor-pointer">About</Link>
                    </li>
                    <li className='p-2 text-lg font-medium  cursor-pointer'>
                        <Link to="project" smooth={true} duration={500} className="hover:text-red-600
hover:text-red-600 text-white cursor-pointer">Projects</Link>
                    </li>
                    <li className='p-2 text-lg font-medium  cursor-pointer'>
                        <Link to="contact" smooth={true} duration={500} className="hover:text-red-600
hover:text-red-600 text-white cursor-pointer">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export { Nav };