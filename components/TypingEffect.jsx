import { useEffect, useState } from 'react';

const TypingEffect = ({ listTextTyping }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(listTextTyping[0] || "");
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 100; // Tiempo en ms para escribir
  const deletingSpeed = 50; // Tiempo en ms para borrar
  const pauseDuration = 2000; // Tiempo en ms de pausa antes de volver a empezar

  useEffect(() => {
    setCurrentText(listTextTyping[currentIndex]);
    setIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [currentIndex, listTextTyping]);

  useEffect(() => {
    let timeout;
    // Evitar lógica si no hay texto
    if (currentText.length === 0) return;

    if (!isDeleting && index <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, index));
        setIndex(index - 1);
      }, deletingSpeed);
    }

    // Cambiar a estado de borrado al completar el texto
    if (index === currentText.length) {
      setTimeout(() => {
         setIsDeleting(true);
      }, pauseDuration);
    }

    if (index === -1) {
      console.log("ttets");

      setTimeout(() => {
        let indexNext = (currentIndex+1) == listTextTyping.length ? 0 : (currentIndex+1)
        setCurrentIndex(indexNext);     
      }, 1000);
      
      // setIsDeleting(false);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [index, isDeleting, currentText, listTextTyping]);

  return (
    <span translate='no' className="font-mono">
      {displayText}
      <span className="animate-pulse ease-in-out">|</span>
    </span>
  );
};

export default TypingEffect;
