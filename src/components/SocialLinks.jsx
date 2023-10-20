import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

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
        href: 'https://download1584.mediafire.com/vmsk45ga4twgIChWNQrHszOUx4m23AiqRvUwqIGR4ofC44ARo3ZzJPgBDm4E8qewhuRz4scHgFTt8_WYT-IOqhZmGSGdzGKBvHDj7IpsOIKG6y_2OuYdGY2ABinTX-DbhbHbnpnadCkcOzg8KnYEXCh73Ee_pMfPn74DummfkdTf/906rvswigqczweo/resumeMiltonCoronel.pdf',
        style: 'rounded-br-md'
      },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(link => (
          <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-yellow-500 to-orange-500" + " " + link.style}> 
          <a href={link.href} className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer'>
            {link.child}
          </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
