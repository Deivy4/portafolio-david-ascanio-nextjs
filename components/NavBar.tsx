"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
export default function NavBar() {
  
  const [isOpen, setIsOpen] = useState(false)
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 756 && setIsOpen(false),
    );
  }, []);
  

  const openItems = ({classUl} : {classUl : string}) =>{
    return (
      <ul className={classUl}>
        <li>
          <Link href="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">About me</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </li>
      </ul>
    )
  }
  const renderBtnMovil = ({onClicked, path} : {onClicked : any, path : string})=>{
    return (
        <button 
            className="md:hidden text-white"
            onClick={onClicked}
          >
            <svg className={`w-6 h-6`}  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`${path}`}></path>
            </svg>
        </button>
    )
  }
  return ProcessComponentsNavBar({isOpen, setIsOpen, openItems, renderBtnMovil})
}

function ProcessComponentsNavBar({isOpen, setIsOpen, openItems, renderBtnMovil}
    :{ isOpen : boolean, setIsOpen : any, openItems : any, renderBtnMovil : any}
){

  const updateOpen = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-gray-800 text-white p-4 min-w-96 ">
      <div className={`justify-between font-custom container mx-auto flex  items-center`}>
        <h1 className="text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </h1>
        {
          renderBtnMovil({onClicked : updateOpen ,path : (isOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 10H20V12H4V10Z")})
        }
        
        {openItems({classUl : isOpen ? "flex flex-col" : "hidden md:flex space-x-4"})}

      </div>
    </nav>
  );
}