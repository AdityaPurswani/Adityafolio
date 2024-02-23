import React, {useEffect, useState} from 'react'
import {styles} from '../styles';
import {socials} from '../constants';


const Footer = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.paddingX} w-full flex items-right py-5 bottom-0 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <p className='text-[18px] text-white-100 font-semibold'></p>
        <ul className='list-none hidden sm:flex flex-row gap-5 items-right'>
        {socials.map((social) => (
            <li
              onClick={() => window.open(social.link, "_blank")}
              key={social.id}
            >
              <a><img src={social.logo} className='sm:w-10 sm:h-5 w-12 h-6 object-contain flex-row'/></a>
            </li>
          ))}
        </ul>
        
      </div> 
    </div>
  )
}

export default Footer