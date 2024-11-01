// components/TypingEffect.js
import { useEffect, useState } from 'react';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 100; // Tiempo en ms para escribir
  const deletingSpeed = 50; // Tiempo en ms para borrar
  const pauseDuration = 2000; // Tiempo en ms de pausa antes de volver a empezar

  useEffect(() => {
    let timeout;

    if (!isDeleting && index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        setIndex(index - 1);
      }, deletingSpeed);
    }
    if(index === 0){
        setIsDeleting(false);
        console.log("finish");
    }
    // Cambiar a estado de borrado al completar el texto
    if (index === text.length) {
      setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } 

    return () => clearTimeout(timeout);
  }, [displayText, index, isDeleting, text]);

  return (
    <span className="font-mono">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;
