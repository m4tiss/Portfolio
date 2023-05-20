import React from 'react'

const About = () => {
  return (
   <div name="about" className="w-full h-screen bg-gradient-to-b
   from-gray-800 to-black text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
    w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4
            border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20 text-center">
        My name is Mateusz. I am 21 years old. I have been delving into computer science for several years.
        I am proficient in low-level languages like C and high-level languages like Java. Additionally, I am passionate about web development.
        I am fluent in the language english.

        </p>
        <p><br/></p>
        <p className="text-xl text-center">
        In my free time, I enjoy developing my physique through strength training and keeping up with the fitness community. Furthermore, I follow football matches.
        I often play chess or computer games too.
        </p>

    </div>

   </div>
  )
}

export default About