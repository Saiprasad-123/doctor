import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Expertise', id: 'expertise' },
    { name: 'Doctors', id: 'doctors' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 pointer-events-auto ${
        isScrolled ? 'bg-white/95 backdrop-blur-3xl shadow-[0_4px_30px_rgb(0,0,0,0.05)] py-2 border-b border-slate-200' : 'bg-white/80 backdrop-blur-2xl py-3 border-b border-white/50'
      }`}>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-shreeyash-emerald p-2 rounded text-white shadow-lg group-hover:bg-shreeyash-green transition-colors">
              <Activity size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
               <span className="font-serif text-slate-900 text-lg font-bold tracking-tight leading-none">SHREEYASH</span>
               <span className="font-bold tracking-[0.3em] uppercase text-shreeyash-accent text-[6px] mt-0.5">Hospital</span>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden xl:flex items-center space-x-10 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            {navLinks.map((link) => (
              <li key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-shreeyash-green cursor-pointer transition-colors relative group">
                {link.name}
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-shreeyash-accent group-hover:w-full transition-all duration-300"></div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button onClick={() => scrollToSection('contact')} className="font-bold text-white uppercase tracking-widest bg-slate-900 hover:bg-shreeyash-emerald transition-colors duration-300 flex items-center gap-2 px-6 py-3 rounded-full text-[9px] shadow-xl hover:-translate-y-0.5">
              Book Appointment
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Sleek Minimalist Mobile Toggle */}
          <div className="xl:hidden flex items-center z-[80]">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className={`flex justify-center items-center w-10 h-10 rounded-full shadow-md border outline-none transition-all duration-300 ${mobileMenuOpen ? 'bg-slate-900 text-white border-transparent' : 'bg-white text-slate-900 border-slate-200'}`}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Pristine White Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-3xl z-[60] transition-all duration-500 xl:hidden flex flex-col justify-center px-10 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-start space-y-8 w-full border-l-[3px] border-shreeyash-emerald/20 pl-6">
          {navLinks.map((link, idx) => (
            <li 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer transition-all duration-500 text-3xl font-serif text-slate-800 hover:text-shreeyash-emerald transform ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </li>
          ))}
          <li 
            className={`transition-all duration-500 transform w-full pt-6 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            <button onClick={() => scrollToSection('contact')} className="w-full font-bold text-white uppercase tracking-widest bg-shreeyash-emerald hover:bg-shreeyash-green transition-colors duration-300 py-5 rounded-[1.5rem] text-xs shadow-xl flex items-center justify-between px-8">
              Book Appointment <ChevronRight size={16} />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
