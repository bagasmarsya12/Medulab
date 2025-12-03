import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Kata Mereka Tentang Medulab</h2>
          <p className="mt-2 text-slate-600">Bergabung dengan komunitas pembelajar profesional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-slate-100 fill-slate-100" />
              <p className="text-slate-600 italic mb-6 leading-relaxed relative z-10">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.avatarUrl} 
                  alt={item.name} 
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
