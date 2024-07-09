import React, { useState } from 'react';
// import Mee from "../assets/images/Mee.jpg";
 import Hellos from "../assets/images/logo-symbol-dark.png";

 import   { useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Hello = () => {

  const [skills, setSkills] = useState([]);
  const [awards, setAwards] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  // const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'skills'));
      const contactsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSkills(contactsArray);
     
    };

    fetchContacts();
  }, []);


  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'awards'));
      const contactsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAwards(contactsArray);
     
    };

    fetchContacts();
  }, []);


  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'experiences'));
      const contactsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setExperiences(contactsArray);
     
    };

    fetchContacts();
  }, []);


  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'education'));
      const contactsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEducations(contactsArray);
     
    };

    fetchContacts();
  }, []);


  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'images'));
  //     const contactsArray = querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  //     setImages(contactsArray);
     
  //   };

  //   fetchContacts();
  // }, []);


  const [activeTab, setActiveTab] = useState('main-skills');

  const renderContent = () => {
    switch (activeTab) {
      case 'main-skills':
        return <div> <div>
          <span className='text-base font-medium text-fontColor mx-5'>User experience design - <span className='font-normal ext-base'>UI/UX</span></span>
          <p className='text-base text-fontColor font-normal mx-5'>Delight the user and make it work.</p> </div>
          <div className='mt-5'>
          <span className='text-base font-medium text-fontColor mx-5'>Web and user interface design - <span className='font-normal ext-base'>Development</span></span>
          <p className='text-base text-fontColor font-normal mx-5'>Websites, web experiences,..</p> </div>
          <div className='mt-5'>
          <span className='text-base font-medium text-fontColor mx-5'>Interaction design - <span className='font-normal ext-base'>Animation</span></span>
          <p className='text-base text-fontColor font-normal mx-5'>I like to move it.</p> </div>

        
          {skills.map((skill) => {
  const contentParts = skill.content.split(' ');
  const firstWord = contentParts[0];
  const remainingContent = contentParts.slice(1).join(' ');

  return (
    <div key={skill.id} className='mt-5'>
      <span className='text-base font-medium text-fontColor mx-5'>
        {skill.title} - <span className='font-normal text-base'>{firstWord}</span>
      </span>
      <div className='text-base font-normal text-fontColor mx-5'>
        {remainingContent}
      </div>
    </div>
  );
})}

          </div>;
         
         
      case 'awards':
        return <div><div>
        <span className='text-base font-medium text-fontColor mx-5'>Awardds.com- <span className='font-normal ext-base'>Winner</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2019-2020</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>CSS design awards - <span className='font-normal ext-base'>Winner</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2020-2021</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>Design nominees - <span className='font-normal ext-base'>Site of the day</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2021-2022</p> </div>
        
        
        {awards.map((award) => {
  return (
    <div key={award.id} className='mt-5'>
      <span className='text-base font-medium text-fontColor mx-5'>
        {award.awards} - <span className='font-normal text-base'>{award.title}</span>
      </span>
      <div className='text-base font-normal text-fontColor mx-5'>
        {award.year}
      </div>
    </div>
  );
})}
        
        </div>;

      case 'experience':
        return <div><div>
        <span className='text-base font-medium text-fontColor mx-5'>Front-end Developer - <span className='font-normal ext-base'>Xeven Solution</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2023-current</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>Vitual Assistant - <span className='font-normal ext-base'>Commerce Cloud</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2021-23</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>Graphic designer - <span className='font-normal ext-base'>Digital Estimation LLC</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2021</p> </div>

        {experiences.map((experience) => {
  return (
    <div key={experience.id} className='mt-5'>
      <span className='text-base font-medium text-fontColor mx-5'>
        {experience.designation} - <span className='font-normal text-base'>{experience.company}</span>
      </span>
      <div className='text-base font-normal text-fontColor mx-5'>
        {experience.year}
      </div>
    </div>
  );
})}        
        
        </div>;


      case 'education-certification':
        return <div>
          
          {educations.map((education) => {
  return (
    <div key={education.id} className='mb-5'>
      <span className='text-base font-medium text-fontColor mx-5'>
        {education.degree} - <span className='font-normal text-base'>{education.institute}</span>
      </span>
      <div className='text-base font-normal text-fontColor mx-5'>
        {education.year}
      </div>
    </div>
  );
})}  

          <div>
        <span className='text-base font-medium text-fontColor mx-5'>BSCS Computer Sciences - <span className='font-normal ext-base'>University of South Asia</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2019-2023</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>F.Sc Pre-Engineering - <span className='font-normal ext-base'>Govt. College of Science</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2017-2019</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>Matric - <span className='font-normal ext-base'>Govt. Central Model School</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2015-2017</p> </div>
        
        </div>;
      default:
        return null;
    }
  };

  return (
    <div id='about' className="bg-customDark text-white p-12 md:p-24 lg:p-48 flex justify-center items-start">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 w-full max-w-screen-xl">
        {/* Picture */}
        <div className="col-span-1 md:col-span-4 lg:col-span-5 flex justify-center">
          <img src={Hellos} alt="Profile-Picture" className="w-full h-full object-cover"/>
        </div>
        {/* Content */}
        <div className="col-span-1 md:col-span-5 lg:col-span-7 flex flex-col justify-start text-center md:text-left">
          <div className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold relative lg:top-[-80px]">
            About Me
          </div>
          <div className="mt-4 text-lg font-poppins font-light text-fontColor relative lg:top-[-80px] text-center whitespace-break-spaces">
            <p className=''>My passion is making ideas come to life, be it working solo, as part of a team or leading a team of fellow developers. <br/> <br/>
            Your Throughout my 3 years of development experience, I worked everywhere from startups to big companies, building products from the ground up or implementing new features. <br/>  <br/>
            My go-to technologies are React.js and ASP.NET and I have completed a wide range of projects using them. I'm always happy to discuss my client's needs and find the best solutions for them. <br/>  <br/>
            I consider myself creative and hardworking, as my stats show. If you liked my profile so far, drop me a message and we'll discuss how I can be useful to your project.</p> 
          </div>

          <div>
          <ul className='flex flex-wrap'>
          <li
            className={`font-poppins font-medium text-lg mx-5 cursor-pointer relative ${activeTab === 'main-skills' ? 'text-customRed' : ''}`}
            onClick={() => setActiveTab('main-skills')}
          >
            Main skills
            <span className={`underline-animation ${activeTab === 'main-skills' ? 'underline-active' : ''}`}></span>
          </li>

          <li
            className={`font-poppins font-medium text-lg mx-5 cursor-pointer relative ${activeTab === 'awards' ? 'text-customRed' : ''}`}
            onClick={() => setActiveTab('awards')}
          >
            Awards
            <span className={`underline-animation ${activeTab === 'awards' ? 'underline-active' : ''}`}></span>
          </li>

          <li
            className={`font-poppins font-medium text-lg mx-5 cursor-pointer relative ${activeTab === 'experience' ? 'text-customRed' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
            <span className={`underline-animation ${activeTab === 'experience' ? 'underline-active' : ''}`}></span>
          </li>
          <li
            className={`font-poppins font-medium text-lg mx-5 cursor-pointer relative ${activeTab === 'education-certification' ? 'text-customRed' : ''}`}
            onClick={() => setActiveTab('education-certification')}
          >
            Education & Certification 
             <span className={`underline-animation ${activeTab === 'education-certification' ? 'underline-active' : ''}`}></span>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        {renderContent()}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hello;
