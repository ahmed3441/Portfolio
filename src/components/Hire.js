// import React from 'react'
// import Hellos from "../assets/images/logo-symbol-dark.png";
// // import Mee from "../assets/images/Mee.jpg";
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Hire = () => {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_1cfgps9', 'template_hh039us', form.current, {
//         publicKey: 'UKWid_yfddjhEIAb-',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };


//   return (
//       <div className="bg-customDark text-white p-12 md:p-24 lg:p-48 flex justify-center items-start">
//       < div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 w-full max-w-screen-xl">
      
//         {/* Content */}
//         <div className="col-span-1 md:col-span-5 lg:col-span-7 flex flex-col justify-start text-center md:text-left">
//           <div className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold ">
//             Hire Me.
//           </div>
//           <div className="mt-4 text-lg font-poppins font-light text-fontColor">
//             <p className='text-lg font-normal'>I am available for freelance work. Connect with me via phone: <br/>
//             <span className='font-medium text-white font-poppins'>03314467645</span> or email: <span className='font-medium text-white font-poppins'>m.ahmedmasoom2001@gmail.com</span>  <br/>
//             </p>
//             <div>
//                     {/* <input type='text' placeholder='Your Name*' className='bg-transparent border-2 border-fontColor w-4/6 mt-14 px-5 p-3 text-sm rounded-md'></input>
//                     <input type='email' placeholder='Your email*' className='bg-transparent border-2 border-fontColor w-4/6 mt-6 px-5 p-3 text-sm rounded-md'></input>
//                     <input type='text' placeholder='Write a Subject*' className='bg-transparent border-2 border-fontColor w-4/6 mt-6 px-5 p-3 text-sm rounded-md'></input>
//                     <textarea type='text' placeholder='Your Message*' className='bg-transparent border-2 border-fontColor w-4/6 mt-6 px-5 p-3 text-sm rounded-md'></textarea>
//                     <div>
//                     <button className='text-white bg-customRed p-3 px-7 rounded-lg text-base font-light mt-5'>SUBMIT </button>
//                     </div> */}


// <form ref={form} onSubmit={sendEmail}>
//       {/* <label >Name</label> */}
//       <input type="text" placeholder='Your Name*' className='bg-transparent border-2 border-fontColor w-4/6 mt-14 px-5 p-3 text-sm rounded-md' name="user_name" />
//       {/* <label  >Email</label> */}
//       <input type="email" placeholder='Your email*' className='bg-transparent border-2 border-fontColor w-4/6 mt-6 px-5 p-3 text-sm rounded-md' name="user_email" />
//       {/* <label >Message</label> */}
//       <textarea name="message" placeholder='Your Message*' className='bg-transparent border-2 border-fontColor w-4/6 mt-6 px-5 p-3 text-sm rounded-md' /> <br/>
//       <input type="submit" value="Send" className='text-white bg-customRed p-3 px-7 rounded-lg text-base font-light mt-5'/>
//       </form>  
//             </div> 
//           </div>
//           </div>
//             {/* Picture */}
//         <div className="col-span-1 md:col-span-4 lg:col-span-5 flex justify-center">
//           <img src={Hellos} alt="Profile-Picture" className="w-full h-full object-cover" />
//         </div>
//           </div>
//           </div>
//   )
// }

// export default Hire




import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
// import Hellos from "../assets/images/logo-symbol-dark.png";
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const Hire = () => {
  const form = useRef();

  const [hires, setHires] = useState([]);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'hires'));
      const contactsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setHires(contactsArray);
     
    };

    fetchContacts();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1cfgps9', 'template_hh039us', form.current, 'UKWid_yfddjhEIAb-')
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };


  useEffect(()=>{
    const fetchImageUrl = async () => {
      const imageRef = ref(storage, 'images/1.jpeg');
      try {
        const url = await getDownloadURL(imageRef);
        setImages(url);
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };
  
    fetchImageUrl();
  }, []);


  return (
    <div id='contact' className="bg-customDark text-white p-12 md:p-24 lg:p-48 flex justify-center items-start">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 w-full max-w-screen-xl">
        <div className="col-span-1 md:col-span-5 lg:col-span-7 flex flex-col justify-start text-center md:text-left">
          <div className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold">
            Hire Me.
          </div>
          <div className="mt-4 text-lg font-poppins font-light text-fontColor">
            <p className="text-lg font-normal">
              I am available for freelance work. Connect with me via phone: <br />

              {hires.map((hire) => {
  return (
    <span key={hire.id} className='mt-5'>
                  <span className="font-medium text-white font-poppins">{hire.contact}</span> or email: <span className="font-medium text-white font-poppins">{hire.email}</span> <br />
    </span>
  );
})}

            </p>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" required placeholder="Your Name*" className="bg-transparent border-2 border-fontColor w-4/6 mt-14 px-5 p-3 text-sm rounded-md" name="user_name" />
              <input type="email" required placeholder="Your email*" className="bg-transparent border-2 border-fontColor w-4/6 mt-6 px-5 p-3 text-sm rounded-md" name="user_email" />
              <textarea name="message" placeholder="Your Message*" className="bg-transparent border-2 border-fontColor w-4/6 mt-6 px-5 p-3 text-sm rounded-md" /> <br />
              <input type="submit" value="Send" className="cursor-pointer text-white bg-customRed p-3 px-7 rounded-lg text-base font-light mt-5" />
            </form>
          </div>
        </div>
        {images && (
        <div className="col-span-1 md:col-span-4 lg:col-span-5 flex justify-center">
          <img src={images} alt="Profile-Picture" className="w-full h-full object-cover" />
        </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Hire;
