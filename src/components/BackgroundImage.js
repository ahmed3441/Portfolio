// // // import React, { useEffect, useState } from 'react';
// // // // import Cover from "../assets/images/CoverImage.jpg";
// // // import Cover from "../assets/images/1.jpeg";
// // // import { db } from '../firebase';
// // // import { collection, getDocs } from 'firebase/firestore';

// // // const BackgroundImage = () => {
// // //   const [headers, setHeaders] = useState([]);

// // //   useEffect(() => {
// // //     const fetchHeaders = async () => {
// // //       const querySnapshot = await getDocs(collection(db, 'headers'));
// // //       const headersArray = querySnapshot.docs.map(doc => ({
// // //         id: doc.id,
// // //         ...doc.data()
// // //       }));
// // //       setHeaders(headersArray);
// // //     };

// // //     fetchHeaders();
// // //   }, []);
  
// // //   return (
// // // <div className="relative" id='home'>
// // //   <img src={Cover} alt="Background-Image" className="w-full h-screen md:h-580px" />
// // //   {headers.map((header) => (
// // //     <div key={header.id} className="absolute inset-0 flex flex-col justify-center space-y-6 mt-10 px-3 sm:px-8 md:px-10 lg:px-12 xl:px-20 2xl:px-72">
// // //       <div className="text-3xl leading-tight xxxs:text-3xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white font-montserrat px-0 sm:px-16">
// // //         Hi, I'm {header.name}
// // //       </div>
// // //       <div className="text-2xl xxxs:text-23xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-customRed font-montserrat px-0 sm:px-16">
// // //         {header.expertise}
// // //       </div>
// // //       <div className="text-3xl leading-tight xxxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-54px font-bold text-white font-poppins px-0 sm:px-16">
// // //         based in Pakistan.
// // //       </div>
// // //     </div>
// // //   ))}
// // // </div>

// // //   );
// // // };

// // // export default BackgroundImage;



// // import React, { useEffect, useState } from 'react';
// // import Cover from "../assets/images/1.jpeg";
// // import { db } from '../firebase';
// // import { collection, getDocs } from 'firebase/firestore';
// // import TypingTextAnimation from './TypingText';

// // const BackgroundImage = () => {
// //   const [headers, setHeaders] = useState([]);

// //   useEffect(() => {
// //     const fetchHeaders = async () => {
// //       const querySnapshot = await getDocs(collection(db, 'headers'));
// //       const headersArray = querySnapshot.docs.map(doc => ({
// //         id: doc.id,
// //         ...doc.data()
// //       }));
// //       setHeaders(headersArray);
// //     };

// //     fetchHeaders();
// //   }, []);

// //   return (
// //     <div className="relative" id='home'>
// //       <img src={Cover} alt="Background-Image" className="w-full h-screen md:h-580px" />
// //       {headers.map((header) => (
// //         <div key={header.id} className="absolute inset-0 flex flex-col justify-center space-y-6 mt-10 px-3 sm:px-8 md:px-10 lg:px-12 xl:px-20 2xl:px-72">
// //           <div className="text-3xl leading-tight xxxs:text-3xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white font-montserrat px-0 sm:px-16">
// //             Hi, I'm {header.name}
// //           </div>
// //           {/* <TypingTextAnimation text={header.expertise} speed={100} /> */}

// //           <TypingTextAnimation
// //          text={header.expertise}
// //         speed={100}            
// //         backSpeed={50}      
// //         loop={true}            
// //       />
// //           {/* <div className="text-3xl leading-tight xxxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-54px font-bold text-white font-poppins px-0 sm:px-16">
// //             based in Pakistan.
// //           </div> */}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default BackgroundImage;








// import React, { useEffect, useState } from 'react';
// import Cover from "../assets/images/1.jpeg";
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import TypingTextAnimation from './TypingText.jsx';

// const BackgroundImage = () => {
//   const [headers, setHeaders] = useState([]);

//   useEffect(() => {
//     const fetchHeaders = async () => {
//       const querySnapshot = await getDocs(collection(db, 'headers'));
//       const headersArray = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setHeaders(headersArray);
//     };

//     fetchHeaders();
//   }, []);

//   return (
//     <div className="relative" id='home'>
//       <img src={Cover} alt="Background-Image" className="w-full h-screen md:h-580px" />
//       {headers.map((header) => (
//         <div key={header.id} className="absolute inset-0 flex flex-col justify-center space-y-6 mt-10 px-3 sm:px-8 md:px-10 lg:px-12 xl:px-20 2xl:px-72">
//           <div className="text-3xl leading-tight xxxs:text-3xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white font-montserrat px-0 sm:px-16">
//             Hi, I'm {header.name}
//           </div>
//           <TypingTextAnimation
//             text={header.expertise} 
//             speed={100}
//             backSpeed={50}
//             loop={true}
//           />
//           {/* <div className="text-3xl leading-tight xxxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-54px font-bold text-white font-poppins px-0 sm:px-16">
//             based in Pakistan.
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BackgroundImage;



// BackgroundImage.js
import React, { useEffect, useState } from 'react';
import Cover from "../assets/images/1.jpeg";
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import TypingTextAnimation from './TypingText.jsx';

const BackgroundImage = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchHeaders = async () => {
      const querySnapshot = await getDocs(collection(db, 'headers'));
      const headersArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setHeaders(headersArray);
    };

    fetchHeaders();
  }, []);

  return (
    <div className="relative" id='home'>
      <img src={Cover} alt="Background-Image" className="w-full h-screen md:h-580px" />
      {headers.map((header) => (
        <div key={header.id} className="absolute inset-0 flex flex-col justify-center space-y-6 mt-10 px-3 sm:px-8 md:px-10 lg:px-12 xl:px-20 2xl:px-72">
          <div className="text-3xl leading-tight xxxs:text-3xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white font-montserrat px-0 sm:px-16">
            Hi, I'm {header.name}
          </div>
          <TypingTextAnimation
            texts={[header.expertise, header.additionalText]} 
            speed={100}
            backSpeed={50}
            loop={true}
          />
          <div className="text-3xl leading-tight xxxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-54px font-bold text-white font-poppins px-0 sm:px-16">
            based in Pakistan.
          </div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundImage;
