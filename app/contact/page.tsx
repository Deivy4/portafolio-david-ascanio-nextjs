import React from 'react'
import { FaWhatsapp, FaLinkedin,  } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

export default function Contact() { 

  return (
    <div className="max-w-4xl mx-auto p-6 h-screen">
      <h1 className="text-5xl font-bold text-center mb-8 text-white font-custom">Contacto</h1>
      
      {/* Información de Contacto */}
      <section className="mb-12 text-center">
        <p className="text-lg mb-4 text-white">
          ¿Tienes alguna pregunta o quieres ponerte en contacto? ¡Estoy aquí para ayudarte!
        </p>
        <div className="flex flex-col items-center gap-6">
          <a href="mailto:daviddeveloper24@outlook.com" className="text-white hover:underline flex gap-3 items-center justify-center">
            <PiMicrosoftOutlookLogoFill className='text-2xl'/>
            Correo Electrónico: daviddeveloper24@outlook.com
          </a>
          <a target='_blank' href="https://api.whatsapp.com/send?phone=573027682857" className="text-white hover:underline flex gap-3 items-center justify-center">
            <FaWhatsapp className='text-2xl'/>
            Whatsapp: +57 302 7682857
          </a>
          <a href="https://www.linkedin.com/in/david-ascanio/" className="text-white hover:underline flex gap-3 items-center justify-center">
            <FaLinkedin className='text-2xl'/>
            LinkedIn: linkedin.com/in/david-ascanio
          </a>
        </div>
      </section>
    </div>
  );
}
