// src/components/CardProject.js
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './CardProject.module.css';

interface CardProjectTypes {
    title : string,
    description : string,
    imageUrl : string,
    url? : string,
    stateProject : string,
}

export default function CardProject({ title, description, imageUrl, url = "", stateProject } : CardProjectTypes) {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    if (url === "") return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`${isVisible ? 'scale-100' : 'scale-0'} duration-300 ease-in-out transition-transform transform bg-slate-700 text-white hover:bg-white hover:text-black`}>
      <div className='flex-1 min-w-[300px] max-w-[300px] p-4 border rounded h-full'>
        <div className='relative'>
          <img className="" src={imageUrl} alt={title} />
          <div className={`text-[15px] absolute top-0 -left-6 ${stateProject == "In progress" ? 'bg-orange-500' : stateProject == "Finished" ? 'bg-green-500' : 'none'} text-white px-1 transform -rotate-[35deg]`}>
            {stateProject}
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-xl mb-2 ">{title}</h2>
          <p className=" text-[14px]">
            {description}
          </p>
          <button
            onClick={handleClick}
            className='bg-black text-white font-bold py-2 my-2 px-2 rounded hover:bg-gray-800 transition duration-300 ease-in-out'
          >
            <FaGithub className="text-xl" />
          </button>
          {/* <div className='h-6 rounded shadow shadow-white w-full bg-orange-500 text-black flex justify-center items-center'>
            <p>In progress</p>
          </div> */}
        </div>
      </div>
    </div>
    
  );
}
