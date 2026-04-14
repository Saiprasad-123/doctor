import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import ImageSequence from './components/ImageSequence';
import Footer from './components/Footer';

import AboutUs from './components/AboutUs';
import DoctorTeam from './components/DoctorTeam';
import Testimonials from './components/Testimonials';
import AchievementsMap from './components/AchievementsMap';
import ContactUs from './components/ContactUs';

import { HeartPulse, Microscope, ShieldCheck, Stethoscope, ChevronRight } from 'lucide-react';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <div className="w-full font-sans bg-transparent">
      <Preloader />
      <Navbar />

      {/* 
        ARCHITECTURAL SEQUENCE BACKDROP
        We retain the 40-frame sequence as the ultimate premium 
        "architecture" background, strictly styled with dark overlays.
      */}
      <ImageSequence />

      {/* 
        FOREGROUND CONTENT
        Highly structured, professional "Apple-level" clean typography.
        Uses AOS to fade up luxury hospital elements above the sequence.
      */}
      <div className="relative z-10 w-full" style={{ minHeight: '300vh' }}>
        
        {/* HERO SECTION */}
        <div className="min-h-screen md:h-[150vh] flex flex-col items-center justify-center pointer-events-none relative py-32 md:py-0">
           <div 
             className="bg-white/80 backdrop-blur-3xl px-6 py-10 sm:px-10 sm:py-16 md:px-16 md:py-20 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_10px_30px_rgb(0,0,0,0.06)] border-t-[4px] md:border-t-[6px] border-shreeyash-green text-center max-w-4xl mx-4 sm:mx-6 pointer-events-auto mt-12 md:mt-20"
             data-aos="fade-up"
           >
              <p className="text-shreeyash-accent font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-xs mb-3 md:mb-6">
                Redefining Healthcare
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-slate-900 font-bold leading-tight mb-4 md:mb-8">
                Where Excellence <br className="hidden sm:block"/> Meets Compassion.
              </h1>
              <p className="text-sm md:text-lg text-slate-600/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Step into a world-class facility designed strictly for uncompromising clinical outcomes, advanced robotic surgery, and dedicated 5-star patient recovery.
              </p>
              <button onClick={() => { const el = document.getElementById('contact'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({top: y, behavior: 'smooth'}); } }} className="px-8 py-4 md:px-10 md:py-5 text-[10px] md:text-sm font-bold text-white uppercase tracking-widest bg-shreeyash-emerald hover:bg-shreeyash-green transition-all duration-300 rounded-[1.5rem] shadow-lg inline-flex items-center justify-center gap-3 w-full sm:w-auto">
                Request a Consultation <ChevronRight size={18} />
              </button>
           </div>
        </div>

        <AboutUs />

        {/* EXPERTISE & SERVICES */}
        <div id="expertise" className="min-h-screen py-24 flex flex-col justify-center overflow-hidden relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pointer-events-auto">
             <div className="bg-white/85 backdrop-blur-3xl p-6 sm:p-8 md:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_10px_30px_rgb(0,0,0,0.06)] border-l-[4px] md:border-l-[8px] border-shreeyash-accent" data-aos="fade-right">
                <div className="mb-10 md:mb-14 text-center md:text-left">
                  <span className="text-shreeyash-accent font-bold tracking-[0.3em] uppercase text-[9px] mb-3 block">Expertise & Services</span>
                  <h2 className="text-3xl md:text-5xl font-serif text-slate-900 font-bold mb-3">Centers of Excellence.</h2>
                  <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto md:mx-0">Integrative, multi-disciplinary care delivered by globally acclaimed specialists.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   {/* Card 1 */}
                   <div className="flex gap-6 group hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      <div className="w-14 h-14 shrink-0 bg-slate-50 text-shreeyash-emerald flex items-center justify-center rounded-xl border border-slate-200 shadow-sm group-hover:border-shreeyash-accent transition-colors">
                        <HeartPulse size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-serif text-slate-900 mb-2 group-hover:text-shreeyash-green transition-colors">Institute of Cardiology</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-3">Pioneering complex cardiovascular procedures, comprehensive heart diagnostics, and post-operative critical care.</p>
                        <span className="text-[10px] font-bold text-shreeyash-accent uppercase tracking-widest flex items-center gap-2">Learn More <ChevronRight size={14}/></span>
                      </div>
                   </div>
                   
                   {/* Card 2 */}
                   <div className="flex gap-6 group hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      <div className="w-14 h-14 shrink-0 bg-slate-50 text-shreeyash-emerald flex items-center justify-center rounded-xl border border-slate-200 shadow-sm group-hover:border-shreeyash-accent transition-colors">
                        <Microscope size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-serif text-slate-900 mb-2 group-hover:text-shreeyash-green transition-colors">Advanced Neurology</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-3">Dedicated to complex functional neurosurgeries, stroke management, and AI-enabled neuro-diagnostics.</p>
                        <span className="text-[10px] font-bold text-shreeyash-accent uppercase tracking-widest flex items-center gap-2">Learn More <ChevronRight size={14}/></span>
                      </div>
                   </div>

                   {/* Card 3 */}
                   <div className="flex gap-6 group hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      <div className="w-14 h-14 shrink-0 bg-slate-50 text-shreeyash-emerald flex items-center justify-center rounded-xl border border-slate-200 shadow-sm group-hover:border-shreeyash-accent transition-colors">
                        <ShieldCheck size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-serif text-slate-900 mb-2 group-hover:text-shreeyash-green transition-colors">Oncology Center</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-3">Integrative tumor boards, precision radiation therapy, and empathetic holistic patient support teams.</p>
                        <span className="text-[10px] font-bold text-shreeyash-accent uppercase tracking-widest flex items-center gap-2">Learn More <ChevronRight size={14}/></span>
                      </div>
                   </div>

                   {/* Card 4 */}
                   <div className="flex gap-6 group hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      <div className="w-14 h-14 shrink-0 bg-slate-50 text-shreeyash-emerald flex items-center justify-center rounded-xl border border-slate-200 shadow-sm group-hover:border-shreeyash-accent transition-colors">
                        <Stethoscope size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-serif text-slate-900 mb-2 group-hover:text-shreeyash-green transition-colors">Robotic Surgery</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-3">Featuring the latest Da Vinci systems for highly precise, minimally invasive procedures maximizing recovery speed.</p>
                        <span className="text-[10px] font-bold text-shreeyash-accent uppercase tracking-widest flex items-center gap-2">Learn More <ChevronRight size={14}/></span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <DoctorTeam />
        <AchievementsMap />
        <Testimonials />

        {/* STATS HIGHLIGHT */}
        <div className="min-h-[50vh] flex items-center justify-center relative z-10 py-12">
           <div className="max-w-6xl w-full mx-auto px-6 pointer-events-auto">
              <div className="bg-shreeyash-emerald text-white p-12 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden" data-aos="fade-up">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-shreeyash-green rounded-full blur-[80px] opacity-60 -translate-y-1/2 translate-x-1/2"></div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/20 relative z-10">
                    <div className="md:pr-10">
                       <h4 className="text-5xl font-serif font-bold text-shreeyash-accent mb-2">50<span className="text-3xl">+</span></h4>
                       <p className="text-[10px] font-bold tracking-widest uppercase">Global Specialists</p>
                    </div>
                    <div className="md:px-10 pt-10 md:pt-0">
                       <h4 className="text-5xl font-serif font-bold text-shreeyash-accent mb-2">24<span className="text-3xl">/</span>7</h4>
                       <p className="text-[10px] font-bold tracking-widest uppercase">Emergency Care</p>
                    </div>
                    <div className="md:pl-10 pt-10 md:pt-0">
                       <h4 className="text-5xl font-serif font-bold text-shreeyash-accent mb-2">15k<span className="text-3xl">+</span></h4>
                       <p className="text-[10px] font-bold tracking-widest uppercase">Lives Healed</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <ContactUs />

      </div>

      <Footer />
    </div>
  );
}

export default App;
