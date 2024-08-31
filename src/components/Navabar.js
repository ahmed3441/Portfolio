// import React, { useEffect, useState } from 'react';
// import Logo from '../assets/images/logo-symbol-dark.png';
// import { Link } from 'react-scroll';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.getElementById('navbar');
//       if (window.scrollY > 50) {
//         navbar.classList.add('bg-black');
//       } else {
//         navbar.classList.remove('bg-black');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div>
//       <nav id="navbar" className="bg-transparentmd:bg-gray-800 lg:bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 start-0 lg:px-10 md:px-2 mt-0">
//         <div className="flex items-center justify-between mx-auto p-4">
//           <div className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src={Logo} className="h-14" alt="Logo" />

//             <div className={`fixed top-0 left-0 h-full bg-transparent transition-transform transform ${dropdownOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-50 md:relative md:translate-x-0 md:flex md:w-auto md:order-1 px-6 ${dropdownOpen ? 'md:bg-gray-800' : 'md:bg-transparent'}`} id="navbar-sticky">
//   <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//     <li>
//       <Link to="home" className=" cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins" aria-current="page">Home</Link>
//     </li>
//     <li>
//       <Link to="about" className=" cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">About</Link>
//     </li>
//     <li>
//       <Link to="service" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Service</Link>
//     </li>
//     <li>  
//       <Link to="portfolio" className=" cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Portfolio</Link>
//     </li>
//     <li>
//       <Link to="blog" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Blog</Link>
//     </li>
//     <li>
//       <Link to="contact" className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins">Contact</Link>
//     </li>
//   </ul>
// </div>

//           </div>

//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">


//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl mx-2 mt-2 sm:!mx-2 cursor-pointer" />
//             <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl !mx-4 mt-2 sm:!mx-2 cursor-pointer" />
//             <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl !mx-4 mt-2 sm:!mx-2 cursor-pointer" />
//             <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl mx-4 mt-2 sm:!mx-2 cursor-pointer" />
//             <button className="text-white border pt-2 pb-2 px-5 rounded-lg !ml-4 hidden md:block">Buy Now</button>
//             </div>
//             <button data-collapse-toggle="navbar-sticky"  onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//               <span className="sr-only">Open main menu</span>
//               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//               </svg>
//             </button>
//           </div>

//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;






import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/logo-symbol-dark.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
    import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/m-ahmed-2abaa0295/", "_blank");
  }

  const openGithub = () => {
    window.open("https://github.com/ahmed3441", "_blank");
  }

  return (
    <div>
      <nav id="navbar" className="bg-transparent lg:bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 start-0 lg:px-10 md:px-2 mt-0">
        <div className="flex items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-14" alt="Logo" />

            <div
        className={`fixed top-0 right-0 h-full transition-transform transform ${
          dropdownOpen ? 'translate-x-0 mmd: bg-black mt-20' : 'translate-x-full mmd:bg-transparent'
        }  w-48 z-50 mmd:relative mmd:translate-x-0 mmd:flex mmd:w-auto mmd:order-1 px-10`}
        id="navbar-sticky"
      >
         <button
                onClick={() => setDropdownOpen(false)}
                className="absolute top-4 left-4 text-white text-2xl mmd:hidden"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
        <ul className="flex flex-col p-4 mmd:p-0 mt-4 font-medium  rounded-lg mmd:space-x-8 rtl:space-x-reverse mmd:flex-row mmd:mt-0 mmd:border-0 dark:bg-gray-800 mmd:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              to="home"
              className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-red-500 mmd:hover:bg-transparent mmd:p-0 mmd:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mmd:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-red-500 mmd:hover:bg-transparent mmd:p-0 mmd:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mmd:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="service"
              className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-red-500 mmd:hover:bg-transparent mmd:p-0 mmd:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mmd:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-red-500 mmd:hover:bg-transparent mmd:p-0 mmd:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mmd:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-red-500 mmd:hover:bg-transparent mmd:p-0 mmd:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mmd:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="cursor-pointer block py-2 px-3 text-white rounded hover:bg-red-500 mmd:hover:bg-transparent mmd:p-0 mmd:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mmd:dark:hover:bg-transparent dark:border-gray-700 text-base font-bold font-poppins"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl mx-2 mt-2 sm:!mx-2 cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl !mx-4 mt-2 sm:!mx-2 cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl !mx-4 mt-2 sm:!mx-2 cursor-pointer" onClick={openLinkedIn} />
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl !mx-4 mt-2 sm:!mx-2 cursor-pointer" onClick={openGithub} />
            <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl mx-4 mt-2 sm:!mx-2 cursor-pointer" />
            {/* <button className="text-white border pt-2 pb-2 px-5 rounded-lg !ml-4 hidden xs:block">Buy Now</button> */}
            <button data-collapse-toggle="navbar-sticky" onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg mmd:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
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
