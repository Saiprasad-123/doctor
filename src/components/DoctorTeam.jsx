import React from 'react';
import { ArrowRight } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Sarah Jenkins",
    title: "Chief of Neurosurgery",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Marcus Chen",
    title: "Head of Cardiology",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Elena Rossi",
    title: "Lead Robotic Surgeon",
    img: "https://images.unsplash.com/photo-1594824406935-df45d4705ec4?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. David Thorne",
    title: "Chief of Oncology",
    img: "https://images.unsplash.com/photo-1537368910025-7028a4113dce?q=80&w=800&auto=format&fit=crop"
  }
];

export default function DoctorTeam() {
  return (
    <section id="doctors" className="py-20 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pointer-events-auto">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <span className="text-shreeyash-accent font-bold tracking-[0.3em] uppercase text-[9px] mb-3 block">Our Experts</span>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 font-bold leading-tight bg-white/85 backdrop-blur-3xl inline-block px-6 py-2 md:px-10 md:py-3 rounded-[1.5rem] md:rounded-[2rem] shadow-lg">
            We are here to help.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doc, idx) => (
            <div 
              key={idx} 
              className="group bg-white/95 backdrop-blur-3xl rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-transparent hover:border-shreeyash-accent"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-serif font-bold">{doc.name}</h3>
                  <p className="text-shreeyash-accent text-[10px] uppercase tracking-widest font-bold mt-1">{doc.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <button className="bg-slate-900 hover:bg-shreeyash-emerald text-white font-bold text-[11px] tracking-[0.2em] uppercase px-10 py-4 rounded shadow-lg transition-all flex items-center justify-center gap-3 mx-auto group">
            View All Specialists <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>
      </div>
    </section>
  );
}
