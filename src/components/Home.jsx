import React from 'react'
import HeroImage from '../assets/heroimage.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="Inicio" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>
            Desarrollador de Software Full Stack
          </h2>
          <p className='py-4 text-gray-500'>
            Mi nombre es Milton Coronel. Tengo 6 años de estudio en el área informática y 3 años de experiencia en el desarrollo de software. Actualmente, me encuentro desarrollando proyectos web propios con tecnologías como React, PHP, Node.js, Laravel, MySQL y MongoDB.
          </p>

          <div className='flex justify-center md:inline'>
            <Link to="Portafolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-red-500 cursor-pointer'>
              Portafolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="My Picture" className='rounded-2xl mx-auto w-2/3 md:w-full mb-32 md:mb-0'/>
        </div>

      </div>
    </div>
  )   
}

export default Home