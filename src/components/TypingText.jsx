// import React, { useEffect, useState } from 'react';

// const TypingTextAnimation = ({ text, speed = 100 }) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (currentIndex < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + text[currentIndex]);
//         setCurrentIndex((prev) => prev + 1);
//       }, speed);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, text, speed]);

//   return (
//     <div className="text-2xl xxxs:text-23xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-customRed font-montserrat px-0 sm:px-16">
//       {displayedText}
//       <span className="blink">|</span>
//     </div>
//   );
// };

// export default TypingTextAnimation;


// TypingTextAnimation.js
import React, { useEffect, useState } from 'react';

const TypingTextAnimation = ({ texts, speed = 100, backSpeed = 50, loop = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return; // No texts available

    const currentText = texts[textIndex];

    const handleTyping = () => {
      let updatedText = isDeleting
        ? currentText.slice(0, displayedText.length - 1)
        : currentText.slice(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      const typingSpeed = isDeleting ? backSpeed : speed;

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before starting to delete
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (loop ? (prevIndex + 1) % texts.length : prevIndex + 1));
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, textIndex, texts, speed, backSpeed, loop]);

  return (
    <div className="text-2xl xxxs:text-23xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-customRed font-montserrat px-0 sm:px-16">
      {displayedText}
      <span className="blink">|</span>
    </div>
  );
};

export default TypingTextAnimation;
