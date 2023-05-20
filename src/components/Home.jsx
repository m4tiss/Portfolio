import React from 'react';
import meImage from "../assets/me4.png";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col  justify-center h-full px-4 items-center" >
                <h2 className="text-4xl sm:text-7xl font-bold
                text-white text-center">Welcome on my page </h2>
                <p className="text-gray-500 py-4 max-w-md text-center">
                    I am computer science student on the Technical University of Lodz.
                    I really enjoy acquiring knowledge.
                    I am passionate about computer science.  
                </p>

                <div>
                    <Link to="projects" smooth duration={500} className="group text-white w-fit px-6 py-3
                    my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                    to-blue-500 cursor-pointer">
                        Projects
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={20} className="ml-1"/>
                        </span>
                    </Link>
                </div>

            </div>

            <div className="bg-gradient-to-b from-gray-800 via-gray-800 to-white rounded-full">
                <img src={meImage} alt="me" 
                className="rounded-2xl mx-auto w-1/2 md:w-4/6" />
            </div>
        </div>
    </div>
  )
}

export default Home