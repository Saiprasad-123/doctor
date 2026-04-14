import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { 
    name: "John Doe", 
    role: "Neurology", 
    text: "The care I received at Shreeyash was beyond world-class. The facilities are modern and robotic surgery was completely painless, ensuring a remarkably fast recovery.", 
    locale: "New York, USA" 
  },
  { 
    name: "Elena Rostova", 
    role: "Oncology Care", 
    text: "A true 5-star experience. The oncology team gave me my life back. This facility feels like a luxury hotel combined with state-of-the-art medical science.", 
    locale: "London, UK" 
  },
  { 
    name: "Ahmed Al-Mansoor", 
    role: "Cardiovascular", 
    text: "Unparalleled expertise. I traveled internationally for my cardiovascular procedure, and I am incredibly happy with the dedicated care and pristine environment.", 
    locale: "Dubai, UAE" 
  },
  { 
    name: "Sarah Williams", 
    role: "Emergency Care", 
    text: "The neurological department handled my complex case with compassion and elite precision. This hospital unequivocally sets the absolute gold standard.", 
    locale: "Sydney, AUS" 
  },
  { 
    name: "Michael Chang", 
    role: "Orthopedics", 
    text: "The fastest recovery I've ever experienced thanks to their advanced minimally invasive methods. World-class treatment from the moment I checked in.", 
    locale: "Singapore" 
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pointer-events-auto">
        
        <div className="text-center mb-10" data-aos="fade-up">
           <span className="text-shreeyash-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Client Feedback</span>
           <h2 className="text-3xl md:text-4xl font-serif text-slate-900 font-bold bg-white/90 backdrop-blur-3xl inline-block px-8 py-2 rounded-full shadow-lg">Patient Stories</h2>
        </div>

        {/* Greatly Slimmed 3D Slider Area */}
        <div className="relative h-[260px] sm:h-[220px] md:h-[180px] lg:h-[160px] w-full flex items-center justify-center mt-6">
          
          <AnimatePresence mode="popLayout">
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              const isPrev = idx === (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = idx === (activeIndex + 1) % testimonials.length;

              if (!isActive && !isPrev && !isNext) return null;

              let xOffset = '0%';
              let scale = 1;
              let blur = 'blur(0px)';
              let opacity = 1;
              let zIndex = 0;

              if (isActive) {
                xOffset = '0%';
                scale = 1;
                zIndex = 10;
                opacity = 1;
              } else if (isPrev) {
                xOffset = window.innerWidth < 768 ? '-45%' : '-100%';
                scale = 0.85;
                zIndex = 5;
                opacity = 0.6;
                blur = 'blur(3px)';
              } else if (isNext) {
                xOffset = window.innerWidth < 768 ? '45%' : '100%';
                scale = 0.85;
                zIndex = 5;
                opacity = 0.6;
                blur = 'blur(3px)';
              }

              return (
                <motion.div
                  key={t.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: xOffset }}
                  animate={{ opacity, scale, x: xOffset, filter: blur, zIndex }}
                  exit={{ opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute w-[95%] sm:w-[85%] md:w-[60%] lg:w-[45%]"
                >
                  <div className={`bg-white/95 backdrop-blur-3xl rounded-[2rem] p-6 lg:px-8 lg:py-6 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border-l-[6px] ${isActive ? 'border-shreeyash-emerald' : 'border-transparent'} flex flex-col h-full pointer-events-auto transition-all duration-500 overflow-hidden relative`}>
                     
                     {/* Giant Watermark Quote inside the glass card */}
                     <Quote className="text-slate-200/40 absolute -bottom-2 -right-2 z-0 rotate-12" size={100} strokeWidth={1} />
                     
                     <div className="flex gap-1 mb-3 relative z-10">
                       {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" className="text-shreeyash-emerald" />)}
                     </div>
                     
                     <p className="flex-1 text-slate-800 text-xs sm:text-sm leading-relaxed font-medium mb-6 relative z-10">"{t.text}"</p>
                     
                     <div className="mt-auto relative z-10 flex justify-between items-end border-t border-slate-100/50 pt-4">
                       <div>
                         <h4 className="font-serif font-bold text-slate-900 text-sm leading-none mb-1.5">{t.name}</h4>
                         <span className="text-[9px] uppercase tracking-widest font-bold text-shreeyash-accent block leading-none">{t.role}</span>
                       </div>
                       <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100/50 shadow-sm">{t.locale}</span>
                     </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Slim Arrow Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-10 z-[60] pointer-events-auto">
            <button onClick={prevSlide} className="bg-white/70 backdrop-blur-md p-2.5 rounded-full shadow hover:bg-shreeyash-emerald hover:text-white transition-all transform hover:-translate-x-1 outline-none border border-slate-100">
              <ChevronLeft size={16} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-10 z-[60] pointer-events-auto">
            <button onClick={nextSlide} className="bg-white/70 backdrop-blur-md p-2.5 rounded-full shadow hover:bg-shreeyash-emerald hover:text-white transition-all transform hover:translate-x-1 outline-none border border-slate-100">
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
        
      </div>
    </section>
  );
}
