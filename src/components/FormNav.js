import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/logo-symbol-dark.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('bg-black');
      } else {
        navbar.classList.remove('bg-black');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav id="navbar" className="bg-transparentmd:bg-gray-800 lg:bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 start-0 lg:px-10 md:px-2 mt-0">
        <div className="flex items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-14" alt="Logo" />

            <div className={`fixed top-0 left-0 h-full bg-transparent transition-transform transform ${dropdownOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-50 md:relative md:translate-x-0 md:flex md:w-auto md:order-1 px-6 ${dropdownOpen ? 'md:bg-gray-800' : 'md:bg-transparent'}`} id="navbar-sticky">
  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  <li>
      <Link to="/header" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Header</Link>
    </li>
    <li>
      <Link to="/about" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">About Me</Link>
    </li>
    <li>
      <Link to="/form" className=" cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins" aria-current="page">Main Skills</Link>
    </li>
    <li>
      <Link to="/awards" className=" cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Awards</Link>
    </li>
    <li>
      <Link to="/experience" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Experience</Link>
    </li>
    <li>  
      <Link to="/education" className=" cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Education & Certification</Link>
    </li>
    <li>
      <Link to="/images" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Upload Images</Link>
    </li>
    <li>
      <Link to="/hire" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Hire</Link>
    </li>
    <li>
      <Link to="/services" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Services</Link>
    </li>
    <li>
      <Link to="/projects" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Projects</Link>
    </li>
    <li>
      <Link to="/news" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">News</Link>
    </li>
   
   
  </ul>
</div>

          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button data-collapse-toggle="navbar-sticky"  onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;


  