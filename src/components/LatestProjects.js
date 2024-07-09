// import React from 'react'

// const LatestProjects = () => {
//   return (
//     <div className='bg-customDark text-white flex flex-col items-center p-10 lg:p-28 font-poppins'>
//     <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
//       My Latest Project
//     </div>
//     <div className="text-lg font-light text-fontColor text-center mt-5">
//       There are many variations of passages of Lorem Ipsum available, but the <br/> majority have suffered alteration.
//     </div>


//     <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
// </div>

//   </div>
  
//   )
// }

// export default LatestProjects





import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const LatestProjects = () => {

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const contactsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(contactsArray);
     
    };

    fetchContacts();
  }, []);


  return (
    <div id='portfolio' className='bg-customDark text-white flex flex-col items-center p-10 lg:p-28 font-poppins'>
      <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        My Latest Project
      </div>
      <div className="text-lg font-light text-fontColor text-center mt-5">
        There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration.
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">


      {projects.map((project) => {
  return (
    <div key={project.id}>
     <div
          className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end"
          style={{ height: '600px' }}
        >
          <div className="mt-auto p-20">
            <p className="text-sm font-poppins font-normal text-white">{project.niche}</p>
            <p className="text-3xl font-medium font-poppins text-white">{project.title}</p>
          </div>
        </div>
    </div>
  );
})}


        {/* <div
          className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end"
          style={{ height: '600px' }}
        >
          <div className="mt-auto p-20">
            <p className="text-sm font-poppins font-normal text-white">Development</p>
            <p className="text-3xl font-medium font-poppins text-white">Getting Tickets to the Big Show</p>
          </div>
        </div>
        <div
          className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end"
          style={{ height: '600px' }}
        >
          <div className="mt-auto p-20">
            <p className="text-sm font-poppins font-normal text-white">Design</p>
            <p className="text-3xl font-medium font-poppins text-white">A Great Design for Your Project</p>
          </div>
        </div>
        <div
          className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end"
          style={{ height: '600px' }}
        >
          <div className="mt-auto p-20">
            <p className="text-sm font-poppins font-normal text-white">Marketing</p>
            <p className="text-3xl font-medium font-poppins text-white">How to Market Your Business</p>
          </div>
        </div>
        <div
          className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end"
          style={{ height: '600px' }}
        >
          <div className="mt-auto p-20">
            <p className="text-sm font-poppins font-normal text-white">Development</p>
            <p className="text-3xl font-medium font-poppins text-white">Getting Tickets to the Big Show</p>
          </div>
        </div>
        <div
          className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end"
          style={{ height: '600px' }}
        >
          <div className="mt-auto p-20">
            <p className="text-sm font-poppins font-normal text-white">Design</p>
            <p className="text-3xl font-medium font-poppins text-white">A Great Design for Your Project</p>
          </div>
        </div>
        <div
          className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end"
          style={{ height: '600px' }}
        >
          <div className="mt-auto p-20">
            <p className="text-sm font-poppins font-normal text-white">Marketing</p>
            <p className="text-3xl font-medium font-poppins text-white">How to Market Your Business</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LatestProjects;
