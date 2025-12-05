import React from 'react';
import { PROGRAMS } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

const Courses: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900">Our Programs</h2>
            <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
              Pilih program bimbingan yang sesuai dengan gaya belajar dan kebutuhan persiapan UKMPPD kamu.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, idx) => (
            <FadeIn key={program.id} delay={idx * 100} className="h-full">
              <div 
                className={`relative flex flex-col bg-white rounded-xl border ${program.isPopular ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-200'} shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full`}
              >
                {program.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 min-h-[40px]">{program.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {program.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className="h-5 w-5 text-teal-600 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                   <Button 
                     variant={program.isPopular ? 'primary' : 'secondary'} 
                     className="w-full justify-center group"
                   >
                     Detail Program <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;