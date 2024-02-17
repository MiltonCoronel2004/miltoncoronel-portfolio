import ahorareconquista from '../assets/ahorareconquista.png';
import sivige from '../assets/sivige.png';
import biblioteca from '../assets/biblioteca.png';
import ImgReactSearch from '../assets/ImgReactSearch.png';
import hotelreserva from '../assets/hotelreserva.jpg';
import blooddonors from '../assets/blooddonors.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blooddonors,
      title: "Base de Datos de Donadores de Sangre",
      codeLink: 'https://github.com/MiltonCoronel2004/Sistema-de-Donadores-de-Sangre',
    },
    {
      id: 2,
      src: ahorareconquista,
      title: "Ahora Reconquista - News Page",
      codeLink: 'https://github.com/MiltonCoronel2004/ahorareconquista-newspage', 
    },
    {
      id: 3,
      src: sivige,
      title: "Sistema de Víctimas de Violencia de Género",
      codeLink: 'https://github.com/MiltonCoronel2004/SIVIGE',
    },
    {
      id: 4,
      src: biblioteca,
      title: "Sistema de Administración de Bibliotecas",
      codeLink: 'https://github.com/MiltonCoronel2004/school-library-administrator',
    },
    {
      id: 5,
      src: ImgReactSearch,
      title: "React Search Images by API",
      codeLink: 'https://github.com/MiltonCoronel2004/React-Img-Search-API',
    },
    {
      id: 6,
      src: hotelreserva,
      title: "Desafio PHP: Reservas de Habitación",
      codeLink: 'https://github.com/MiltonCoronel2004/Sistema-de-Reservas-de-Hotel',
    },
  ];



  

  return (
    <div name="Portafolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portafolio</p>
          <p className='py-6'>Algunos de mis proyectos mas importantes</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-16'>
          {portfolios.map(({ id, src, title, codeLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="Work" className='rounded-md duration-200 hover:scale-105' />
              <p className='flex justify-center pt-2 text-sm text-center'>{title}</p>
              <div className='flex items-center justify-center'>

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
