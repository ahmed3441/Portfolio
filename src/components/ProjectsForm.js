// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { db } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';
// // import ContactList from './ContactList';

// const ProjectForm = () => {
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const docRef = await addDoc(collection(db, 'projects'), data);
//       console.log('Document written with ID: ', docRef.id);
//       reset(); 
//     } catch (e) {
//       console.error('Error adding document: ', e);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <form onSubmit={handleSubmit(onSubmit)} className="w-4/12 p-4 border-4 border-customRed rounded shadow bg-customDark">
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-bold text-white">Niche</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white"
//             {...register('niche', { required: true })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-bold text-white ">Title</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white "
//             {...register('title', { required: true })}
//           />
//         </div>
//         <div className='flex justify-center'>
//         <button
//           type="submit"
//           className="px-4 py-2 font-bold text-white bg-customRed rounded cursor "
//         >
//           Submit
//         </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProjectForm;





import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ProjectForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState(null);

  const onSubmit = async (data) => {
    try {
      let imageURL = '';

      if (file) {
        const storageRef = ref(storage, `images/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        imageURL = await getDownloadURL(snapshot.ref);
      }

      const projectData = { ...data, imageUrl: imageURL };
      const docRef = await addDoc(collection(db, 'projects'), projectData);
      console.log('Document written with ID: ', docRef.id);
      reset();
      setFile(null);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit(onSubmit)} className="w-4/12 p-4 border-4 border-customRed rounded shadow bg-customDark">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white">Niche</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white"
            {...register('niche', { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white"
            {...register('title', { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white">Image</label>
          <input
            type="file"
            className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white">Link</label>
          <input
            type="url"
            className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white"
            {...register('link', { required: true })}
          />
        </div>
        <div className='flex justify-center'>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-customRed rounded cursor"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
