import React from 'react';
import ahorareconquista from '../assets/ahorareconquista.png';
import sivige from '../assets/sivige.png';
import biblioteca from '../assets/biblioteca.png';
import ImgReactSearch from '../assets/ImgReactSearch.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ahorareconquista,
      title: "Ahora Reconquista - News Page",
      demoLink: 'https://ahorareconquista.com.ar/', 
      codeLink: '', 
    },
    {
      id: 2,
      src: sivige,
      title: "Sistema de Víctimas de Violencia de Género",
      demoLink: 'URL_DEL_DEMO',
      codeLink: 'URL_DEL_CODIGO',
    },
    {
      id: 3,
      src: biblioteca,
      title: "Sistema de Administración de Bibliotecas",
      demoLink: 'URL_DEL_DEMO',
      codeLink: 'URL_DEL_CODIGO',
    },
    {
      id: 4,
      src: ImgReactSearch,
      title: "React Search Images By AI",
      demoLink: 'URL_DEL_DEMO',
      codeLink: 'URL_DEL_CODIGO',
    },
  ];


  const alert = () => {
    alert("Codigo Adquirido por un Cliente.");
  }
  

  return (
    <div name="Portafolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Mira un poco de lo que hago</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-16'>
          {portfolios.map(({ id, src, title, demoLink, codeLink, onClick }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <p className='flex justify-center pt-2 text-sm text-center'>{title}</p>
              <div className='flex items-center justify-center'>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button onClick={onClick} className='w-1/2 px-6 m-4 duration-200 hover:scale-105'>Demo</button>
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className='w-1/2 px-6 m-4 duration-200 hover:scale-105'>Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
