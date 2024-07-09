import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Service = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'services'));
      const contactsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setServices(contactsArray);
     
    };

    fetchContacts();
  }, []);

  return (
<div id="service" className="bg-blackColor flex flex-col items-center p-10 lg:p-28 font-poppins">
<div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        My Awesome Service
        <div className="text-lg font-light text-fontColor text-center mt-5">
          Things I'm skilled at and passionate about.
        </div>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


      {services.map((service) => {
  return (
    <div key={service.id} >
      <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faDesktop}
              className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
            />
          </h3>
          <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
           {service.title}
          </p>
          <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
            {service.content}
          </p>
        </div>

    </div>  
  );
})}



        {/* <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faDesktop}
              className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
            />
          </h3>
          <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
            Web Application Development
          </p>
          <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
            Fast, responsive and engaging apps that bring your ideas to life.
          </p>
        </div>

        <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faGears}
              className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
            />
          </h3>
          <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
            Web Application Development
          </p>
          <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
            Fast, responsive and engaging apps that bring your ideas to life.
          </p>
        </div>

        <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faUser}
              className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
            />
          </h3>
          <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
            Web Application Development
          </p>
          <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
            Fast, responsive and engaging apps that bring your ideas to life.
          </p>
        </div>

        <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faDesktop}
              className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
            />
          </h3>
          <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
            Web Application Development
          </p>
          <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
            Fast, responsive and engaging apps that bring your ideas to life.
          </p>
        </div>

        <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faUser}
              className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
            />
          </h3>
          <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
            Web Application Development
          </p>
          <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
            Fast, responsive and engaging apps that bring your ideas to life.
          </p>
        </div>

        <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faDesktop}
              className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
            />
          </h3>
          <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
            Web Application Development
          </p>
          <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
            Fast, responsive and engaging apps that bring your ideas to life.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Service;
