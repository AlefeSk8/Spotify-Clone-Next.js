import React, { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

interface AutoScrollTextProps {
  className?: string;
  text: string;
}

function AutoScrollText({ className, text  }: AutoScrollTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  const textRef = useRef<HTMLParagraphElement>(null);

  const keyframes = `
    @keyframes scrollText {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const isTextOverflowing = textElement.offsetWidth < textElement.scrollWidth;
      setShouldAnimate(isTextOverflowing);
    }
  }, []);

  function handleMouseEnter() {
    setIsHovered(true);
  };

  function handleMouseLeave() {
    setIsHovered(false);
  };

  const animationDurationTime = text.length / 5 * 1000; // milliseconds
  function handleTouch() {
    setIsHovered(true);

    setTimeout(() => {
      setIsHovered(false);
    }, animationDurationTime - 30) // milliseconds
  };

  // TODO: function handleClickInCard() { Execute animation };

  return (
    <>
      <p
        className={twMerge(`
          ${isHovered && shouldAnimate ? 'scroll-animation' : ''}
        `, 
          className
        )}
        ref={textRef}
        style={{
          whiteSpace: 'nowrap',
          overflow: isHovered ? 'visible' : 'hidden', 
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouch}
      >
        {text}
      </p>
      <style>{keyframes}</style>
      <style jsx>{`
        .scroll-animation {
          animation: scrollText ${animationDurationTime}ms ease-out 1;
        }
      `}</style>
    </>
  );
}

export default AutoScrollText;
