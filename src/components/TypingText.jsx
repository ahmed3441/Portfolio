import React, { useEffect, useState } from 'react';

const TypingTextAnimation = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="text-2xl xxxs:text-23xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-customRed font-montserrat px-0 sm:px-16">
      {displayedText}
      <span className="blink">|</span>
    </div>
  );
};

export default TypingTextAnimation;
