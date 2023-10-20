import React from 'react'

const Contact = () => {
  return (
    <div name="Contacto" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contactame</p>
          <p className='py-6'>Completa el siguiente formulario para ponerte en contacto con migo</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/e0564733-9b17-4f4c-b6af-7921645e7399" method='post' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Nombre' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="email" name='email' placeholder='Correo electronico' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name='message' rows="10" className='p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none' placeholder='Mensaje'></textarea>

            <button className='text-white bg-gradient-to-r from-yellow-500 to-red-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Contactar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact