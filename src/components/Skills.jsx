import React from 'react'
import cLOGO from '../assets/c3.png'
import javaLOGO from '../assets/java.png'
import githubLOGO from '../assets/github.png'
import htmlLOGO from '../assets/html.png'
import cssLOGO from '../assets/css3.png'
import jsLOGO from '../assets/js2.png'


const Skills = () => {


const technologies = [
    {
        id:1,
        src: cLOGO,
        title:"C",
        style: 'shadow-blue-500'

    },
    {
        id:2,
        src: javaLOGO,
        title:"Java",
        style: 'shadow-red-500'

    },
    {
        id:3,
        src: githubLOGO,
        title:"GitHub",
        style: 'shadow-white'
    },
    {
        id:4,
        src: htmlLOGO,
        title:"HTML",
        style: 'shadow-orange-500'

    },
    {
        id:5,
        src: cssLOGO,
        title:"CSS",
        style: 'shadow-blue-500'

    },
    {
        id:6,
        src: jsLOGO,
        title:"JS",
        style: 'shadow-yellow-500'
    }
]
  return (
    <div name='skills' className="h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white">

        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center pt-48
        w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Skills</p>
                <p className="py-6">Here you can find technologies which i know</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center
            py-8 px-12 sm:px-8">
                {
                    technologies.map(({id,src,title,style})=>
                    <div key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg" + " " + style}>
                        <img src={src} alt="" />
                        <p className="mt-4">{title}</p>
                    </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Skills