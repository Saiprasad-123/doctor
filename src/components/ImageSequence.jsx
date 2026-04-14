import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function ImageSequence() {
  const canvasRef = useRef(null);
  const totalFrames = 40;
  
  // Track entire page scroll directly from top to bottom
  const { scrollYProgress } = useScroll();
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);
  
  const images = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    let loaded = 0;
    for(let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, '0');
        img.src = `/ezgif-frame-${paddedIndex}.jpg`;
        img.onload = () => {
            loaded++;
            if (loaded === totalFrames) setImagesLoaded(totalFrames);
        };
        images.current.push(img);
    }
  }, []);

  const drawFrame = (index) => {
      if (imagesLoaded !== totalFrames) return;
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      const img = images.current[index - 1];
      if (img) {
          // Native HTML5 Canvas sizing mapping 1:1 with image dimensions.
          // This allows the CSS `object-fit: cover` to gracefully handle mobile device sizing perfectly.
          ctx.canvas.width = img.width;
          ctx.canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
      }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
      drawFrame(Math.floor(latest));
  });

  useEffect(() => {
      if (imagesLoaded === totalFrames) {
          drawFrame(1);
          // Redraw on resize just to be safe, though CSS handles the visual resizing now.
          window.addEventListener('resize', () => drawFrame(Math.floor(frameIndex.get())));
          return () => window.removeEventListener('resize', () => drawFrame(Math.floor(frameIndex.get())));
      }
  }, [imagesLoaded]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-20 bg-transparent">
      <canvas ref={canvasRef} className="w-full h-full object-cover object-center opacity-100"></canvas>
    </div>
  );
}
