// // src/components/ContactList.js
// import React, { useEffect, useState } from 'react';
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';

// const ContactList = () => {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       const querySnapshot = await getDocs(collection(db, 'skills'));
//       const contactsArray = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setSkills(contactsArray);
//     };

//     fetchContacts();
//   }, []);

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded shadow">
//       <h2 className="text-center text-2xl font-bold mb-4">Contact List</h2>
//       <ul>
//         {skills.map(skills => (
//           <li key={skills.id} className="mb-4">
//             <h3 className="text-xl font-semibold">{skills.title}</h3>
//             <p className="text-sm text-gray-700">{skills.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactList;
