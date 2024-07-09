import React from 'react';
import Hellos from '../assets/images/logo-symbol-dark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-black text-white p-5 '>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex-1 mb-10 md:mb-0'>
          <h3 className='text-xl font-semibold mb-4'>
          <img src={Hellos} alt="Profile-Picture" className="object-cover"/>    
          </h3>
      
        </div>
        <div className='flex-1 mb-10 md:mb-0 md:text-center'>
          <p className='text-xl font-semibold mb-4'>
          <FontAwesomeIcon icon={faFacebook} className="text-white text-3xl mx-2 mt-2 sm:!mx-2 cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl !mx-4 mt-2 sm:!mx-2 cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl !mx-4 mt-2 sm:!mx-2 cursor-pointer" />
            <FontAwesomeIcon icon={faTwitter} className="text-white text-3xl mx-4 mt-2 sm:!mx-2 cursor-pointer" />
          </p>
         
        </div>
        <div className='flex-1 md:text-right'>
          <p className='text-md font-normal mb-4 text-fontColor'>Copyrights 2021 Rainbow-Themes. All Rights Reserved</p>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
