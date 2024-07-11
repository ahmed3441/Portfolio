// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { db, storage } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// const MeeImages = () => {
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = async (data) => {
//     const file = data.images[0];
//     if (!file) return;

//     const storageRef = ref(storage, `images/${file.name}`);
    
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
      
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log(`Upload is ${progress}% done`);
//       },
//       (error) => {
//         console.error('Error uploading file:', error);
//       },
//       async () => {
       
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      
//         try {
//           const docRef = await addDoc(collection(db, 'images'), { url: downloadURL });
//           console.log('Document written with ID: ', docRef.id);
//           reset();
//         } catch (e) {
//           console.error('Error adding document: ', e);
//         }
//       }
//     );
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <form onSubmit={handleSubmit(onSubmit)} className="w-4/12 p-4 border-4 border-customRed rounded shadow bg-customDark">
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-bold text-white">Upload Images</label>
//           <input
//             type="file"
//             className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white"
//             {...register('images', { required: true })}
//           />
//         </div>
//         <div className='flex justify-center'>
//           <button
//             type="submit"
//             className="px-4 py-2 font-bold text-white bg-customRed rounded cursor"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MeeImages;


import React from 'react';
import { useForm } from 'react-hook-form';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const MeeImages = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const file = data.images[0];
    if (!file) {
      console.error('No file selected');
      return;
    }

    const fileName = encodeURIComponent(file.name);
    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log('Start uploading...', uploadTask);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error('Error uploading file:', error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            const docRef = await addDoc(collection(db, 'images'), { url: downloadURL });
            console.log('Document written with ID: ', docRef.id);
            reset();
          } catch (e) {
            console.error('Error adding document: ', e);
          }
        }).catch((error) => {
          console.error('Error getting download URL:', error.message);
        });
      }
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit(onSubmit)} className="w-4/12 p-4 border-4 border-customRed rounded shadow bg-customDark ">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white">Upload Images</label>
          <input
            type="file"
            className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white"
            {...register('images', { required: true })}
          />
        </div>
        <div className='flex justify-center'>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-customRed rounded cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MeeImages;
