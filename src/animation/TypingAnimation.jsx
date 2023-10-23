import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = ({ text }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: text.split(',').map((word) => word.trim()), // Add .map() to remove spaces from each word
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30,
    };

    typedRef.current = new Typed('.text-slider', options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [text]);

  return (
    <span
      className="text-slider"
      style={{ color: 'red' }} // Set the color of the animated text to red
    ></span>
  );
};

export default TypingAnimation;
