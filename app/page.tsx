"use client"
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { RxHobbyKnife } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { AiTwotoneExperiment } from "react-icons/ai";
import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function Home() {
  const textsInfo = {
    HOBBY: { title: "Hobbys", text: "..." },
    HOME: { title: "Home", text: "..." },
    EXPERIENCE: { title: "Experiencia", text: "..." },
    WHAT_SEARCH: { title: "¿Qué estoy buscando?", text: "..." }
  };

  const [selectedText, setSelectedText] = useState<string>("Home");
  const [textInfo, setTextInfo] = useState<any>(textsInfo.HOME);
  const [visible, setVisible] = useState<boolean>(false);

  const handleSelectedText = (textSelect: string) => {
    setSelectedText(textSelect);
  };

  const handleTextChange = (newText : any) => {
    setVisible(false); // Oculta el texto primero
    setTimeout(() => {
      setTextInfo(newText); // Cambia el texto después de que el texto se oculta
      setVisible(true); // Muestra el nuevo texto
    }, 1000); // Tiempo que tarda en ocultarse
  };

  useEffect(() => {
    setVisible(true); 
  }, []);

  return (
    <div className='overflow-hidden container mx-auto'>
      <div className='items-center justify-evenly text-white md:flex mt-8 md:mt-0 mb-12'>
        <div className="md:w-1/2 font-custom flex flex-col items-center">
          <h1 className='text-4xl'>Hi, I am David Ascanio</h1>
          <p className='text-4xl'>Web developer</p>
          <div className='flex gap-3'>
            <Link href={"/projects"} className='hover:bg-white hover:text-black mt-2 py-1 px-3 bg-black rounded cursor-pointer text-white'>See projects</Link>
            <a href='/curriculum_vitae_David_Ascanio.pdf' download className='hover:bg-white hover:text-black mt-2 py-1 px-3 bg-black rounded cursor-pointer text-white'>Download CV</a>
          </div>
        </div>
        <div className='md:w-1/2 justify-center flex min-w-96'>
          <Image alt="imagen perfil" width={"500"} height={"400"} src={"/programador_img.png"} />
        </div>
      </div>
      <div className='mt-20 mb-28 px-8 md:pt-0 items-center gap-4 justify-center text-white md:flex md:divide-x divide-y md:divide-y-0'>
        <div className='flex justify-center md:w-[40%]'>
          <div className='grid grid-cols-2 max-w-96 rounded-lg'>
            <div onClick={() => { handleSelectedText("Home"); handleTextChange(textsInfo.HOME); }} className='cursor-pointer flex justify-center items-center p-4'>
              <FaHome className={`${selectedText === "Home" ? 'text-cyan-500' : 'hover:text-cyan-500'} text-[86px]`} />
            </div>
            <div onClick={() => { handleSelectedText("Hobby"); handleTextChange(textsInfo.HOBBY); }} className='cursor-pointer flex justify-center items-center p-4'>
              <RxHobbyKnife className={`${selectedText === "Hobby" ? 'text-cyan-500' : 'hover:text-cyan-500'} text-[86px]`} />
            </div>
            <div onClick={() => { handleSelectedText("Search"); handleTextChange(textsInfo.WHAT_SEARCH); }} className='cursor-pointer flex justify-center items-center p-4'>
              <IoSearch className={`${selectedText === "Search" ? 'text-cyan-500' : 'hover:text-cyan-500'} text-[86px]`} />
            </div>
            <div onClick={() => { handleSelectedText("Experience"); handleTextChange(textsInfo.EXPERIENCE); }} className='cursor-pointer flex justify-center items-center p-4'>
              <AiTwotoneExperiment className={`${selectedText === "Experience" ? 'text-cyan-500' : 'hover:text-cyan-500'} text-[86px]`} />
            </div>
          </div>
        </div>
        <div className='md:w-[60%] flex justify-center items-center h-[250px]'>
          <div className='justify-center items-center flex flex-col gap-16 md:-mt-24 md:max-w-[80%]'>
            <h2 className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>{textInfo.title}</h2>
            <div className='text-center'>
              <p className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>{textInfo.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
