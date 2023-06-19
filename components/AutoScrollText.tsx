// import { useRef, useEffect, useState } from 'react';
// import { twMerge } from 'tailwind-merge';

// interface AutoScrollTextProps {
//   className?: string;
//   outsideBox?: string;
//   insideBox?: string;
//   title?: string;
//   text?: string;
//   titleTwCss?: string;
//   textTwCss?: string;
// }

// function AutoScrollText({
//   className,
//   outsideBox,
//   insideBox,
//   title,
//   text,
//   titleTwCss,
//   textTwCss,
// }: AutoScrollTextProps) {
//   const titleElementRef = useRef<HTMLHeadingElement>(null);
//   const textElementRef = useRef<HTMLParagraphElement>(null);
//   let titleAnimationId: number | null = null;
//   let textAnimationId: number | null = null;
//   const [isTitleMouseEnter, setIsTitleMouseEnter] = useState(false);
//   const [isTextMouseEnter, setIsTextMouseEnter] = useState(false);

//   useEffect(() => {
//     if (isTitleMouseEnter) {
//       cancelAnimationFrame(titleAnimationId!);
//       animateScroll(titleElementRef, 0, titleAnimationId);
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isTitleMouseEnter]);

//   useEffect(() => {
//     if (isTextMouseEnter) {
//       cancelAnimationFrame(textAnimationId!);
//       animateScroll(textElementRef, 0, textAnimationId);
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isTextMouseEnter]);

//   const handleMouseEnter = (
//     elementRef: React.RefObject<HTMLHeadingElement> | React.RefObject<HTMLParagraphElement>,
//     setIsMouseEnter: React.Dispatch<React.SetStateAction<boolean>>,
//     animationId: number | null
//   ) => {
//     setIsMouseEnter(true);
//     cancelAnimationFrame(animationId!);
//     animateScroll(elementRef, 0, animationId);
//   };

//   const handleMouseLeave = (
//     elementRef: React.RefObject<HTMLHeadingElement> | React.RefObject<HTMLParagraphElement>,
//     setIsMouseEnter: React.Dispatch<React.SetStateAction<boolean>>,
//     animationId: number | null
//   ) => {
//     setIsMouseEnter(false);
//     cancelAnimationFrame(animationId!);
//     animateScroll(elementRef, 0, animationId);
//   };

//   const animateScroll = (
//     elementRef: React.RefObject<HTMLHeadingElement> | React.RefObject<HTMLParagraphElement>,
//     targetScroll: number,
//     animationId: number | null
//   ) => {
//     const scrollableElement = elementRef.current;
//     if (!scrollableElement) return;

//     const currentScroll = elementRef === titleElementRef ? scrollableElement.scrollLeft : scrollableElement.scrollWidth - scrollableElement.clientWidth;
//     const distance = targetScroll - currentScroll;
//     const duration = 2500; // 2.5 segundos

//     let startTime: number | null = null;

//     const step = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = timestamp - startTime;

//       const scrollOffset = easeInOutQuad(progress, currentScroll, distance, duration);
//       if (elementRef === titleElementRef) {
//         scrollableElement.scrollLeft = scrollOffset;
//       } else {
//         scrollableElement.scrollLeft = scrollableElement.scrollWidth - scrollableElement.clientWidth - scrollOffset;
//       }

//       if (progress < duration && (elementRef === titleElementRef ? isTitleMouseEnter : isTextMouseEnter)) {
//         animationId = requestAnimationFrame(step);
//       } else {
//         // Resetar a posição ao finalizar a animação
//         setTimeout(() => {
//           scrollableElement.scrollLeft = 0;
//         }, 1800) //1,8 segundos
//       }
//     };

//     animationId = requestAnimationFrame(step);
//   };

//   const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   };

//   return (
//     <div className={twMerge('container', className)}>
//       <div className="scrollable-container overflow-hidden">
//         <h2
//           style={{
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//             '&::-webkit-scrollbar': { display: 'none' },
//           } as React.CSSProperties }
//           ref={titleElementRef}
//           onMouseEnter={() => handleMouseEnter(titleElementRef, setIsTitleMouseEnter, titleAnimationId)}
//           onMouseLeave={() => handleMouseLeave(titleElementRef, setIsTitleMouseEnter, titleAnimationId)}
//           className={twMerge('overflow-auto', titleTwCss)}
//         >
//           {title}
//         </h2>

