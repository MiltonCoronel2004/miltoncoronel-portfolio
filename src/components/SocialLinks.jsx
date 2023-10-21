import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import resume from '../assets/resumeMiltonCoronel.pdf'

const SocialLinks = () => {
    const links = [
      {
        id: 1,
        child: (
          <>
            LinkedIn <FaLinkedin size={30} />
          </>
        ),
        href: 'https://www.linkedin.com/in/milton-coronel-dean-3356a7290/',
        style: 'rounded-tr-md'
      },
      {
        id: 2,
        child: (
          <>
            Github <FaGithub size={30} />
          </>
        ),
        href: 'https://github.com/MiltonCoronel2004'
      },
      {
        id: 3,
        child: (
          <>
            Mail <HiOutlineMail size={30} />
          </>
        ),
        href: 'mailto:miltoncoronel2004@gmail.com'
      },
      {
        id: 4,
        child: (
          <>
            Resume <BsFillPersonLinesFill size={30} />
          </>
        ),
        href: resume,
        download: true
      },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id, href, download, child, style}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-yellow-500 to-orange-500" + " " + style}> 
          <a href={href} className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer' download={download}>
            {child}
          </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
