import React from 'react'

const About = () => {


  return (
    <div name="Sobre mi" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='mt-3 md:mt-0'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Sobre mi</p>
        </div>

        <p className='text-xl py-6'>
          Soy un Desarrollador de Software Full Stack en busca de su primer trabajo como programador, mi experiencia consta de proyectos hechos en tres años estudiando programación por mi cuenta junto a 6 años de estudio en escuela secundaria técnica orientada a la informática donde aprendí tambien programación. Tengo pasión por el aprendizaje y me adapto rapido a todas las situaciones, ademas soy muy bueno trabajando en equipo y tengo planes de tener estudios terciarios como "Técnico Superior en Programación".
        </p>

        <br />

        <p className='text-4xl md:mb-32 text-center' style={{ fontFamily: 'Great Vibes' }}>
          No tengo las respuestas a todo, solo soy bueno encontrandolas
        </p>

      </div>
    </div>
  )
}

export default About