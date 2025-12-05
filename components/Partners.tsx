import React from 'react';
import { INSTRUCTORS } from '../constants';
import { Award, GraduationCap } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const Partners: React.FC = () => {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Learning Partners</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Belajar dari yang Terbaik</h1>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              Tim pengajar kami adalah dokter-dokter lulusan universitas ternama dengan predikat Cumlaude dan First Taker UKMPPD.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS.map((instructor, idx) => (
            <FadeIn key={instructor.id} delay={idx * 100}>
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="aspect-square bg-slate-100 relative group">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{instructor.name}</h3>
                  <p className="text-teal-600 font-medium text-sm mb-3">{instructor.role}</p>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <GraduationCap className="h-4 w-4" />
                    <span>{instructor.university}</span>
                  </div>

                  <div className="space-y-2">
                    {instructor.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Award className="h-3.5 w-3.5 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 leading-tight">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;