import React from 'react'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function About() {
    return (
        <div className='grid sm:grid-cols-3 dark:bg-slate-800 sm:h-screen' id="about">
            <div className='border-2 border-sky-500 sm:mx-auto shadow-lg sm:max-w-96 text-center m-4   sm:m-4 p-2 bg-white  sm:w-full bg-[#5eead4]'>
                <h1 className='font-medium sm:mt-2 sm:font-medium sm:text-2xl'>Introduction</h1>
                <p className='p-4'>Hi, I'm <span className='text-red-600 font-medium'>Sudip Das</span>, a passionate
                    and dedicated <span className='text-red-600 font-medium'>Java FullStack Developer</span> with
                    a knack for creating robust and efficient web applications.
                </p>
            </div>
            <div className='border-2 border-sky-500 sm:mx-auto shadow-lg sm:max-w-96 text-center m-4 sm:m-4 p-2 bg-white  sm:w-full bg-[#5eead4]'>
                <h1 className='font-medium sm:mt-2 sm:font-medium sm:text-2xl'>Professional Summary </h1>
                <p className='p-4'>I have over 1+ years of experience in fullstack development,
                    with expertise in <span className='text-red-700 font-medium'>Java</span>, <span className='text-red-700 font-medium'>Spring Boot</span>,
                    <span className='text-red-700 font-medium'>Hibernate</span> , <span className='text-red-700 font-medium'>React.js</span>,
                    and <span className='text-red-700 font-medium'>Firebase</span>.
                    My skill set spans both front-end and back-end development, allowing me
                    to build seamless and scalable applications from scratch.
                </p>
            </div>
            <div className='border-2 border-sky-500 sm:mx-auto shadow-lg sm:max-w-96 text-center m-4 sm:m-4 p-2 bg-white  sm:w-full bg-[#5eead4]'>
                <h1 className='font-medium sm:mt-2 sm:font-medium sm:text-2xl '>Technical Skills </h1>
                <p className='mt-3'><span>Language : Java, JavaScript, HTML, CSS </span></p>
                <p className=''><span>Frameworks : Spring Boot, Hibernate, React.js </span></p>
                <p className=''><span>Databases :  MySQL, Firebase Firestore  </span></p>
                <p className=''><span>Tools : Git  </span></p>
            </div>
            <div className='border-2 border-sky-500 sm:mx-auto shadow-lg sm:max-w-96 text-center m-4 sm:m-4 p-2 bg-white  sm:w-full bg-[#5eead4]'>
                <h1 className='font-medium sm:mt-2 sm:font-medium sm:text-2xl'>Experience</h1>
                <p className='pt-4'>Java FullStack Trainer at <span className='text-red-700 font-medium'>FixityEDX</span> </p>
                <p>Developed and maintained web applications using Java and React.js.</p>
                <p>Implemented <span className='text-red-700 font-medium'>RESTful APIs</span> with Spring Boot and integrated them with front-end components.</p>
                <p>Optimized database queries for better performance using Hibernate.</p>
            </div>
            <div className='border-2 border-sky-500 sm:mx-auto shadow-lg sm:max-w-96 text-center m-4  sm:m-4 p-2 bg-white  sm:w-full bg-#f9a8d4-200 bg-[#5eead4]'>
                <h1 className='font-medium sm:mt-2 sm:font-medium sm:text-2xl'>Personal Traits and Interests</h1>
                <p className='p-4'>I am a proactive problem solver with a strong emphasis on teamwork and
                    continuous improvement. I thrive in collaborative environments and
                    am always eager to learn new technologies and methodologies.
                </p>
            </div>

            <div className='border-2 border-sky-500 sm:mx-auto  shadow-lg sm:max-w-96 text-center m-4   sm:m-4  p-2 bg-white  sm:w-full bg-[#5eead4]'>
                <h1 className='font-medium sm:mt-2 sm:font-medium sm:text-2xl'>Contact Information</h1>
                <p className='p-4'>Feel free to reach out to me or connect with me on
                </p>
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" className='m-2'><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://www.linkedin.com/in/sudip-kumar-752934230/" target="_blank" rel="noopener noreferrer" className='m-2'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/1978SudipLogan" target="_blank" rel="noopener noreferrer" className='m-2'><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>

    )
}
