import react from '../assets/react.png'
import nodejs from '../assets/nodejs.png'
import php from '../assets/php.png'
import laravel from '../assets/laravel.png'
import js from '../assets/javascript.png'
import mysql from '../assets/mysql.png'
import mongodb from '../assets/mongodb.png'
import github from '../assets/github2.png'
import tailwindcss from '../assets/tailwindcss.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import csharp from '../assets/csharp.png'
import express from '../assets/express.png'
import bootstrap from '../assets/bootstrap.png'
import git from '../assets/git.png'
import net from '../assets/net.png'
import aws from '../assets/aws.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: php, 
      title: 'PHP',
      style: 'shadow-blue-500'
    },
    {
      id: 2,
      src: laravel, 
      title: 'Laravel',
      style: 'shadow-red-500'
    },
    {
      id: 3,
      src: react, 
      title: 'React',
      style: 'shadow-blue-500'
    },
    {
      id: 4,
      src: mysql, 
      title: 'MySQL',
      style: 'shadow-gray-200'
    },
    {
      id: 5,
      src: aws, 
      title: 'Amazon Web Services',
      style: 'shadow-orange-500'
    },
    {
      id: 6,
      src: git, 
      title: 'Git',
      style: 'shadow-orange-400'
    },
    {
      id: 7,
      src: js, 
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 8,
      src: bootstrap,
      title: 'Bootstrap 5',
      style: 'shadow-blue-500'
    },
    {
      id: 9,
      src: github, 
      title: 'Github',
      style: 'shadow-gray-400'
    },
    {
      id: 10,
      src: tailwindcss, 
      title: 'Tailwind CSS',
      style: 'shadow-cyan-500'
    },
    {
      id: 11,
      src: html, 
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 12,
      src: css, 
      title: 'CSS',
      style: 'shadow-blue-500'
    }
  ]

  const secondarytechs = [
    {
      id: 1,
      src: nodejs,
      title: 'Node.js',
      style: 'shadow-green-500'
    },
    {
      id: 2,
      src: express,
      title: 'Express',
      style: 'shadow-yellow-500'
    },
    {
      id: 3,
      src: mongodb,
      title: 'MongoDB',
      style: 'shadow-green-500'
    },
    {
      id: 4,
      src: csharp,
      title: 'C#',
      style: 'shadow-blue-500'
    },
    {
      id: 5,
      src: net,
      title: '.NET',
      style: 'shadow-purple-500'
    }
  ]

  return (
    <div name="Experiencia" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-16'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experiencia Principal</p>
          <p className='py-6'>Estas son las técnologias donde mi conocimiento es amplio</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

        {techs.map(({id, src, title, style}) => ( 
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="HTML" className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}


        </div>
      </div>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-16'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Tecnologías secundarias</p>
          <p className='py-6'>Tecnologías secundarias que he llegado a probar</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

        {secondarytechs.map(({id, src, title, style}) => ( 
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="HTML" className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}


        </div>
      </div>
    </div>
  )
} 

export default Experience