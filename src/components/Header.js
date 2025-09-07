import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-4 ' >
      <div className='container mx-auto' >
       <div className=' flex justify-between items-center ' >
        <a href='#' >
          <img src={Logo} alt='' />
        </a>
        <Link to="contact" smooth={true} spy={true}>
        <button className='btn btn-sm '>Work with me</button>
        </Link>
       </div>
      </div>
    </header>
  );
};

export default Header;
