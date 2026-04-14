import React from 'react';
import { Activity, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-shreeyash-emerald border-t-[6px] border-shreeyash-accent relative z-10 w-full overflow-hidden">
      
      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
             <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded text-shreeyash-emerald shadow-lg">
                <Activity size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                 <span className="font-serif text-white text-xl font-bold tracking-tight leading-none">SHREEYASH</span>
                 <span className="font-bold tracking-[0.3em] uppercase text-shreeyash-accent text-[7px] mt-1">Multi-Specialty</span>
              </div>
             </div>
             <p className="text-slate-200/80 text-sm leading-relaxed mb-8 max-w-sm">
               World-class medical excellence delivered with profound human compassion. Since 2005.
             </p>
          </div>

          {/* Excellence */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Centers of Excellence</h4>
            <ul className="space-y-4">
              <li className="text-slate-200/80 hover:text-white text-sm cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-shreeyash-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Cardiology</li>
              <li className="text-slate-200/80 hover:text-white text-sm cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-shreeyash-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Neurology</li>
              <li className="text-slate-200/80 hover:text-white text-sm cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-shreeyash-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Oncology</li>
              <li className="text-slate-200/80 hover:text-white text-sm cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-shreeyash-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Robotic Surgery</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Patient Resources</h4>
            <ul className="space-y-4">
              <li className="text-slate-200/80 hover:text-white text-sm cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-shreeyash-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Book Appointment</li>
              <li className="text-slate-200/80 hover:text-white text-sm cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-shreeyash-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Find a Doctor</li>
              <li className="text-slate-200/80 hover:text-white text-sm cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-shreeyash-accent opacity-0 group-hover:opacity-100 transition-opacity" /> International Patients</li>
              <li className="text-slate-200/80 hover:text-white text-sm cursor-pointer transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="text-shreeyash-accent opacity-0 group-hover:opacity-100 transition-opacity" /> Testimonials</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">24/7 Helpline</h4>
            <ul className="space-y-5 text-sm text-slate-200/80">
              <li className="flex items-start gap-4">
                <Phone className="text-shreeyash-accent mt-0.5" size={16} />
                <span className="font-bold text-white text-lg tracking-wider">+1 800 123 4567</span>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer hover:text-white transition-colors">
                <Mail className="text-shreeyash-accent mt-0.5" size={16} />
                <span>care@shreeyash.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-shreeyash-accent mt-0.5 shrink-0" size={16} />
                <span>123 Healing Blvd, Medical Center<br/>New York, NY 10001</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">&copy; {new Date().getFullYear()} Shreeyash Hospital. All rights reserved.</p>
          <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
