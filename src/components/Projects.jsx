import React from 'react'
import shoppingList from '../assets/shoppingList.png'
import snake from '../assets/snake.jpg'
import card from '../assets/card.jpg'

const Projects = () => {

    const projects = [
        {
            id:1,
            src: snake,
            title: 'Snake in C++',
            code: 'https://github.com/m4tiss/snake',

        },
        {
            id:2,
            src: shoppingList,
            title: 'Shopping List in JavaSwing',
            code: 'https://github.com/m4tiss/Shopping_List'
        },

        {
            id:3,
            src: card,
            title: 'Card from FrontendMentors',
            code: 'https://github.com/m4tiss/faq-accordion-card-main',
            href: 'https://m4tiss.github.io/faq-accordion-card-main/'
        }
    ]

  return (
    <div name='projects' className="bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p className="py-6">Check my projects here</p>
            </div>
            <div className="items-center grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12
                sm:px-0 ">
            {
                projects.map(({id,src,title,code,href})=>

                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                         <div className=" flex py-4 justify-center items-center">{title}</div>
                        <img src={src} alt="" 
                        className="cursor-pointer hover:rounded-md duration:200 hover:scale-105"
                        onClick={()=>window.open(href,'_blank')}/>
                        <div className="flex items-center justify-center">
                            <button onClick={() => window.open(code, '_blank')} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >Code</button>
                        </div>
                    </div>
                )
            }
            </div>
        </div>

    </div>
  )
}

export default Projects