import React from 'react'
import Project1 from '../images/Screenshot (65).png'
import Project2 from '../images/Screenshot (56).png'
import Project3 from '../images/Screenshot (55).png'
import Project4 from '../images/Screenshot (58).png'
import Project5 from '../images/Screenshot (57).png'
import Project6 from '../images/Screenshot (59).png'


export default function Projects() {
    return (
        <div className='mx-auto dark:bg-slate-800 max-h-7xl' id="project">
            <h1 className='sm:text-4xl font-bold position relative top-4 dark:text-white'>Projects</h1>
            <div className='grid sm:grid-cols-3 mt-8 max-w-8xl mx-auto position relative top-0 '>
                <div className='shadow-lg m-2 overflow-hidden bg-[#bae6fd]'>
                    <img src={Project1} alt="portfolioUsingTailwind " className='hover:scale-105' />
                    <h1 className='sm:text-xl mt-2 font-bold max-w-28 border-4 rounded-full mx-auto border-red-900'>
                        <a href="https://github.com/1978SudipLogan/PortfolioUsingTailwind.git" target="_blank" rel="noopener noreferrer">Explore</a></h1>
                    <p className='text-lg font-medium'>I created this portfolio by using HTML, JavaScript and Tailwind CSS.
                        I used HTML for basic Structure,Tailwind for Styling and JavaScript for
                        Advance Styling and Functionality.
                    </p>
                </div>
                <div className='shadow-lg m-2 overflow-hidden bg-[#bae6fd]'>
                    <img src={Project2} alt="portfolioUsingTailwind " className='hover:scale-105' />
                    <h1 className='sm:text-xl mt-2 font-bold max-w-28 border-4 rounded-full mx-auto border-red-900'>
                        <a href="https://github.com/1978SudipLogan/Calculator.git" target="_blank" rel="noopener noreferrer">Explore</a></h1>
                    <p className='text-lg font-medium'>I created this website using HTML, CSS, and JavaScript.
                        HTML for structuring, CSS for styling, and JavaScript for functionality. You can use this
                        calculator for daily arithmetic operations.
                    </p>
                </div>
                <div className='shadow-lg m-2 overflow-hidden bg-[#bae6fd]'>
                    <img src={Project3} alt="portfolioUsingTailwind " className='hover:scale-105' />
                    <h1 className='sm:text-xl mt-2 font-bold max-w-28 border-4 rounded-full mx-auto border-red-900'>
                        <a href="https://github.com/1978SudipLogan/Calculator.git" target="_blank" rel="noopener noreferrer">Explore</a></h1>
                    <p className='text-lg font-medium'>I created this portfolio using HTML, CSS, JavaScript, and Bootstrap.
                        HTML for structuring, CSS for styling, Bootstrap for responsiveness, and JavaScript
                        for functionality.
                    </p>
                </div>
                <div className='shadow-lg m-2 overflow-hidden bg-[#bae6fd]'>
                    <img src={Project4} alt="portfolioUsingTailwind " className='hover:scale-105' />
                    <h1 className='sm:text-xl mt-2 font-bold max-w-28 border-4 rounded-full mx-auto border-red-900'>
                        <a href="https://github.com/1978SudipLogan/Parallax_World.git" target="_blank" rel="noopener noreferrer">Explore</a></h1>
                    <p className='text-lg font-medium'>I created this webpage using HTML and CSS.
                        HTML for structuring, CSS for styling.
                        This project focuses on CSS concepts like position, background-attachment, and padding.
                    </p>
                </div>
                <div className='shadow-lg m-2 overflow-hidden bg-[#bae6fd]'>
                    <img src={Project5} alt="portfolioUsingTailwind " className='hover:scale-105' />
                    <h1 className='sm:text-xl mt-2 font-bold max-w-28 border-4 rounded-full mx-auto border-red-900'>
                        <a href="https://github.com/1978SudipLogan/HTMLCSS.git" target="_blank" rel="noopener noreferrer">Explore</a></h1>
                    <p className='text-lg font-medium'>I created this webpage using HTML and CSS.
                        HTML for structuring and CSS for styling. This project focuses on CSS
                        concepts like position, z-index, opacity, margin, and padding.
                    </p>
                </div>
                <div className='shadow-lg m-2 overflow-hidden bg-[#bae6fd]'>
                    <img src={Project6} alt="portfolioUsingTailwind " className='hover:scale-105' />
                    <h1 className='sm:text-xl mt-2 font-bold max-w-28 border-4 rounded-full mx-auto border-red-900'>
                        <a href="https://github.com/1978SudipLogan/Dhoni_intro.git" target="_blank" rel="noopener noreferrer">Explore</a></h1>
                    <p className='text-lg font-medium'>I created this webpage using HTML, CSS, JavaScript, and Bootstrap.
                        HTML for structuring and CSS for styling. This is a basic project to clear concepts
                        like border and border-radius in CSS.
                    </p>
                </div>
            </div>


        </div>
    )
}
