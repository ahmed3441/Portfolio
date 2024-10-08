import React, { useState } from 'react';
// import Mee from "../assets/images/Mee.jpg";
  // import Logo1 from "../assets/images/logo-symbol-dark.png";
 import { FaReact } from "react-icons/fa";
 import { SiRedux } from "react-icons/si";
 import { DiJqueryLogo } from "react-icons/di";
 import { SiJavascript } from "react-icons/si";
 import { SiMui } from "react-icons/si";
 import { SiTailwindcss } from "react-icons/si";
 import { FaBootstrap } from "react-icons/fa";
 import { FaHtml5 } from "react-icons/fa";
 import { FaCss3Alt } from "react-icons/fa";
 import { RiFirebaseFill } from "react-icons/ri";
 import { TbBrandMysql } from "react-icons/tb";












 import   { useEffect } from 'react';
import { db, storage } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

const Hello = () => {

  const icons = [
    { component: FaReact, label: 'React' },
    { component: SiRedux, label: 'Redux' },
    { component: DiJqueryLogo, label: 'JQuery' },
    { component: SiJavascript, label: 'JavaScript' },
    { component: SiMui, label: 'Material-UI' },
    { component: SiTailwindcss, label: 'Tailwind CSS' },
    { component: FaBootstrap, label: 'Bootstrap' },
    { component: FaHtml5, label: 'HTML5' },
    { component: FaCss3Alt, label: 'CSS3' },
    { component: RiFirebaseFill, label: 'Firebase' },
    { component: TbBrandMysql, label: 'MySQL' },
  ];
  



  // const [skills, setSkills] = useState([]);
  const [awards, setAwards] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [about, setAbout] = useState([]);

  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'skills'));
  //     const contactsArray = querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  //     setSkills(contactsArray);
     
  //   };

  //   fetchContacts();
  // }, []);

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

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, 'images'));
      const imagesArray = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          let url = null;
          if (data.url) {
            url = await getDownloadURL(ref(storage, data.url));
          }
          return {
            id: doc.id,
            ...data,
            url,
          };
        })
      );
      setImages(imagesArray);
    };

    fetchImages();
  }, []);


