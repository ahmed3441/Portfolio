// import React from 'react'

// const LatestProjects = () => {
//   return (
//     <div className='bg-black text-white flex flex-col items-center p-10 lg:p-28 font-poppins'>
//     <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
//       Latest News
//     </div>
//     <div className="text-lg font-light text-fontColor text-center mt-5">
//     There are many variations of passages of Lorem Ipsum available, <br/>
//     but the majority have suffered alteration.
//     </div>


//     <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
//   <div className="overflow-hidden hover:overflow-visible bg-bgCards p-20 rounded-lg shadow-md bg-gradient-to-b from-current to to-stone-900 group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}>
//     <p className='mt-96 text-md font-poppins font-normal'>Development</p>
//     <p className=' text-3xl font-medium fonnt-poppins'>Getting Tickets to the Big Show</p>
//     <button className="description bg-transparent  border-2 border-red-500 px-4 pt-2 pb-2 mt-14">
//   Read more
// </button>
//   </div>

//   <div className="bg-bgCards p-6 rounded-lg shadow-md bg-gradient-to-b from-current to to-stone-900 group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md bg-gradient-to-b from-current to to-stone-900 group hover:bg-gradien-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   </div>
//   </div>
//   )
// }

// export default LatestProjects














import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db, storage } from '../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const LatestProjects = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'news'));
    
      const projectsArray = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          let imageUrl = null;
          if (data.imageUrl) {  
            imageUrl = await getDownloadURL(ref(storage, data.imageUrl));
          }
          return {
            id: doc.id,
            ...doc.data(),
            imageUrl,
          };
        })
      );
      setNews(projectsArray);
    };

    fetchContacts();
  }, []);

  return (
    <div id='blog' className='bg-black text-white flex flex-col items-center p-10 lg:p-28 font-poppins'>
      <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Latest News
      </div>
      <div className="text-lg font-light text-fontColor text-center mt-5">
      Software engineers apply engineering principles and knowledge of programming languages <br/> to build software solutions for end users.

      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {news.map((newz) => (
          <div
            key={newz.id}
            className="bg-bgCards rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end overflow-hidden"
            style={{ height: '600px' }}
          >
             {newz.imageUrl && (
                  <img src={newz.imageUrl} alt={newz.title} className="w-full h-2/3 object-cover rounded-t-lg"></img>
                )}
            <div className="mt-auto px-20">
              <p className="text-sm font-poppins font-normal text-white transition-transform transform translate-y-full group-hover:translate-y-5">{newz.niche}</p>
              <p className="text-3xl font-medium font-poppins text-white transition-transform transform translate-y-full group-hover:translate-y-7">{newz.title}</p>
            
            <button className="w-32 mb-10 bg-transparent border-2 border-red-500 text-red-500 px-4 py-2 mt-14 transition duration-300 opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white">
              Read more
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;

