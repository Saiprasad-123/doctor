import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const logoTextRef = useRef(null);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setComplete(true);
        document.body.style.overflow = "auto";
      }
    });

    // 1. Draw the heartbeat path
    tl.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut",
    })
    // 2. Pulse the entire SVG slightly
    .to(".hospital-sign", {
      scale: 1.1,
      yoyo: true,
      repeat: 1,
      duration: 0.3,
      ease: "power1.inOut"
    }, "-=0.3")
    // 3. Fade in text
    .fromTo(logoTextRef.current, { opacity: 0, y: 10 }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    // 4. Slide preloader...
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
      delay: 0.5,
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%'
    });

    return () => {
      // Cleanup
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, []);

  if (complete) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <div className="hospital-sign w-32 h-32 mb-6">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-shreeyash-green"
        >
          {/* A medical cross combined with a heartbeat line */}
          <path 
            ref={pathRef}
            d="M 10,50 L 30,50 L 40,20 L 60,80 L 70,50 L 90,50 M 50,15 L 50,85 M 15,50 L 85,50" 
            stroke="currentColor" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            style={{ 
              strokeDasharray: "300", 
              strokeDashoffset: "300" // start hidden
            }}
          />
        </svg>
      </div>
      
      <div ref={logoTextRef} className="text-center opacity-0">
        <h2 className="text-4xl font-serif font-bold text-shreeyash-emerald tracking-wide">SHREEYASH</h2>
        <p className="text-sm font-semibold tracking-[0.3em] text-shreeyash-accent uppercase mt-2">Hospital</p>
      </div>
    </div>
  );
}
