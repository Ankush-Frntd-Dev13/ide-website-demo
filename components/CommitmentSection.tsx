'use client';

import { useState, useEffect } from 'react';

const CommitmentSection = () => {
  const words = ['Leadership', 'Innovation', 'Excellence', 'Growth'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 80 : 120;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
          <span className="text-gray-900">Commitment </span>
          <span className="text-purple-600 italic">to </span>
          <span className="text-purple-600 italic">{displayText}</span>
          <span className="inline-block w-[3px] sm:w-1 h-10 sm:h-14 md:h-16 lg:h-20 bg-purple-600 ml-1 animate-pulse align-middle" />
        </h2>
      </div>
    </section>
  );
};

export default CommitmentSection;
