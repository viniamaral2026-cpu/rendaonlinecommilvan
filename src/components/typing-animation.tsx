'use client';

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  className?: string;
}

export const TypingAnimation = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 2000,
  className = '',
}: TypingAnimationProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setSpeed(deletingSpeed);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setSpeed(typingSpeed);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setSpeed(typingSpeed);
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, speed, phrases, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse ml-1 text-green-500">|</span>
    </span>
  );
};