useEffect(() => {
  const fetchContacts = async () => {
    const querySnapshot = await getDocs(collection(db, 'about'));
    const contactsArray = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setAbout(contactsArray);
  };
  fetchContacts();
}, []);


  const [activeTab, setActiveTab] = useState('main-skills');

  const renderContent = () => {
    switch (activeTab) {
      case 'main-skills':
        return <div> 
          {/* <div>
          <span className='text-base font-medium text-fontColor mx-5'>User experience design - <span className='font-normal ext-base'>UI/UX</span></span>
          <p className='text-base text-fontColor font-normal mx-5'>Delight the user and make it work.</p> </div>
          <div className='mt-5'>
          <span className='text-base font-medium text-fontColor mx-5'>Web and user interface design - <span className='font-normal ext-base'>Development</span></span>
          <p className='text-base text-fontColor font-normal mx-5'>Websites, web experiences,..</p> </div>
          <div className='mt-5'>
          <span className='text-base font-medium text-fontColor mx-5'>Interaction design - <span className='font-normal ext-base'>Animation</span></span>
          <p className='text-base text-fontColor font-normal mx-5'>I like to move it.</p> </div> */}

        
          {/* {skills.map((skill) => {
  const contentParts = skill.content.split(' ');
  const firstWord = contentParts[0];
  const remainingContent = contentParts.slice(1).join(' ');

  return (
    <div key={skill.id} className='mb-5'>
      <span className='text-base font-medium text-fontColor mx-5'>
        {skill.title} - <span className='font-normal text-base'>{firstWord}</span>
      </span>
      <div className='text-base font-normal text-fontColor mx-5'>
        {remainingContent}
      </div>
    </div>
  );
})} */}
<div className="flex flex-wrap gap-5 my-5">
  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-5 w-[500px]">
    {icons.map(({ component: IconComponent, label }, index) => (
      <div
        key={index}
        className="w-[90px] h-[80px] bg-white border border-gray-200 shadow-lg rounded-lg flex flex-col items-center justify-center text-center"
      >
        <IconComponent className="text-4xl text-[#F9004D]" />
        <span className="mt-2 text-sm font-bold text-gray-700">{label}</span>
      </div>
    ))}
  </div>
</div>
          </div>;
          
         case 'awards':
        return <div>
          {/* <div>
        <span className='text-base font-medium text-fontColor mx-5'>Awardds.com- <span className='font-normal ext-base'>Winner</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2019-2020</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>CSS design awards - <span className='font-normal ext-base'>Winner</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2020-2021</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>Design nominees - <span className='font-normal ext-base'> </span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2021-2022</p> </div> */}
        
        
        {awards.map((award) => {
  return (
    <div key={award.id} className='mb-5'>
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
        return <div>
          {/* <div>
        <span className='text-base font-medium text-fontColor mx-5'>Front-end Developer - <span className='font-normal ext-base'>Xeven Solution</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2023-current</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>Vitual Assistant - <span className='font-normal ext-base'>Commerce Cloud</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2021-23</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>Graphic designer - <span className='font-normal ext-base'>Digital Estimation LLC</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2021</p> </div> */}

        {experiences.map((experience) => {
  return (
    <div key={experience.id} className='mb-5'>
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

          {/* <div>
        <span className='text-base font-medium text-fontColor mx-5'>BSCS Computer Sciences - <span className='font-normal ext-base'>University of South Asia</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2019-2023</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>F.Sc Pre-Engineering - <span className='font-normal ext-base'>  </span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2017-2019</p> </div>
        <div className='mt-5'>
        <span className='text-base font-medium text-fontColor mx-5'>Matric - <span className='font-normal ext-base'>Govt. Central Model School</span></span>
        <p className='text-base text-fontColor font-normal mx-5'>2015-2017</p> </div>
         */}
        </div>;
      default:
        return null;
    }
  };

  return (
    <div id='about' className="bg-customDark text-white p-12 md:p-24 lg:p-48 flex justify-center items-start">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 w-full max-w-screen-xl">
        {/* Picture */}
        {/* <div className="col-span-1 md:col-span-4 lg:col-span-5 flex justify-center">
          <img src={Hellos} alt="Profile-Picture" className="w-full h-full object-cover"/>
        </div> */}
         {/* {images && (
          <div className="col-span-1 md:col-span-4 lg:col-span-5 flex justify-center">
            <img src={images.imageUrl} alt="Fetched-Image" className="w-full h-full object-cover" />
          </div>
        )} */}
        {images.length > 0 && (
          <div className="col-span-1 md:col-span-4 lg:col-span-5 flex justify-center">
            {images.map((image) => (
              <img
                key={image.id}
                 src={image.url}
                alt="Fetched-Image"
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        )}
       
        {/* Content */}
        <div className="col-span-1 md:col-span-5 lg:col-span-7 flex flex-col justify-start text-center md:text-left">
          <div className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold relative lg:top-[-80px]">
            About Me
          </div>

          <div className="mt-4 text-lg font-poppins font-light text-fontColor relative lg:top-[-80px] text-center whitespace-break-spaces">
  {about.map((item, index) => (
    <p key={index} className="mb-4">{item.about}</p>
  ))}
</div>


{/* <div className="mt-4 text-lg font-poppins font-light text-fontColor relative lg:top-[-80px] text-center whitespace-break-spaces">
  <p className="mb-4">My passion is making ideas come to life, be it working solo, as part of a team or leading a team of fellow developers.</p>
  <p className="mb-4">Throughout my 3 years of development experience, I worked everywhere from startups to big companies, building products from the ground up or implementing new features.</p>
  <p className="mb-4">My go-to technologies are React.js and ASP.NET and I have completed a wide range of projects using them. I'm always happy to discuss my client's needs and find the best solutions for them.</p>
  <p className="mb-4">I consider myself creative and hardworking, as my stats show. If you liked my profile so far, drop me a message and we'll discuss how I can be useful to your project.</p>
</div> */}


          <div>
          <ul className='flex flex-wrap '>
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
            Awards & Certifications
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
            Education
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
