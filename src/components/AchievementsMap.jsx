import React from 'react';
import { MapPin, Trophy, Users, Award } from 'lucide-react';

export default function AchievementsMap() {
  return (
    <section className="py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
        <div 
          className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-700/50" 
          data-aos="zoom-in"
        >
          {/* Dark luxury map background */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
              alt="World Map Topology" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

          <div className="relative z-10 p-12 md:p-20 lg:w-2/3">
            <span className="text-shreeyash-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Global Footprint</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-6">
              Recognized Accurately <br/> Across Borders.
            </h2>
            <p className="text-slate-300 mb-12 leading-relaxed text-lg max-w-xl">
              Our commitment to medical excellence has established Shreeyash as a premier destination for healthcare, serving patients globally with unparalleled success rates.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <Trophy className="text-shreeyash-accent mb-4" size={32} />
                <h4 className="text-3xl font-serif font-bold text-white mb-1">#1</h4>
                <p className="text-xs uppercase tracking-widest text-slate-400">In Robotic<br/>Surgery</p>
              </div>
              <div>
                <Users className="text-shreeyash-accent mb-4" size={32} />
                <h4 className="text-3xl font-serif font-bold text-white mb-1">94+</h4>
                <p className="text-xs uppercase tracking-widest text-slate-400">Nations<br/>Served</p>
              </div>
              <div>
                <Award className="text-shreeyash-accent mb-4" size={32} />
                <h4 className="text-3xl font-serif font-bold text-white mb-1">JCI</h4>
                <p className="text-xs uppercase tracking-widest text-slate-400">Gold<br/>Accreditation</p>
              </div>
              <div>
                <MapPin className="text-shreeyash-accent mb-4" size={32} />
                <h4 className="text-3xl font-serif font-bold text-white mb-1">12</h4>
                <p className="text-xs uppercase tracking-widest text-slate-400">International<br/>Centers</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
