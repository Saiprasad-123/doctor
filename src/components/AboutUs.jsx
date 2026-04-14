import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pointer-events-auto">
        <div className="bg-white/85 backdrop-blur-3xl rounded-[2rem] p-6 sm:p-8 lg:p-16 shadow-[0_10px_30px_rgb(0,0,0,0.06)] border-r-4 border-shreeyash-green" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern Hospital Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-shreeyash-emerald p-8 rounded-2xl text-white shadow-2xl hidden md:block">
                <p className="text-4xl font-serif font-bold mb-1">20+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Years of<br/>Excellence</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-shreeyash-accent font-bold tracking-[0.3em] uppercase text-[9px] mb-3 md:mb-4 block">About Shreeyash</span>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 font-bold leading-tight mb-4 md:mb-6">
                Redefining the <br/>Standard of Care.
              </h2>
              <p className="text-slate-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                Shreeyash Hospital is a globally recognized multi-specialty institution dedicated to integrating cutting-edge clinical technology with profound human compassion.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 className="text-shreeyash-green w-4 h-4 mt-0.5 flex-shrink-0" />
                  State-of-the-art infrastructure.
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-shreeyash-green w-5 h-5 flex-shrink-0" />
                  Globally acclaimed specialists and surgeons.
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-shreeyash-green w-5 h-5 flex-shrink-0" />
                  Comprehensive, holistic patient recovery protocols.
                </li>
              </ul>
              
              <button className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b-2 border-shreeyash-green pb-1 flex items-center gap-2 group hover:text-shreeyash-green transition-colors">
                Discover Our Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