//         <p
//           style={{
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//             '&::-webkit-scrollbar': { display: 'none' },
//           } as React.CSSProperties }
//           ref={textElementRef}
//           onMouseEnter={() => handleMouseEnter(textElementRef, setIsTextMouseEnter, textAnimationId)}
//           onMouseLeave={() => handleMouseLeave(textElementRef, setIsTextMouseEnter, textAnimationId)}
//           className={twMerge('overflow-auto', textTwCss)}
//         >
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AutoScrollText;


import { useRef, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface AutoScrollTextProps {
  className?: string;
  outsideBox?: string;
  insideBox?: string;
  title?: string;
  text?: string;
  titleTwCss?: string;
  textTwCss?: string;
}

function AutoScrollText({
  className,
  outsideBox,
  insideBox,
  title,
  text,
  titleTwCss,
  textTwCss,
}: AutoScrollTextProps) {
  const titleElementRef = useRef<HTMLSpanElement>(null);
  const textElementRef = useRef<HTMLParagraphElement>(null);
  let titleAnimationId: number | null = null;
  let textAnimationId: number | null = null;
  const [isTitleMouseEnter, setIsTitleMouseEnter] = useState(false);
  const [isTextMouseEnter, setIsTextMouseEnter] = useState(false);

  useEffect(() => {
    if (isTitleMouseEnter) {
      cancelAnimationFrame(titleAnimationId!);
      animateScroll(titleElementRef, 0, titleAnimationId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTitleMouseEnter]);

  useEffect(() => {
    if (isTextMouseEnter) {
      cancelAnimationFrame(textAnimationId!);
      animateScroll(textElementRef, 0, textAnimationId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTextMouseEnter]);

  const handleMouseEnter = (
    elementRef: React.RefObject<HTMLSpanElement> | React.RefObject<HTMLParagraphElement>,
    setIsMouseEnter: React.Dispatch<React.SetStateAction<boolean>>,
    animationId: number | null
  ) => {
    setIsMouseEnter(true);
    cancelAnimationFrame(animationId!);
    animateScroll(elementRef, 0, animationId);
  };

  const handleMouseLeave = (
    elementRef: React.RefObject<HTMLSpanElement> | React.RefObject<HTMLParagraphElement>,
    setIsMouseEnter: React.Dispatch<React.SetStateAction<boolean>>,
    animationId: number | null
  ) => {
    setIsMouseEnter(false);
    cancelAnimationFrame(animationId!);
    animateScroll(elementRef, 0, animationId);
  };

  const animateScroll = (
    elementRef: React.RefObject<HTMLSpanElement> | React.RefObject<HTMLParagraphElement>,
    targetScroll: number,
    animationId: number | null
  ) => {
    const scrollableElement = elementRef.current;
    if (!scrollableElement) return;

    const currentScroll = elementRef === titleElementRef ? scrollableElement.scrollLeft : scrollableElement.scrollWidth - scrollableElement.clientWidth;
    const distance = targetScroll - currentScroll;
    const duration = 2500; // 2.5 segundos

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const scrollOffset = easeInOutQuad(progress, currentScroll, distance, duration);
      if (elementRef === titleElementRef) {
        scrollableElement.scrollLeft = scrollOffset;
      } else {
        scrollableElement.scrollLeft = scrollableElement.scrollWidth - scrollableElement.clientWidth - scrollOffset;
      }

      if (progress < duration && (elementRef === titleElementRef ? isTitleMouseEnter : isTextMouseEnter)) {
        animationId = requestAnimationFrame(step);
      } else {
        // Resetar a posição ao finalizar a animação
        setTimeout(() => {
          scrollableElement.scrollLeft = 0;
        }, 1800); // 1,8 segundos
      }
    };

    animationId = requestAnimationFrame(step);
  };

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <div className={twMerge('container', className)}>
      <div className="scrollable-container overflow-hidden">
        <span
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          } as React.CSSProperties}
          ref={titleElementRef}
          onMouseEnter={() => handleMouseEnter(titleElementRef, setIsTitleMouseEnter, titleAnimationId)}
          onMouseLeave={() => handleMouseLeave(titleElementRef, setIsTitleMouseEnter, titleAnimationId)}
          className={twMerge('overflow-auto', titleTwCss)}
        >
          {title}
        </span>

        <p
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          } as React.CSSProperties}
          ref={textElementRef}
          onMouseEnter={() => handleMouseEnter(textElementRef, setIsTextMouseEnter, textAnimationId)}
          onMouseLeave={() => handleMouseLeave(textElementRef, setIsTextMouseEnter, textAnimationId)}
          className={twMerge('overflow-auto', textTwCss)}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default AutoScrollText;
