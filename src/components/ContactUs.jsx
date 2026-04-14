import React from 'react';
import { Send, PhoneCall } from 'lucide-react';

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.1)] border-t-4 border-shreeyash-green flex flex-col md:flex-row gap-12 items-center" data-aos="zoom-in">
          
          <div className="flex-1 text-center md:text-left">
            <span className="text-shreeyash-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block">Reach Out</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 font-bold leading-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-sm">
              We are ready to assist you. Consult with our world-class medical experts today.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-lg font-serif text-shreeyash-green font-bold group">
              <span className="w-10 h-10 rounded-full bg-shreeyash-light flex items-center justify-center text-shreeyash-emerald group-hover:bg-shreeyash-green group-hover:text-white transition-colors">
                <PhoneCall size={16} />
              </span>
              +1 (800) 123-4567
            </a>
          </div>

          <form className="flex-1 w-full space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-shreeyash-green/20 focus:border-shreeyash-green transition-all" />
              <input type="text" placeholder="Last Name" className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-shreeyash-green/20 focus:border-shreeyash-green transition-all" />
            </div>
            <textarea rows="3" placeholder="How can we help?" className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-shreeyash-green/20 focus:border-shreeyash-green transition-all"></textarea>
            <button type="button" className="w-full bg-shreeyash-emerald hover:bg-shreeyash-green text-white text-[11px] font-bold uppercase tracking-widest px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Send Request <Send size={14} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
