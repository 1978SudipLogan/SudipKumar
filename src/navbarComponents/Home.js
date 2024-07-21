import React from 'react'
import '../index.css';
import Pic from '../images/myImage.jpg';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png'

const Home = () => {
    return (
        <div className='grid grid-cols-1 bg-red-200 h-6xl dark:bg-slate-800 ' id="home">
            <div className='mt-2 w-56 mx-auto sm:mt-20 '>
                <img src={Pic} alt="" className='rounded-full drop-shadow-lg' />
            </div>
            <div className='mb-36  dark:text-white'>
                <h3 className='text-xl font-medium sm:text-2xl m-2 sm:font-medium'>Welcome to My World</h3>
                <h2 className='text-xl font-medium sm:text-4xl m-2 sm:font-medium'>Hello, I am <span className='text-green-600 font-bold'>Sudip Das</span></h2>
                <h1 className='text-xl font-medium sm:text-5xl sm:font-medium'>A Java FullStack Developer</h1>
                <div className='flex items-center justify-center mt-4'>
                    <img src={Github} alt="" className='p-2' />
                    <img src={Linkedin} alt="" p-2 />
                </div>
            </div>
        </div>
    )
}

export { Home };