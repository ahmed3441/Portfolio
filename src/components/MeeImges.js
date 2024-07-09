import React from 'react';
import { useForm } from 'react-hook-form';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const MeeImages = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const file = data.images[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Optional: you can add a progress indicator here
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const docRef = await addDoc(collection(db, 'images'), { url: downloadURL });
          console.log('Document written with ID: ', docRef.id);
          reset();
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      }
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit(onSubmit)} className="w-4/12 p-4 border-4 border-customRed rounded shadow bg-customDark">
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
            className="px-4 py-2 font-bold text-white bg-customRed rounded cursor"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MeeImages;
