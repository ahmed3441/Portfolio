import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
// import ContactList from './ContactList';

const HireForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'hires'), data);
      console.log('Document written with ID: ', docRef.id);
      reset(); 
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit(onSubmit)} className="w-4/12 p-4 border-4 border-customRed rounded shadow bg-customDark">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white">Contact Number</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white"
            {...register('contact', { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white ">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border-2 border-customRed rounded bg-transparent text-white "
            {...register('email', { required: true })}
          />
        </div>
        <div className='flex justify-center'>
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-customRed rounded cursor "
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default HireForm;
