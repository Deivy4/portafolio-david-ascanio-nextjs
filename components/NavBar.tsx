"use client";
import { useState, useEffect } from 'react';

import NavbarMobile from '@/components/NavBarMovil'
import NavbarDesktop from '@/components/NavbarDesktop'

export default function NavBar() {

  const [isDesktop, setIsDesktop] = useState(true);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 756);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return isDesktop ? <NavbarDesktop /> : <NavbarMobile />;

  
}
