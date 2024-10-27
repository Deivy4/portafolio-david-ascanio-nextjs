import React from 'react'
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    
  return (
    <div className={ `relative h-48 bg-gray-800 text-white`}>
        <div className='grid grid-cols-2 mx-auto container p-6'>
          <ul className='flex flex-col gap-4 items-start text-1xl '>
            <a target='_blank' href = {"https://api.whatsapp.com/send?phone=573027682857"}>
              <li className='flex gap-2 justify-center items-center'> <FaWhatsapp className='mb-[2px]'/>Whatsapp</li>
            </a>
            <a target='_blank' href = {"https://www.linkedin.com/in/david-ascanio/"}>
              <li className='flex gap-2 justify-center items-center'> <FaLinkedin className='mb-[2px]'/> Linkedin</li>
            </a>
          </ul>
        </div>
        <div className='relative h-[40%]'>
          <div className="absolute bottom-0 left-0 right-0 text-center">
              <p className="text-sm">Derechos reservados &copy; 2024</p>
          </div>
        </div>
    </div>
  )
}
